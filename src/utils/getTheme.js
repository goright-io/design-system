import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export default resolveConfig(tailwindConfig).theme;

export const getBreakpoints = () => {
  const screens = resolveConfig(tailwindConfig).theme.screens;
  let breakpoints = {};
  for (let screen in screens) {
    breakpoints[screen] = parseInt(screens[screen]);
  }
  return breakpoints;
};

export function getColors() {
  const generateColors = (colors, prefix) =>
    Object.keys(colors).reduce((acc, key) => {
      const newPrefix = `${prefix.length > 0 ? prefix + "-" : ""}${key}`;
      if (typeof colors[key] === "string") {
        return {
          ...acc,
          [newPrefix]: colors[key],
        };
      }

      const innerColors = generateColors(colors[key], newPrefix);

      return {
        ...acc,
        ...innerColors,
      };
    }, {});
  return generateColors(resolveConfig(tailwindConfig).theme.colors, "");
}
