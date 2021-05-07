module.exports = {
    webpack(config, { webpack }){
        const prod = process.env.NODE_ENV === 'production';
        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        
                    }
                ],
            },
        },
    },
};