const StyleDictionary = require("style-dictionary");
const _ = require("lodash");

StyleDictionary.registerTransform({
  name: "size/px", // notice: the name is an override of an existing predefined method
  type: "value",
  matcher: function (prop) {
    /* supports both "pixel" and "pixels" */
    return (
      prop &&
      prop.original &&
      prop.original.unit &&
      prop.original.unit.startsWith("pixel")
    );
  },
  transformer: function (prop) {
    return `${prop.value}px`;
  },
});

const isTypographyToken = (prop) => {
  return (
    [
      "fontSize",
      "textDecoration",
      "fontFamily",
      "fontWeight",
      "fontStyle",
      "fontStretch",
      "fontStyleOld",
      "letterSpacing",
      "lineHeight",
      "paragraphIndent",
      "paragraphSpacing",
      "textCase",
    ].indexOf(prop.path[1]) !== -1
  );
};

StyleDictionary.registerTransform({
  name: "textTokens", // notice: the name is an override of an existing predefined method
  type: "value",
  matcher: isTypographyToken,
  transformer: function (prop) {
    return `${prop.value}px`;
  },
});

StyleDictionary.registerFormat({
  name: "nestedTypography",
  formatter: function (dictionary) {
    const textTokens = {
      fontSize: {},
      textDecoration: {},
      fontFamily: {},
      fontWeight: {},
      fontStyle: {},
      fontStretch: {},
      letterSpacing: {},
      lineHeight: {},
      paragraphIndent: {},
      paragraphSpacing: {},
      textCase: {},
    };
    // dictionary.properties.map((token) =>
    for (const propname in dictionary.properties) {
      const nameWithoutPrefix = _.camelCase(
        propname.startsWith("text-") ? propname.substring(5) : propname
      );

      const propDict = dictionary.properties[propname];
      for (const prop in propDict) {
        textTokens[prop][nameWithoutPrefix] = propDict[prop].value;
      }

      // textTokens[nameWithoutPrefix] = Object.keys(propDict).reduce(
      //   (res, key) => Object.assign(res, { [key]: propDict[key].value }),
      //   {}
      // );
    }
    return JSON.stringify(textTokens, null, 2);
  },
});

/* Basic filter to separate typography tokens. It might need tweaking depending on the token data shape */
StyleDictionary.registerFilter({
  name: "isTypography",
  matcher: isTypographyToken,
});

/* Basic filter to separate spacing tokens. */
StyleDictionary.registerFilter({
  name: "isSpacing",
  matcher: function (prop) {
    return prop.path[0] === "spacing";
  },
});

module.exports = {
  source: ["./src/tokens/design-tokens.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "./src/tokens/dist/",
      transforms: ["size/px", "name/cti/camel"],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        /* Filter and extract typography tokens */
        {
          destination: "typography.json",
          format: "nestedTypography",
          filter: "isTypography",
        },
        /* Filter and extract color tokens*/
        {
          destination: "colors.json",
          format: "json/nested",

          filter: {
            type: "color",
          },
        },
      ],
    },
  },
};
