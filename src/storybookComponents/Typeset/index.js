// @see https://github.com/storybookjs/storybook/blob/7064642e1aee7786c77fe735c064c0c29dbcee01/lib/components/src/blocks/Typeset.tsx
import React from "react";

const Label = (props) => (
  <div
    className="flex flex-col justify-center flex-grow-0 flex-shrink-0 w-1/6 mr-8 text-base text-grey500"
    {...props}
  />
);

const Sample = (props) => (
  <div
    className="overflow-hidden whitespace-nowrap overflow-ellipsis"
    {...props}
  />
);
const TypeSpecimen = (props) => (
  <div className="flex mb-4 align-baseline justify-items-start" {...props} />
);

const Wrapper = (props) => <div className="px-5 py-8" {...props} />;

/**
 * Convenient styleguide documentation showing examples of type
 * with different sizes and weights and configurable sample text.
 */
const Typeset = ({
  fontFamily,
  fontSize,
  fontWeight,
  sampleText,
  variants,
  ...props
}) => (
  <Wrapper {...props} className="docblock-typeset">
    {Object.entries(variants).map(([propname, options]) =>
      Object.entries(options).map(([optname, optvalue], i) => (
        <TypeSpecimen key={propname + i}>
          <Label>
            <div className="mb-2">{optname}</div>
            <div className="text-sm text-light-background-300">{optvalue}</div>
          </Label>
          <Sample
            style={{
              fontFamily,
              fontSize,
              fontWeight,
              lineHeight: 1.2,
              [propname]: optvalue,
            }}
          >
            {sampleText || "Was he a beast if music could move him so?"}
          </Sample>
        </TypeSpecimen>
      ))
    )}
  </Wrapper>
);

export default Typeset;
