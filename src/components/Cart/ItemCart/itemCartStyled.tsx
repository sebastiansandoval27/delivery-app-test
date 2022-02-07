import tw from "twin.macro";
import styled from "styled-components";

export const ItemCartComp = styled.div`
  ${tw`w-full h-20 flex items-center justify-between text-c-black font-OpenSans p-2 relative cursor-pointer`}
  transition: all 0.3s ease;
  &:hover {
    ${tw`bg-c-orange bg-opacity-30 rounded-lg`}
  }
  & > div.img {
    ${tw`w-20 h-full rounded-xl flex justify-center items-center`}
  }
  & > div.img > img {
    ${tw`w-full object-cover rounded-xl`}
  }
  & > div.text {
    ${tw`w-60 h-full flex items-center justify-center xl:px-2`}
    & > span {
      ${tw`flex justify-center items-center text-xs xl:text-sm w-12`}
    }
    & > h3 {
      ${tw`text-sm xl:text-base xl:ml-2 line-clamp-2 w-full`}
    }
  }
  & > span {
    ${tw`text-sm xl:ml-2 w-14 text-c-grey-dark`}
  }
`;
