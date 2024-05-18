/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "main-gray": "#F0F2F5",
                "main-blue": "#1877F2",
                "main-blue-hover": "#166FE5",
                "main-green": "#42B72A",
                "main-green-hover": "#36A420",
            },
        },
    },
    plugins: [],
};
