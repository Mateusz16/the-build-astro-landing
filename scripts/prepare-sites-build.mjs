import { copyFile, mkdir, writeFile } from "node:fs/promises";

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.endsWith("/")) url.pathname += "index.html";
    let response = await env.ASSETS.fetch(new Request(url, request));
    if (response.status === 404 && !url.pathname.includes(".")) {
      url.pathname = url.pathname.replace(/\\/?$/, "/index.html");
      response = await env.ASSETS.fetch(new Request(url, request));
    }
    return response;
  },
};
`;

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await writeFile("dist/server/index.js", worker);
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
