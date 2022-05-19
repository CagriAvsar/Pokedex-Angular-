module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: { node: 'current' },
            test: {
                "plugins": ["@babel/plugin-transform-modules-commonjs"]
            }
        }],
        '@babel/preset-typescript',
    ]
};