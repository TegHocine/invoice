import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "250px auto",
      },
    },
  },
  plugins: [],
} satisfies Config;
