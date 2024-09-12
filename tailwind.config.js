/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
