import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Image, ProductItemComp, Text } from "./productItemStyled";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  qualification: number | string;
  time: string;
  price: number;
  onClickFunction: () => void;
}

export const ProductItem: React.FC<ProductProps> = ({
  id,
  image,
  name,
  qualification,
  time,
  price,
  onClickFunction,
}: ProductProps): JSX.Element => {
  return (
    <ProductItemComp>
      <Image>
        <div className="container-img">
          <img
            src={image ? image : "/images/pexels-photo-156114.jpeg"}
            alt="Food"
          />
          <div
            className="w-full h-full bg-black bg-opacity-50"
            onClick={onClickFunction}
          >
            <BsFillCartPlusFill />
          </div>
        </div>
        <div className="text">
          <h3>{time}</h3>
        </div>
      </Image>
      <Text>
        <h3>{name}</h3>
        <div>
          <span>
            <AiOutlineStar />
            {qualification}
          </span>
          <span>Deli</span>
          <span>Bagels</span>
          <span>${price}</span>
        </div>
      </Text>
    </ProductItemComp>
  );
};
