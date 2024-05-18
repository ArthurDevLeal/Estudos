/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                14: "3.5rem",
                "100px": "100px",
                '90vh' : '90vh',
            },
            colors: {
                hoverspt: "#18D760",
                "purple-main": "#2D46B9",
                "green-main": "#1ED760",
            },
        },
    },
    plugins: [],
};
