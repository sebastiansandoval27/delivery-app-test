import { FoodItemImage, FoodItemStyled } from "./foodItemStyled";

interface FoodItemProps {
  image: string;
  active: boolean;
  name: string;
}

export const FoodItem: React.FC<FoodItemProps> = ({
  image,
  active,
  name,
}: FoodItemProps): JSX.Element => {
  return (
    <FoodItemStyled active={active}>
      <FoodItemImage>
        <img src={image} alt={name} />
      </FoodItemImage>
      <h3>{name}</h3>
    </FoodItemStyled>
  );
};
