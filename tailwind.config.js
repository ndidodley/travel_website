module.exports = {
    content: ["./src/**/*.{html,js}",],
    theme: {
        extend: {
            colors: {
                'text': {
                    100: '',
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
