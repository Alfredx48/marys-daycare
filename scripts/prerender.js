// Writes the rendered page into dist/index.html so search engines see the
// full content without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const { render } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);

const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf8");
if (!template.includes("<!--app-html-->")) throw new Error("index.html is missing <!--app-html-->");
fs.writeFileSync(templatePath, template.replace("<!--app-html-->", render()));

// Keep the sitemap's last-modified date current.
const today = new Date().toISOString().slice(0, 10);
const sitemapPath = path.join(dist, "sitemap.xml");
fs.writeFileSync(sitemapPath, fs.readFileSync(sitemapPath, "utf8").replace("</loc>", `</loc><lastmod>${today}</lastmod>`));

fs.rmSync("dist-ssr", { recursive: true, force: true });
console.log("Prerendered dist/index.html");
