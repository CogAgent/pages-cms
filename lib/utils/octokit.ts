/**
 * Create an Octokit instance that wraps the requests with a check for credentials
 * to log out the user if they revoked/lost access.
 */

import { Octokit } from "octokit";
import { handleSignOut } from "@/lib/actions/auth";

export const createOctokitInstance = (token: string) => {
  if (!token) throw new Error("Auth token is required to initialize Octokit");

  return new Octokit({
    auth: token,
    request: {
      fetch: async (url: string, options: RequestInit) => {
        try {
          const response = await fetch(url, options);
          
          // Only attempt to log out on a 401 status
          if (response.status === 401) {
            try {
              // Type assertion for the error response
              const data = await response.json() as { message?: string };
              if (data.message === "Bad credentials") {
                // If the user revoked access, sign them out
                await handleSignOut();
              }
            } catch (parseError) {
              // If we can't parse the JSON, just continue
              console.warn("Could not parse 401 response:", parseError);
            }
          }
          
          // Always return the original response regardless of status
          return response;
        } catch (error) {
          throw error;
        }
      }
    }
  });
};