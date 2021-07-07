// const defaultTheme = require("tailwindcss/defaultTheme");
const resolveConfig = require("tailwindcss/resolveConfig");
const colors = require("./src/tokens/dist/colors.json");
const typography = require("./src/tokens/dist/typography.json");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const typographyProps = [
  "fontSize",
  "textDecoration",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "letterSpacing",
  "lineHeight",
  "textCase",
];

const generateTypography = (variant, theme) => {
  return typographyProps.reduce((acc, prop) => {
    return { ...acc, [prop]: theme(`${prop}.${variant}`) };
  }, {});
};

const generateHighlights = (theme) => {
  const generateColors = (colors, prefix) =>
    Object.keys(colors).reduce((acc, key) => {
      if (typeof colors[key] === "string") {
        return {
          ...acc,
          [`${prefix}-${key}`]: `linear-gradient(to top, ${colors[key]} 0, ${colors[key]} 11px, transparent 11px)`,
        };
      }

      const innerColors = generateColors(colors[key], `${prefix}-${key}`);

      return {
        ...acc,
        ...innerColors,
      };
    }, {});

  return generateColors(theme("colors"), "highlight");
};

const conf = {
  important: true,
  purge: {
    enabled: true,
    mode: "all",
    content: ["./src/**/*.{js,jsx,md,mdx, txt}"],
  },
  theme: {
    fontSize: { ...typography.fontSize },
    fontWeight: { ...typography.fontWeight },
    lineHeight: { ...typography.lineHeight },
    letterSpacing: { ...typography.letterSpacing },
    extend: {
      width: {
        150: "150%",
      },
      minWidth: {
        96: "24rem",
      },
      maxWidth: {
        112: "28rem",
      },
      colors: {
        ...colors,
      },
      backgroundImage: (theme) => generateHighlights(theme),
      // This values are needed to position highlight according font size.
      backgroundPosition: {
        "9Xl": "0 -24px",
        "8Xl": "0 -16px",
        "7Xl": "0 -12px",
        "6Xl": "0 -8px",
        "5Xl": "0 -6px",
        "4Xl": "0 -4px",
        "3Xl": "0 -2px",
        "2Xl": "0 0",
        xl: "0 2px",
        xlBolder: "0 2px",
        lg: "0 4px",
        lgBolder: "0 4px",
        base: "0 4px",
        sm: "0 6px",
        smBolder: "0 6px",
        xs: "0 6px",
        xsBolder: "0 6px",
      },
      fontFamily: Object.fromEntries(
        Object.entries(typography.fontFamily).map(([fkey, fval]) => [
          fkey,
          [fval, ...defaultTheme.fontFamily.sans].join(","),
        ])
      ),
      scale: {
        mirror: "-1",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.light['on-background'].900"),
            maxWidth: "72ch",

            p: {
              ...generateTypography("base", theme),
              paddingBottom: "1rem",
            },
            strong: {
              color: "inherit",
              fontWeight: 500,
            },
            thead: {
              color: "inherit",
              fontWeight: 500,
            },
            h1: {
              ...generateTypography("6Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h2: {
              ...generateTypography("4Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h3: {
              ...generateTypography("2Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h4: {
              ...generateTypography("xlBolder", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h5: {
              ...generateTypography("base", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h6: {
              ...generateTypography("smBolder", theme),
              color: theme("colors.light['on-background'].900"),
            },
            pre: {
              backgroundColor: theme("colors.primary.100"),
              color: theme("colors.light['on-background'].900"),
              padding: "1rem",
            },
            code: {
              backgroundColor: theme("colors.primary.100"),
            },
            "code:before, code:after": {
              content: "",
            },
            blockquote: {
              backgroundColor: theme("colors.light['on-background'].100"),
              color: theme("colors.light['on-background'].900"),
              p: {
                paddingTop: "1rem",
                paddingRight: "0.5rem",
              },
            },
            "ul >li:before": {
              content: "-",
            },
            a: {
              color: theme("colors.light['on-background'].900"),
              cursor: "pointer",
            },
          },
        },
      }),
    },
    fontFace: {
      "Neue Montreal": [
        {
          filename: "NeueMontreal-Regular",
          style: "normal",
          weight: 400,
          display: "swap",
        },
        {
          filename: "NeueMontreal-Italic",
          style: "italic",
          weight: 400,
          display: "swap",
        },
        {
          filename: "NeueMontreal-Medium",
          style: "normal",
          weight: 500,
          display: "swap",
        },
        {
          filename: "NeueMontreal-MediumItalic",
          style: "italic",
          weight: 500,
          display: "swap",
        },
        // {
        //   filename: "NeueMontreal Regular ",
        // },
      ],
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      backgroundImage: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("./tailwindPlugins/font-face")(),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-left": {
          "clip-path": "inset( -100vw -100vw -100vw 0 )",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};

module.exports = conf;
