import "./CategoryCard.css";
import { useContext } from "react";
import { jokeContext } from "../App";
const CategoryCard = (props) => {
  const setjoke = useContext(jokeContext);

  return (
    <div
      className="categoryCard"
      onClick={() => {
        setjoke.findjoke(props.categoryName);
        setjoke.setDisplayJokeBox("block");
      }}
    >
      <h3>{props.categoryName}</h3>
      <p>Unlimited jokes on {props.categoryName}</p>
    </div>
  );
};

export default CategoryCard;
