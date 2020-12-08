import replace from 'rollup-plugin-replace';
import rimraf from 'rimraf';
import { version as packageVersion } from './package.json';

//clear out dist folder before build if any extra files are there
rimraf.sync("dist");

export default {
    input: "src/scripts/app.js",
    output: {
        file: "dist/scripts/app.js",
        format: "iife"
    },
    plugins: [
        replace({
            //replace the version in the input file specified above
            //the delimiters are important else it would replace all words named versions
            delimiters: ['{{', '}}'],
            version: packageVersion
        })
    ]
}