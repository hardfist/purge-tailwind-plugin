# PurgeTailwindPlugin
Use wepback | rspack's ModuleGraph to purge tailwind

## Usage
```js
// webpack.config.js
import purgeTailwindPlugin from 'purge-tailwind-plugin';
export default {
    plugins: [purgeTailwindPlugin({
        tailwindConfig
    })],
}
```