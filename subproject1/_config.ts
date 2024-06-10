import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";

const site = lume({
  src: "./src",
  location: new URL("https://akky.github.io/subproject1/"),
  port: 80,
});

site.use(base_path());

export default site;