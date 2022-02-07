import tw from "twin.macro";
import styled from "styled-components";

export const TitleSection = styled.section`
  ${tw`w-full h-auto flex justify-between items-center font-OpenSans mt-2 px-2 sm:w-11/12 xl:mt-3`}
  & > div {
    ${tw`flex justify-start items-center h-auto px-1`}
    & > h3 {
      ${tw`font-bold xl:text-3xl`}
    }
    & > img {
      ${tw`ml-2 w-8`}
    }
  }

  & > button {
    ${tw`flex justify-between items-center bg-c-orange p-2 text-c-white rounded-full text-sm sm:text-lg`}
    transition: all 0.3s ease;
    &:hover {
      ${tw`bg-c-orange-dark`}
    }
    & > h4 {
      ${tw`flex justify-center items-center h-full text-c-white font-bold text-sm ml-1 sm:text-base`}
      & > span {
        ${tw`mx-1 font-bold sm:text-lg`}
      }
    }
  }
`;
export const SliderContainer = styled.div`
  ${tw`w-full h-56 flex justify-center items-center p-3 my-3`}
`;

export const GridProducts = styled.section`
  ${tw`w-full h-auto my-3 p-2 grid justify-center items-center gap-3`}
  grid-template-columns: repeat(auto-fill, 290px);
  grid-template-rows: auto;
`;
