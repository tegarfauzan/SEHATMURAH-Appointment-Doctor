/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
