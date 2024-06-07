import { serveDir } from "jsr:@std/http/file-server";
Deno.serve({
  port: 8007,
  hostname: "lume.local",
}, (req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname.startsWith("/subproject1")) {
    return serveDir(req, {
      fsRoot: "subproject1/_site",
      urlRoot: "subproject1",
    });
  }

  if (pathname.startsWith("/subproject2")) {
    return serveDir(req, {
      fsRoot: "subproject2/_site",
      urlRoot: "subproject2",
    });
  }

  // if it does not match with any sub projects, return the main project
  return serveDir(req, {
    fsRoot: "mainproject/_site",
    urlRoot: "",
  });
});
