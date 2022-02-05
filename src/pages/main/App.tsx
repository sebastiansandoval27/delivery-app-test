import React from "react";
import {
  CardAction,
  FoodItem,
  Header,
  Layout,
  ProductItem,
  Slider,
} from "components";
import { GridProducts, SliderContainer, TitleSection } from "./appStyled";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "swiper/css";

function App() {
  return (
    <Layout>
      <CardAction />
      <TitleSection>
        <div>
          <h3>Restaurants</h3>
          <img src="/icons/burguerColor.svg" alt="Hamburguer Icon" />
        </div>
        <button>
          <AiOutlineClockCircle />
          <h4>
            Delivery:
            <span>now</span>
          </h4>
          <MdOutlineKeyboardArrowDown />
        </button>
      </TitleSection>
      <SliderContainer>
        <Slider
          items={[
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={true}
              name="Pizza"
            />,
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={false}
              name="Pizza"
            />,
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={false}
              name="Pizza"
            />,
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={false}
              name="Pizza"
            />,
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={false}
              name="Pizza"
            />,
            <FoodItem
              image={`/images/pexels-photo-156114.jpeg`}
              active={false}
              name="Pizza"
            />,
          ]}
        ></Slider>
      </SliderContainer>
      <GridProducts>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </GridProducts>
    </Layout>
  );
}

export default App;
