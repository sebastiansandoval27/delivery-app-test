import tw from "twin.macro";
import styled from "styled-components";

export const CardActionComp = styled.section`
  ${tw`w-11/12 h-auto bg-c-pink-light grid justify-between items-center pt-3 px-1 rounded-xl sm:h-60 sm:mt-10`}
  grid-template-areas:
    "text"
    "button"
    "image";
  & > img {
    grid-area: image;
    width: 220px;
    margin: 0 auto;
  }
  @media screen and (min-width: 640px) {
    grid-template-areas:
      "image text"
      "image button";
  }
  @media screen and (min-width: 768px) {
    & > img {
      width: 300px;
      margin: -50px auto 0;
    }
  }
  @media screen and (min-width: 992px) {
    & > img {
      width: 300px;
      margin: -50px auto 0;
    }
    grid-template-areas: "image text button";
  }
`;

export const CardActionText = styled.div`
  ${tw`flex flex-col justify-center items-start h-full font-OpenSans sm:h-auto xl:justify-start`}

  & > h3 {
    ${tw`flex justify-center items-center h-full text-c-orange font-bold text-lg sm:h-auto xl:text-2xl`}
  }
  & > p {
    ${tw`flex justify-center items-center h-full text-c-grey-text font-bold text-sm sm:items-start sm:h-auto xl:text-xl`}
  }
`;

export const CardActionButton = styled.button`
  ${tw`w-full h-5 flex justify-center items-center px-5 mt-3 lg:h-full lg:items-end lg:pb-4 cursor-pointer`}

  & > h3 {
    ${tw` font-OpenSans flex justify-center items-center h-full text-c-orange font-bold text-lg lg:h-auto xl:text-xl`}
  }

  & > img {
    ${tw`ml-3 w-5 xl:w-7`}
  }
`;
