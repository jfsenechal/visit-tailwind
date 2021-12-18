module.exports = {
    content: ["./src/**/*.{html,js,vue}", "*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Monserrat'],
            },
            colors: {
                cta: {
                    light: '#fd8383',
                    dark: '#487F89FF',
                    over: '#FD83838C'
                },
                patrimony: '#AAB7D8FF',
                walk: '#64966FFF',
                art: '#F5CC73FF',
                delicacy: '#EFBFB1FF',
                party: '#EFD7CDFF',
                home: '#E8DACBFF',
                caractere: '#636061',
                borderjf: '#dee2e6',
                grey: {
                  dark: '#636061FF',
                  basic: '#808080FF',
                }
            },
            boxShadow: {
                topNav: '0 -3px 0 0 #fd8383 inset',
            },
            flex: {
                full: '100% 1 1',
            },
            backgroundImage: {
                'chasse': "url('https://visitmarche.be/wp-content/uploads/2021/09/DSC_0504-scaled.jpg')",
                'escape': "url('https://visitmarche.be/wp-content/uploads/2021/10/4index.png')",
                'noel': "url('https://visitmarche.be/wp-content/uploads/2021/11/christmas-g22147f560_1280.png')",
                'totemus': "url('https://visitmarche.be/wp-content/uploads/2021/05/Chasse-au-tre%E2%95%A0usor.jpeg')",
            }
        },
    },
    plugins: [],
}
