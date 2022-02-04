import {
  HeaderStyled,
  HeaderLogo,
  HeaderSearch,
  HeaderUser,
} from "./headerStyled";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <HeaderStyled primary={true}>
      <HeaderLogo>
        <HiOutlineMenuAlt4 />
        <h3>Chukwudi</h3>
      </HeaderLogo>
      <HeaderSearch>
        <AiOutlineSearch />
        <input type="text" placeholder="search" />
      </HeaderSearch>
      <HeaderUser>
        <AiOutlineUser />
        <span>10</span>
      </HeaderUser>
    </HeaderStyled>
  );
};
