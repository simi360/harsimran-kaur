import React from "react";
import PropTypes from "prop-types";

//The component needs to be written inline
//without the use of SVGR loader to keep the dynamic changes of colors

const Carret = (props) => {
  return (
    <svg viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1,0,0,1,-100.65,-2969.05)">
        <g transform="matrix(1,0,0,1,-5908.75,2498.26)">
          <g transform="matrix(1,0,0,1,5899.75,-2489.26)">
            <path
              d="M115.53,2968.75L110.185,2963.25C109.458,2962.51 109.474,2961.31 110.222,2960.58C110.97,2959.85 112.167,2959.87 112.895,2960.62L119.339,2967.24C119.744,2967.66 119.918,2968.21 119.865,2968.75C119.918,2969.28 119.744,2969.84 119.339,2970.25L112.895,2976.88C112.167,2977.63 110.97,2977.64 110.222,2976.91C109.474,2976.19 109.458,2974.99 110.185,2974.24L115.53,2968.75Z"
              fill={props.colors.color.primary}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

Carret.propTypes = {
  colors: PropTypes.shape({
    colors: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default Carret;