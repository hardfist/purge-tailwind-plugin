import path from 'path';
import { fileURLToPath } from 'url';
import tailwindConfig  from './tailwind.config.mjs';
import purgeTailwindPlugin from '../src/index.mjs';
const __filename = fileURLToPath(import.meta.url);
// Extract the directory name from the file path
const __dirname = path.dirname(__filename);
export default {
    context: __dirname,
    entry: {
        main: './src/index.js',
        second: './src/second.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    optimization:{
        minimize:false
    },
    experiments: {
        css:true
    },
    plugins: [purgeTailwindPlugin({
        tailwindConfig
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                type: 'css'
            },
        ],
    },
};