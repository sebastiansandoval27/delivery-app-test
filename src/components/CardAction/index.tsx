import {
  CardActionButton,
  CardActionComp,
  CardActionText,
} from "./cardActionStyled";
import { GrLinkNext } from "react-icons/gr";

export const CardAction = () => {
  return (
    <CardActionComp>
      <img src="/images/headerimage.png" alt="illustration" />
      <CardActionText>
        <h3>
          $0 delivery for 30 days!
          <img src="/images/d.png" alt="Header Image" />
        </h3>
        <p>$0 delivery fee for orders over $10 for 30 days</p>
      </CardActionText>
      <CardActionButton>
        <h3>Learn more</h3>
        <img src="/icons/arrowRightOrange.svg" alt="Next Icon" />
      </CardActionButton>
    </CardActionComp>
  );
};
