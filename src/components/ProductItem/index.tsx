import { AiOutlineStar } from "react-icons/ai";
import { Image, ProductItemComp, Text } from "./productItemStyled";

export const ProductItem = () => {
  return (
    <ProductItemComp>
      <Image>
        <img src="/images/pexels-photo-156114.jpeg" alt="Pizza" />
        <div>
          <h3>25-30 min</h3>
        </div>
      </Image>
      <Text>
        <h3>Bagel Story</h3>
        <div>
          <span>
            <AiOutlineStar />
            4.7
          </span>
          <span>Deli</span>
          <span>Bagels</span>
          <span>$$</span>
        </div>
      </Text>
    </ProductItemComp>
  );
};
