import {
  Deliveryitem,
  MenuUser,
  Order,
  OrderButtons,
  OrderDetails,
  OrderHeader,
  OrderProducts,
  OrderTitle,
  OrderTotal,
} from "./cartStyled";
import { ItemCart } from "components";

import {
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineClockCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Cart as CartModel } from "store/models/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { app, googleProvider } from "../../firebase/config";
import { loginWithGoogle, logoutFirebase } from "store/reducers/authSlice";
import { socialLogin, logout } from "../../firebase/methods";
import { RootState } from "store";

interface CartProps {
  openOrder: boolean;
  items?: {
    products: CartModel[];
    total: number;
  };
  setOpenOrder: (openOrder: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({
  openOrder,
  setOpenOrder,
  items,
}): JSX.Element => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const [showMenuUser, setShowMenuUser] = useState(false);

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
      <Order isOpen={openOrder}>
        <div className="container">
          <OrderHeader>
            <div>
              {auth && auth.user && (
                <h4 className="font-OpenSans text-c-black text-sm">
                  {auth.user}
                </h4>
              )}
              <AiOutlineUser
                className="cursor-pointer"
                onClick={() => {
                  setShowMenuUser(!showMenuUser);
                }}
              />
              <span>
                {items && items.products.length ? items.products.length : 0}
              </span>
            </div>
            <AiOutlineClose onClick={() => setOpenOrder(false)} />
          </OrderHeader>
          <OrderTitle>
            <h3>
              My ???? <br /> Order
            </h3>
          </OrderTitle>
          <OrderDetails>
            <div className="first">
              <h3>625 St Marks Ave</h3>
              <span>Edit</span>
            </div>
            <div className="second">
              <div>
                <span>
                  <AiOutlineClockCircle />
                </span>
                <h3>35 min</h3>
              </div>
              <span>Choose time</span>
            </div>
          </OrderDetails>
          <OrderProducts>
            <div>
              {items && items.products ? (
                items.products.map((item) => {
                  if (item.product.id !== 0) {
                    return <ItemCart product={item} key={item.product.id} />;
                  }
                })
              ) : (
                <div className="empty">
                  <h3>Your cart is empty</h3>
                </div>
              )}
              <Deliveryitem>
                <div>
                  <FaCarSide />
                </div>
                <h3>Delivery</h3>
                <span>$0.00</span>
              </Deliveryitem>
            </div>
          </OrderProducts>
          <OrderTotal>
            <div>
              <h3>Total</h3>
              <h2>{items && items.total ? items.total.toFixed(2) : 0}</h2>
            </div>
          </OrderTotal>
          <OrderButtons>
            <div className="persons">
              <h4>Persons</h4>
              <span>
                <AiOutlinePlus />
                1
                <AiOutlineMinus />
              </span>
            </div>
            <div className="button">
              <h4>Checkout</h4>
              <GrLinkNext />
            </div>
          </OrderButtons>
        </div>
      </Order>
    </>
  );
};
