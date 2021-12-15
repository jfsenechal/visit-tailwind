module.exports = {
    content: ["./src/**/*.{html,js,vue}", "*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto'],
            },
            colors: {
                cta: {
                    light: '#fd8383',
                    dark: '#487F89FF'
                }
            },
            boxShadow: {
                zeze: '0 -3px 0 0 #4ae0c7 inset',
            },
            flex: {
                full: '100% 1 1',
            },
        },
    },
    plugins: [],
}
