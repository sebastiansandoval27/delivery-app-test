import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import productsJson from "../../data/products.json";
import categoriesJson from "../../data/categories.json";
import { setProducts } from "store/reducers/productsSlice";
import { setCategories } from "store/reducers/categoriesSlice";
import { addToCart } from "store/reducers/cartSlice";

function App() {
  const { products } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const [categorySelected, setCategorySelected] = useState(0);

  useEffect(() => {
    if (productsJson) {
      dispatch(setProducts(productsJson));
    }
  }, []);

  useEffect(() => {
    if (categoriesJson) {
      dispatch(setCategories(categoriesJson));
    }
  }, []);

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
        {categories && (
          <Slider
            items={categories.map((category, index) => (
              <FoodItem
                key={category.id + "-slider"}
                image={category.icon}
                active={categorySelected === index}
                name={category.name}
                onClickFunction={() => {
                  setCategorySelected(index);
                }}
              />
            ))}
          />
        )}
      </SliderContainer>
      <GridProducts>
        {products.map((item, index) => {
          if (item.image) {
            return (
              <ProductItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
                time={item.time}
                qualification={item.qualification}
                onClickFunction={() => {
                  dispatch(addToCart(item));
                }}
              />
            );
          }
        })}
      </GridProducts>
    </Layout>
  );
}

export default App;
