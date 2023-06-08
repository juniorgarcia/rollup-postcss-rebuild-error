const postcss = require('rollup-plugin-postcss')
const path = require('path')

/** @type {import('rollup').RollupOptions} */
module.exports = {
    input: './src/index.js',
    output: [
        {
          file: './dist/bundle.js',
          format: 'cjs',
        },
      ],
      plugins: [
        postcss({
            // extract: path.resolve(__dirname, 'dist/bundle.css'),
            extract: true,
        })
      ]
}
