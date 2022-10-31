import React from "react";
import {
  Main,
  GridDiv,
  FirstNameDiv,
  FirstNameSpan,
  LastNameDiv,
  LastNameSpan,
  JobDiv,
  JobParagraph,
  FadeUpDiv,
} from "./home-loader.styles";

const HomeLoader = () => {
  return (
    <Main>
      <FadeUpDiv>
        <GridDiv>
          <h1 className="read-only">Sarah Hick</h1>
          <FirstNameDiv>
            <FirstNameSpan>Harsimran</FirstNameSpan>
          </FirstNameDiv>
          <LastNameDiv>
            <LastNameSpan>Kaur</LastNameSpan>
          </LastNameDiv>

          <JobDiv>
            <JobParagraph>Full-Stack Developer</JobParagraph>
          </JobDiv>
        </GridDiv>
      </FadeUpDiv>
    </Main>
  );
};

export default HomeLoader;
