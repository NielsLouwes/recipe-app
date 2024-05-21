import { createSignal, splitProps } from "solid-js";
import { render } from "solid-js/web";

export const IngredientList = (props) => {
  const x = props.recipe.ingredients;
  console.log("x", x);
  return (
    <>
      {" "}
      <h2>{props.title}</h2>
      <button>Add to shopping list</button>
      <ul>
        {props.recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>{" "}
    </>
  );
};
