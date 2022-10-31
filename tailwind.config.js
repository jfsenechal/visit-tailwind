/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                "montserrat-medium": [
                    "montserrat-medium",
                    ...defaultTheme.fontFamily.sans
                ],
                "montserrat-thin": ["montserrat-thin", ...defaultTheme.fontFamily.sans],
                "montserrat-light": [
                    "montserrat-light",
                    ...defaultTheme.fontFamily.sans
                ],
                "montserrat-extra-light": [
                    "montserrat-extra-light",
                    ...defaultTheme.fontFamily.sans
                ],
                "montserrat-regular": [
                    "montserrat-regular",
                    ...defaultTheme.fontFamily.sans
                ],
                "montserrat-bold": ["montserrat-bold", ...defaultTheme.fontFamily.sans],
                "montserrat-semi-bold": [
                    "montserrat-semi-bold",
                    ...defaultTheme.fontFamily.sans
                ],
                "montserrat-extra-bold": [
                    "montserrat-extra-bold",
                    ...defaultTheme.fontFamily.sans
                ]
            },
            colors: {
                cta: {
                    light: '#fd8383',
                    dark: '#487F89FF',
                    hover: '#FD83838C'
                },
                patrimony: '#AAB7D8FF',
                walk: '#64966FFF',
                art: '#F5CC73FF',
                delicacy: '#EFBFB1FF',
                party: '#EFD7CDFF',
                home: '#E8DACBFF',
                caractere: '#636061',
                borderjf: '#dee2e6',
                pastel: '#e7dacb',
                grey: {
                    dark: '#636061FF',
                    basic: '#808080FF',
                },
                bglighter: '#ededec',
                body: '#212529'
            },
            boxShadow: {
                topNav: '0 -3px 0 0 #fd8383 inset',
            },
            flex: {
                full: '100% 1 1',
            },
            backgroundImage: {
                'home': "url('https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_home.jpg')",
                'chasse': "url('https://visitmarche.be/wp-content/uploads/2021/09/DSC_0504-scaled.jpg')",
                'escape': "url('https://visitmarche.be/wp-content/uploads/2021/10/4index.png')",
                'noel': "url('https://visitmarche.be/wp-content/uploads/2021/11/christmas-g22147f560_1280.png')",
                'totemus': "url('https://visitmarche.be/wp-content/uploads/2021/05/Chasse-au-tre%E2%95%A0usor.jpeg')",
                'inspiration': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
            }
        },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio")
    ],
}
