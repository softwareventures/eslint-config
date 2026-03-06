import config from "./index.js";
import {defineConfig} from "eslint/config";

export default defineConfig(config, {
    ignores: [
        ".idea/**",
        "**/node_modules/**",
        "**/*.{,c,m}js",
        "**/*.d.{,c,m}ts{,x}",
        "**/*.map",
        "!types/**/*.d.{,c,m}ts{,x}"
    ]
});
