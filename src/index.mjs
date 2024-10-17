import postcss from "postcss";
import tailwind from "tailwindcss";
/**
 *
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
              ];
              for (const file of entrypoint.getFiles()) {
                const asset = compilation.getAsset(file);
                if (file.endsWith(".css") && asset) {
                  const content = asset.source.source();
                  console.log('content:',entrypoint.name,content);
                  const transformed_css = await postcss([ tailwind({...config.tailwindConfig,content:all_contents})]).process(
                    content
                  );
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
