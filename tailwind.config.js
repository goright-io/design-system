// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./src/tokens/dist/colors.json");
const typography = require("./src/tokens/dist/typography.json");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,md,mdx}"],
  theme: {
    colors: {
      ...colors,
    },
    fontSize: { ...typography.fontSize },
    fontWeight: { ...typography.fontWeight },
    lineHeight: { ...typography.lineHeight },
    letterSpacing: { ...typography.letterSpacing },
    fontFamily: Object.fromEntries(
      Object.entries(typography.fontFamily).map(([fkey, fval]) => [
        fkey,
        [fval, ...defaultTheme.fontFamily.sans],
      ])
    ),
    scale: {
      mirror: "-1",
    },
  },
};
