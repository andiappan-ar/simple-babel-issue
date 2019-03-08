module.exports = function babelConfig(api) {
    api.cache.forever();
    return {
        babelrcRoots: [
            // Keep the root as a root
            '.',
            // Also consider monorepo packages "root" and load their .babelrc files.
            './packages/*',
        ],
        presets: [
            'babel-preset-es2015',
            'babel-preset-react'
        ],
        plugins: [
            '@babel/syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-arrow-functions',
        ],
        env: {
            test: {
                presets: [
                    [
                        '@babel/env',
                        {
                            useBuiltIns: 'usage',
                            targets: {
                                browsers: ['> 1%'],
                            },
                        },
                    ],
                    '@babel/react',
                ],
            },
        },
    };
};
