import { Header, Footer, Cart } from "components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const Layout = (props) => {
  const cart = useSelector((state: RootState) => state.cart);

  const [openOrder, setOpenOrder] = useState(false);

  return (
    <div className="w-full flex items-start justify-start overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center xl:w-9/12 overflow-hidden">
        <Header isOpen={openOrder} setIsOpen={setOpenOrder} />
        <div className="w-full flex flex-col items-center justify-center pb-5 xl:w-11/12">
          {props.children}
        </div>
        <Footer />
      </div>
      <Cart openOrder={openOrder} setOpenOrder={setOpenOrder} items={cart} />
    </div>
  );
};
