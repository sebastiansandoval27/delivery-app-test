import tw from "twin.macro";
import styled from "styled-components";

export const ProductItemComp = styled.article`
  ${tw`flex flex-col items-center justify-center w-full h-auto rounded-lg font-OpenSans`}
`;

export const Image = styled.div`
  ${tw`w-full h-40 flex justify-center items-center relative rounded-lg overflow-hidden`}
  & > img {
    ${tw`w-full rounded-lg object-cover`}
  }
  & > div {
    ${tw`absolute w-auto h-8 flex justify-center items-center p-2 bottom-0 left-0 rounded-tr-lg rounded-bl-lg bg-c-grey-light text-c-black`}
  }
`;

export const Text = styled.div`
  ${tw`w-full h-auto flex flex-col justify-center items-start my-2 overflow-hidden line-clamp-1 px-1`}
  & > h3 {
    ${tw`font-bold text-c-black`}
  }
  & > div {
    ${tw`flex justify-start items-center h-auto`}
    & > span {
      ${tw`flex justify-start items-center text-c-grey-dark mx-2 my-2`}
    }
    & > span:first-child {
      ${tw`ml-0 text-c-black`}
      & > svg {
        ${tw`mr-1`}
      }
    }
  }
`;
