// Dummy file to satisfy wrangler dev
export default {
  fetch(request, env, ctx) {
    // This worker does nothing itself, wrangler dev proxies to the command
    return new Response("Proxying to next dev...", { status: 503 }); // Return dummy response
  },
};
