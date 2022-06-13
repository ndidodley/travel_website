module.exports = {
    content: ["./src/**/*.{html,js}",],
    theme: {
        extend: {
            colors: {
                'extra': {
                    1: '#59B1E6',
                    2: ''
                },
                'text': {
                    100: '#84829A',
                    200: '#5E6282',
                    300: '',
                    400: '',
                    500: '#14183E',
                },
                'accent': {
                    100: '#F1A501',
                    200: '',
                    300: '#F1A501',
                    400: '',
                    500: '#DF6951',
                }
            }
        },
        fontFamily: {
            'sans': ['Poppins', 'Inter'],
        },
    },
    plugins: [],
}
