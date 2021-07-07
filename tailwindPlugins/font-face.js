/**
 * Add `@font-face` declarations.
 *
 * @source: https://github.com/studiometa/tailwind-config/blob/develop/src/plugins/font-face.js
 */
module.exports = function fontFacePluginFactory() {
  return function fontFacePlugin({ addBase, theme }) {
    const fonts = theme("fontFace", {});
    Object.entries(fonts).forEach(([name, styles]) => {
      styles.forEach(
        ({ filename, weight = 400, style = "normal", display = "auto" }) => {
          addBase({
            "@font-face": {
              fontFamily: name,
              fontWeight: weight,
              fontStyle: style,
              fontDisplay: display,
              src: [
                // `local("${filename}")`,
                `url("/fonts/${filename}.woff") format("woff")`,
              ].join(", "),
            },
          });
        }
      );
    });
  };
};
