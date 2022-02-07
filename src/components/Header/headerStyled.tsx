import tw from "twin.macro";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  ${tw`w-full h-auto grid justify-between items-center gap-3 p-3 font-OpenSans font-bold text-c-black overflow-hidden`}
  grid-template-areas:
    "logo user"
    "search search";
  @media screen and (min-width: 480px) {
    grid-template-areas: "logo search user";
  }
`;

export const HeaderLogo = styled.div`
  ${tw`flex justify-start items-center font-OpenSans font-bold text-c-black md:text-lg`}
  grid-area: logo;
  & h3 {
    margin: 0 10px;
  }
`;

export const HeaderSearch = styled.div`
  grid-area: search;
  transition: all 0.3s ease;
  ${tw`w-full h-10 md:h-12 p-2 flex justify-start items-center 
    font-OpenSans font-bold text-c-black rounded-lg border-2 border-solid border-transparent
    bg-c-grey-light outline-none focus:outline-none focus:border-none`}
  & > svg {
    ${tw`w-6 h-6`}
  }
  & > input {
    ${tw`ml-2 border-none bg-transparent h-full flex-1 px-2 outline-none`}
  }
  &:hover {
    ${tw`border-2 border-solid border-black`}
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 992px) {
    width: 500px;
  }
`;
export const HeaderUser = styled.div`
  ${tw`flex justify-end items-center font-OpenSans font-bold text-c-black lg:hidden`}
  grid-area: user;

  & svg {
    ${tw`text-xl mr-1 md:text-2xl`}
  }

  & span {
    ${tw`w-auto h-auto rounded-lg bg-c-yellow flex justify-center items-center p-2 text-c-black`}
  }
`;

export const MenuUser = styled.div`
  ${tw`w-auto h-auto bg-c-purple p-2 mx-auto absolute rounded-lg top-20 right-10 z-50 transition-all`}
  z-index: 1000;
  & > button {
    ${tw`w-full h-auto text-c-white font-OpenSans font-bold p-3`}
  }
`;
