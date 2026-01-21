/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',    // Slate 900
                secondary: '#334155',  // Slate 700
                accent: '#2563eb',     // Blue 600
                surface: '#f8fafc',    // Slate 50
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
                serif: ['Georgia', 'Times New Roman', 'serif'],
            },
        },
    },
    plugins: [],
}
