import postcss from "postcss";
import tailwind from "tailwindcss";
/**
 * purge tailwind class according to module graph
 * @param {{tailwindConfig:any}} config
 * @returns
 */
export default function purgeTailwindPlugin(config) {
  return {
    name: "tailwind-purge-plugin",
    /**
     *
     * @param {import('@rspack/core').Compiler} compiler
     */
    apply(compiler) {
      compiler.hooks.thisCompilation.tap("compilation", (compilation) => {
        compilation.hooks.processAssets.tapPromise(
          { name: "process-tailwind" },
          async (_assets) => {
            for (const entrypoint of compilation.entrypoints.values()) {
              // collect all the modules corresponding to specific entry
              const entry_modules = new Set();
              for (const chunk of entrypoint.chunks) {
                let modules = compilation.chunkGraph.getChunkModules(chunk);
                modules.forEach((module) => {
                  entry_modules.add(module.resource);
                });
              }
              const all_contents = [
                ...entry_modules,
                ...config.tailwindConfig.content,
              ].filter(Boolean);
              const postcss_transform = postcss([ tailwind({...config.tailwindConfig,content:all_contents})]);
              // iterate all css asset in entry and inject entry_modules into tailwind content
              for (const file of entrypoint.getFiles()) {
                const asset = compilation.getAsset(file);
                if (file.endsWith(".css") && asset) {
                  const content = asset.source.source();
                  // transform .css which contains tailwind mixin
                  // FIXME: add custom postcss config
                  const transformed_css = await postcss_transform.process(
                    content
                  );
                  // FIXME: add sourcemap support 
                  compilation.updateAsset(file,new compiler.webpack.sources.RawSource(transformed_css.css))
                }
              }
            }
          }
        );
      });
    },
  };
}
