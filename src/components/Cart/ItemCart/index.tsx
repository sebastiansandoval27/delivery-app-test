import { useState } from "react";
import { useDispatch } from "react-redux";
import { Cart } from "store/models/Cart";
import { Product } from "store/models/Product";
import { editAmount } from "store/reducers/cartSlice";
import { ItemCartComp } from "./itemCartStyled";

interface ItemCartProps {
  product: Cart;
}

export const ItemCart: React.FC<ItemCartProps> = ({ product }): JSX.Element => {
  const { id, image, name, price, qualification, time } = product.product;
  const [showEdit, setShowEdit] = useState(false);
  const [editValue, setEditValue] = useState(product.quantity);

  const dispatch = useDispatch();

  return (
    <>
      <ItemCartComp
        onClick={() => {
          setShowEdit(!showEdit);
        }}
      >
        {product && product.product.image && (
          <>
            <div className="img">
              <img src={image} alt="Product Image" />
            </div>
            <div className="text">
              {product.quantity && <span>{product.quantity} X</span>}
              <h3>{name}</h3>
            </div>
            <span>${price}</span>
          </>
        )}
      </ItemCartComp>
      <div
        className={`${
          showEdit ? "flex" : "hidden"
        } w-full h-full z-30 absolute top-0 left-0 bg-c-white bg-opacity-50 p-3 flex justify-center items-center`}
      >
        <button
          onClick={() => {
            setEditValue(editValue - 1);
            dispatch(
              editAmount({
                id,
                quantity: product.quantity + 1,
              })
            );
          }}
        >
          +
        </button>
        <input type="number" className="mx-3" value={editValue} />
        <button
          onClick={() => {
            setEditValue(editValue + 1);
            dispatch(
              editAmount({
                id,
                quantity: product.quantity - 1,
              })
            );
          }}
        >
          -
        </button>
      </div>
    </>
  );
};
