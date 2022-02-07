import tw from "twin.macro";
import styled from "styled-components";

interface OrderProps {
  isOpen: boolean;
}

export const Order = styled.div<OrderProps>`
  transition: all 0.3s ease;
  ${tw`fixed z-50 top-0 w-full h-screen bg-c-grey-light border-l-2 border-solid border-c-grey-text border-opacity-30 flex flex-col 
  items-center justify-start py-5 px-2 xl:w-3/12 xl:right-0`}
  ${({ isOpen }) => (isOpen ? tw`right-0` : tw`right-full`)}

  & > div.container {
    ${tw`w-full h-full overflow-y-auto relative`}
  }
`;

export const OrderHeader = styled.div`
  ${tw`w-full h-16 flex justify-end items-center font-OpenSans font-bold text-c-black px-2`}
  & > div {
    ${tw`flex justify-center items-center`}
    & > svg {
      ${tw`w-8 h-8 xl:w-10 xl:h-10`}
    }
    & > span {
      ${tw`text-lg p-2 bg-c-yellow flex justify-center items-center rounded-full xl:text-xl`}
    }
  }
  & > svg {
    ${tw`w-8 h-8 xl:hidden`}
  }
`;
export const OrderTitle = styled.div`
  ${tw`my-3 xl:my-5 w-full h-20 flex justify-start items-center font-OpenSans font-bold text-c-black px-2`}

  & > h3 {
    ${tw`text-xl xl:text-2xl`}
  }
`;
export const OrderDetails = styled.div`
  ${tw`w-11/12 bg-c-purple p-4 flex flex-col justify-center items-center font-OpenSans font-bold text-c-black px-2 rounded-2xl`}
  & > div {
    ${tw`px-3`}
  }
  & > h3 {
    ${tw`text-xl xl:text-2xl`}
  }
  & > div.first {
    ${tw`w-full h-auto flex justify-between items-center text-c-white`}
    & > span {
      ${tw`text-c-yellow`}
    }
  }
  & > div.second {
    ${tw`w-full h-auto flex items-center mt-5`}

    & > div {
      ${tw`w-1/2 h-full flex justify-start items-center rounded-lg`}
      & > span {
        ${tw`text-c-yellow bg-c-purple-light p-3 rounded-lg`}
        & > svg {
          ${tw`w-6 h-6 text-c-yellow`}
        }
      }
      & > h3 {
        ${tw`text-c-white ml-3`}
      }
    }

    & > span {
      ${tw`w-1/2 flex justify-end text-c-yellow `}
    }
  }
`;
export const OrderProducts = styled.div`
  ${tw`mt-4 w-11/12 flex flex-col justify-start items-center font-OpenSans font-bold text-c-black px-2`}
  & > div {
    width: 100%;
  }
`;

export const Deliveryitem = styled.div`
  ${tw`w-full h-16 my-2 p-2 flex items-center font-OpenSans`}
  & > div {
    ${tw`bg-c-yellow bg-opacity-40 w-16 h-full flex justify-center items-center text-c-yellow text-2xl rounded-lg justify-self-start`}
  }
  & > h3 {
    ${tw`w-3/4 pl-5`}
  }
  & > span {
    ${tw`text-c-grey-dark justify-self-end`}
  }
`;
export const OrderTotal = styled.div`
  ${tw`w-11/12 h-20 my-2 p-2 flex items-center font-OpenSans border-b-2 border-solid border-gray-300`}
  & > div {
    ${tw`w-full h-full flex justify-between items-center text-c-black font-bold`}
    & > h3 {
      ${tw`text-lg`}
    }
    & > h2 {
      ${tw`text-xl`}
    }
  }
`;
export const OrderButtons = styled.div`
  ${tw`w-full h-20 mt-4 mb-2 pl-2 flex justify-between items-center font-OpenSans`}
  & > div.persons {
    ${tw`w-1/2 h-full flex flex-col justify-center items-start`}
    & > h4 {
      ${tw`ml-2`}
    }
    & > span {
      ${tw`w-24 h-20 py-3 px-2 my-2 flex justify-between items-center rounded-xl border-2 border-solid border-c-grey-text`}
    }
  }
  & > div.button {
    ${tw`w-1/2 h-full bg-c-yellow rounded-tl-xl rounded-bl-xl flex justify-center items-center`}
    & > svg {
      ${tw`ml-3`}
    }
  }
`;

export const MenuUser = styled.div`
  ${tw`w-auto h-auto bg-c-purple p-2 mx-auto absolute rounded-lg top-20 right-10 z-50 transition-all`}
  z-index: 1000;
  & > button {
    ${tw`w-full h-auto text-c-white font-OpenSans font-bold p-3`}
  }
`;
