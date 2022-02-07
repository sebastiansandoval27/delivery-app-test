import { FoodItemImage, FoodItemStyled } from "./foodItemStyled";

interface FoodItemProps {
  image: string;
  active: boolean;
  name: string;
  onClickFunction: () => void;
}

export const FoodItem: React.FC<FoodItemProps> = ({
  image,
  active,
  name,
  onClickFunction,
}: FoodItemProps): JSX.Element => {
  return (
    <FoodItemStyled active={active} onClick={() => onClickFunction()}>
      <FoodItemImage>
        <img src={image} alt={name} />
      </FoodItemImage>
      <h3>{name}</h3>
    </FoodItemStyled>
  );
};
