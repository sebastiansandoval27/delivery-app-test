import {
  HeaderStyled,
  HeaderLogo,
  HeaderSearch,
  HeaderUser,
} from "./headerStyled";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isOpen,
  setIsOpen,
}: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled>
      <HeaderLogo>
        <HiOutlineMenuAlt4 onClick={() => setIsOpen(!isOpen)} />
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
