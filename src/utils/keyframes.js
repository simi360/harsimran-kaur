import { keyframes } from "styled-components";

const translateVerticalDesktops = keyframes`
    0% {
        transform: translateY(0);
    }
    60% {
        /* 
            needed to have the bottom of image stop at bottom of it's parent
           -100% of image size + 50% device width - all padings of slide & slider * height of parent padding-top
         */
        transform: translateY(calc(-100% + ((50vw - 6rem) * 0.56)));
    }
    80% {
        transform: translateY(calc(-100% + ((50vw - 6rem) * 0.56)));
    }
    90% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
`;

const translateVerticalUltraLargeDesktops = keyframes`
    0% {
        transform: translateY(0);
    }
    60% {
        /* 
            needed to have the bottom of image stop at bottom of it's parent
            -100% of image size + 1/12 of container max-width * parent's padding-top height - img paddings
         */
        transform: translateY(calc(-100% + (1920px / 12 * 5 * 0.56) - 4rem));
    }
    80% {
        transform: translateY(calc(-100% + (1920px / 12 * 5 * 0.56) - 4rem));
    }
    90% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
`;

const translateVerticalTablets = keyframes`
    0% {
        transform: translateY(0);
    }
        /* 
            needed to have the bottom of image stop at bottom of it's parent
            -100% of image size + (device with * par centerPercentage of slider - slides paddings) * parent pading-top height
         */
    60% {
        transform: translateY(calc(-100% + ((100vw * 0.65 - 5rem) * 0.56)));
    }
    80% {
        transform: translateY(calc(-100% + ((100vw * 0.65 - 5rem) * 0.56)));
    }
    90% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
`;

const translateVerticalMobile = keyframes`
    0% {
        transform: translateY(0);
    }
        /* 
            needed to have the bottom of image stop at bottom of it's parent
            -100% of image size + image width * parent's padding top height
            the img width is set in MovingImgWithBg.styles
         */
    60% {
        transform: translateY(calc(-100% + 250px * 1.5));
    }
    80% {
        transform: translateY(calc(-100% + 250px * 1.5));
    }
    90% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
`;

const translateDot = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    
    30% {
        transform: translateY(0);
        opacity: 1;
    }
    70% {
        transform: translateY(0.9rem);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const rotateTurtle = keyframes`
 0% {
        transform: rotate(185deg);
    }
    
    10% {
        transform: rotate(195deg);
    }
    
    25% {
        transform: rotate(175deg);
    }
    40% {
        transform: rotate(190deg);
    }
    50% {
        transform: rotate(185deg);
    }
    100% {
        transform: rotate(185deg);
    }
`;

const primaryRGB = "234,102,22";

const cubeAnimation = keyframes`
    0% {
        border: 20px solid rgba(${primaryRGB}, 0.9);
        border-right:20px solid rgba(${primaryRGB}, 0.5);
        
    }
    25% {
        border: 20px solid rgba(${primaryRGB}, 0.9);
        border-bottom:20px solid rgba(${primaryRGB}, 0.5);
    }
    50% {
        border: 20px solid rgba(${primaryRGB}, 0.9);
        border-left:20px solid rgba(${primaryRGB}, 0.5);
    }
    75% {
        border: 20px solid rgba(${primaryRGB}, 0.9);
        border-top:20px solid rgba(${primaryRGB}, 0.5);
    }
    100% {
        border: 20px solid rgba(${primaryRGB}, 0.9);
        border-right:20px solid rgba(${primaryRGB}, 0.5);
        
    }
`;

export {
  translateVerticalDesktops,
  translateVerticalUltraLargeDesktops,
  translateVerticalTablets,
  translateVerticalMobile,
  translateDot,
  rotateTurtle,
  cubeAnimation,
};