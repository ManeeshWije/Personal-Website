/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./src/**/*.{html,js,tsx}", "./src/components/*.{html,js,tsx}"],
    theme: {
        extend: {}
    },
    plugins: []
});
