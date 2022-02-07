import tw from "twin.macro";
import styled from "styled-components";

interface FoodItemProps {
  active: boolean;
}

export const FoodItemStyled = styled.div<FoodItemProps>`
  ${tw`w-24 h-44 flex flex-col items-center justify-start my-2 rounded-full shadow-xl py-3 cursor-pointer`}
  ${({ active }) => (active ? tw`bg-c-yellow bg-opacity-100` : tw`bg-c-white`)}
  & > h3 {
    ${tw`font-OpenSans text-c-black text-lg font-bold mt-3 w-full line-clamp-1 text-center`}
  }
  transition: all 0.3s ease;
  border: 1px solid transparent;
  &:hover {
    ${tw`bg-c-yellow bg-opacity-60`}
  }
`;

export const FoodItemImage = styled.div`
  ${tw`w-20 h-20 rounded-full bg-c-white p-3 flex items-center justify-center border-solid border-2 border-c-grey-dark border-opacity-20`}
  & > img {
    ${tw`w-12 h-12`}
  }
`;
