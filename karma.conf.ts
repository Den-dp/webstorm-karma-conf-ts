import type { Config } from "karma";

export default function (config: Config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["sum.spec.js"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
}
