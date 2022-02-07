import {
  HeaderStyled,
  HeaderLogo,
  HeaderSearch,
  HeaderUser,
  MenuUser,
} from "./headerStyled";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { app, googleProvider } from "../../firebase/config";
import { loginWithGoogle, logoutFirebase } from "store/reducers/authSlice";
import { socialLogin, logout } from "../../firebase/methods";
import { useState } from "react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isOpen,
  setIsOpen,
}: HeaderProps): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart);
  const auth = useSelector((state: RootState) => state.auth);
  const [showMenuUser, setShowMenuUser] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {showMenuUser && (
        <MenuUser>
          <button
            onClick={() => {
              if (!auth.logged) {
                socialLogin(app, dispatch, loginWithGoogle, googleProvider);
                setShowMenuUser(false);
              } else {
                logout(app, dispatch, logoutFirebase);
                setShowMenuUser(false);
              }
            }}
          >
            {auth.logged ? "Logout" : "Login"}
          </button>
        </MenuUser>
      )}
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
          {auth && auth.user && (
            <h4 className="font-OpenSans text-c-black text-sm">{auth.user}</h4>
          )}
          <AiOutlineUser
            className="cursor-pointer"
            onClick={() => {
              setShowMenuUser(!showMenuUser);
            }}
          />
          <span>{cart && cart.products ? cart.products.length : 0}</span>
        </HeaderUser>
      </HeaderStyled>
    </>
  );
};
