import styled from "styled-components";
import Project from "../../../project/project-desktop/ProjectDesktop";
import Pagination from "../../pagination/Pagination";
import Scroll from "../../../icons/scroll/Scroll";

const SliderContainer = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    max-width: 49rem;
    height: 69.5vh;
    position: fixed;
    top: 20.4vh;
    left: 33.6vw;
    display: block;
    background: ${(p) => p.theme.color.primaryLight};
    transform: translateX(100vw);
    transition: ${(p) => `transform 0.4s ${p.theme.animations.easeIn};`};
    transition-delay: 0.2s;
    z-index: -1;
  }

  .change-route-enter-done & {
    &::before {
      transform: translateX(0);
      transition: ${(p) => `transform 0.9s ${p.theme.animations.easeOut};`};
      transition-delay: 0s;
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    &::before {
      width: calc(100% / 12 * 5);
      height: 79.3vh;
      top: 10.3vh;
    }
  }

  @media (min-width: ${(p) => `${p.theme.container}px`}) {
    &::before {
      left: ${(p) => `calc(50vw - ${p.theme.container}px/6)`};
    }
  }
`;

const SliderProject = styled(Project)`
  width: 100%;
  height: 100%;
  max-height: 1080px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WorkSliderPagination = styled(Pagination)`
  position: fixed;
  top: 13.5vh;
  right: 5.5vw;
  z-index: 10;
  transition: background-color 0.25s ease-in-out;

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    top: 17.5vh;
    right: 18.5vw;
  }

  @media (min-width: ${(p) => `${p.theme.container}px`}) {
    right: ${(p) =>
      `calc(50vw - ${p.theme.container}px/4 - ${p.theme.container}px/28)`};
  }
`;

const SliderButtons = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 11.5vw;
  z-index: 100;

  @media (min-width: ${(p) => `${p.theme.bp.largeDesktops}px`}) {
    display: none;
  }

  @media (orientation: portrait) and (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    bottom: 20vh;
    left: 7.3vw;
  }
`;

const ScrollIcon = styled(Scroll)`
  position: fixed;
  bottom: 1.75rem;
  left: calc(50% - 0.75rem);

  @media (orientation: portrait) {
    display: none;
  }
`;

export {
  SliderContainer,
  SliderProject,
  WorkSliderPagination,
  SliderButtons,
  ScrollIcon,
};
