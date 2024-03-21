/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            display: "poppins",
            body: "montserrat",
        },
        extend: {
            colors: {
                secondary: "#1E1E1E",
            },
            fontSize: {},
        },
    },
    plugins: [],
}
