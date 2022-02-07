import { useState } from "react";
import { useDispatch } from "react-redux";
import { Cart } from "store/models/Cart";
import { Product } from "store/models/Product";
import { editAmount } from "store/reducers/cartSlice";
import { ItemCartComp } from "./itemCartStyled";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface ItemCartProps {
  product: Cart;
}

export const ItemCart: React.FC<ItemCartProps> = ({ product }): JSX.Element => {
  const { id, image, name, price, qualification, time } = product.product;
  const [showEdit, setShowEdit] = useState(false);
  const [editValue, setEditValue] = useState(product.quantity);

  const dispatch = useDispatch();

  const handleChangeValue = (e): void => {
    setEditValue(e.target.value);
  };

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
        } w-full h-full z-30 absolute top-0 left-0 p-3 flex flex-col justify-center items-center backdrop-blur-sm bg-c-black bg-opacity-70 text-c-white`}
      >
        <div className="w-full h-16 my-2 flex justify-end text-4xl cursor-pointer">
          <AiOutlineCloseCircle
            className="cursor-pointer"
            onClick={() => {
              setShowEdit(false);
            }}
          />
        </div>
        {product && product.product.image && (
          <>
            <div className="img w-20 my-2 rounded-lg">
              <img src={image} alt="Product Image" className="rounded-lg" />
            </div>
            <div className="text">
              <h3>{name}</h3>
            </div>
            <span>${price}</span>
          </>
        )}
        <div className="w-full h-24 flex items-center justify-center">
          <button
            className="w-8 h-8 bg-c-purple rounded-md text-c-white font-bold"
            onClick={() => {
              setEditValue(editValue - 1);
            }}
          >
            -
          </button>
          <input
            type="number"
            className="mx-3 w-28 h-7 text-center border-2 border-solid border-gray-700 text-c-black"
            value={editValue}
            onChange={(e) => {
              handleChangeValue(e);
            }}
          />
          <button
            className="w-8 h-8 bg-c-purple rounded-md text-c-white font-bold"
            onClick={() => {
              setEditValue(editValue + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="w-44 h-auto p-3 rounded-lg bg-c-purple-light text-c-white font-bold font-OpenSans"
          onClick={() => {
            setShowEdit(false);
            dispatch(
              editAmount({
                id,
                quantity: editValue,
              })
            );
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};
