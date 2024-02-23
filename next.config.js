/* eslint-env node */

module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(vert|frag)$/,
            loader: 'raw-loader',
        })
        return config
    },
}
