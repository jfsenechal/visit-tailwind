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
                },
                patrimony: '#AAB7D8FF',
                walk: '#64966FFF',
                art: '#F5CC73FF',
                delicaty: '#EFBFB1FF',
                party: '#EFD7CDFF'
            },
            boxShadow: {
                topNav: '0 -3px 0 0 #fd8383 inset',
            },
            flex: {
                full: '100% 1 1',
            },
        },
    },
    plugins: [],
}
