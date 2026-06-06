// Password gate for Izzy's INSEAD Content Library.
// Runs before the static assets (run_worker_first) and asks for a password.
// Any username works; only the password is checked. To change it, edit PASSWORD and push.
const PASSWORD = "taylor-swift-rule";

export default {
  async fetch(request, env) {
    const header = request.headers.get("Authorization") || "";
    if (header.startsWith("Basic ")) {
      try {
        const decoded = atob(header.slice(6));
        const pass = decoded.slice(decoded.indexOf(":") + 1);
        if (pass === PASSWORD) return env.ASSETS.fetch(request);
      } catch (e) { /* fall through to 401 */ }
    }
    return new Response("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Izzy's INSEAD Content Library"' },
    });
  },
};
