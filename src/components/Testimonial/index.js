import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Text from "../Text";
import classnames from "classnames";
import { getBreakpoints } from "../../utils/getTheme";
const breakpoints = getBreakpoints();
import { ArrowRight32, ArrowLeft32 } from "@carbon/icons-react";

/* Testimonial
 *
 * A carousel to display testimonials
 */

const responsive = {
  bigdesktop: {
    breakpoint: { max: 6000, min: breakpoints["2xl"] },
    items: 2,
    paritialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: breakpoints["2xl"], min: breakpoints.xl },
    items: 2,
    paritialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: breakpoints["xl"], min: breakpoints.md },
    items: 2,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: breakpoints.md, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
};

const HeadingWithButtons = ({ previous, next, carouselState }) => {
  const { currentSlide, slidesToShow, totalItems } = carouselState;
  const isLeftArrowDisabled = currentSlide === 0;
  const isRightArrowDisabled = currentSlide + slidesToShow >= totalItems;

  return (
    <div className="absolute top-0 right-0 flex mr-16">
      <button
        disabled={isLeftArrowDisabled}
        className={classnames(
          "mr-14",
          isLeftArrowDisabled
            ? "text-gray-100"
            : "text-light-on-background-900 "
        )}
        onClick={previous}
      >
        <ArrowLeft32 />
      </button>
      <button
        disabled={isRightArrowDisabled}
        className={classnames(
          isRightArrowDisabled
            ? "text-gray-100"
            : "text-light-on-background-900"
        )}
        onClick={next}
      >
        <ArrowRight32 />
      </button>
    </div>
  );
};

HeadingWithButtons.propTypes = {
  carouselState: PropTypes.shape({
    currentSlide: PropTypes.number,
    slidesToShow: PropTypes.any,
    totalItems: PropTypes.any,
  }),
  next: PropTypes.any,
  previous: PropTypes.any,
};
const Testimonial = ({ testimonials, className, ...props }) => {
  return (
    <Carousel
      className={"relative " + className}
      partialVisible
      containerClass="container pt-16 clip-left overflow-visible"
      sliderClass="mt-16"
      customButtonGroup={<HeadingWithButtons />}
      itemClass="h-auto"
      arrows={false}
      responsive={responsive}
      renderButtonGroupOutside
      {...props}
    >
      {testimonials.map((testimonial) => {
        return (
          <div
            key={testimonial.name}
            className={classnames(
              testimonial.colors,
              "p-10 mr-10 rounded-lg h-full flex flex-col"
            )}
          >
            <Text variant="xlBolder" as="p" className="mb-6">
              {testimonial.text}
            </Text>
            <div className="flex items-center mt-auto">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 mr-3 rounded-full"
                />
              )}
              <Text variant="xlBolder" as="p">
                {testimonial.name}
              </Text>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      text: PropTypes.string,
      /* specify tailwind classes here */
      colors: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

export default Testimonial;
