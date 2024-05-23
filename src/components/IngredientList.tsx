import { For, createEffect, createSignal, splitProps } from "solid-js";
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

type Ingredient = string;

type State = {
  shoppingListData: Ingredient[];
  shoppingListLength: number;
};

export const IngredientList = (props) => {
  const [state, setState] = createStore<State>({
    shoppingListData: [],
    shoppingListLength: 0,
  });

  const addToShoppingList = () => {
    setState("shoppingListData", (list) => [
      ...list,
      ...props.recipe.ingredients,
    ]);
  };

  return (
    <>
      {" "}
      <h2>{props.title}</h2>
      <button onClick={() => addToShoppingList()}>Add to shopping list</button>
      <ul>
        <For each={props.recipe.ingredients}>
          {(ingredient, i) => <li key={i}>{ingredient}</li>}
        </For>
      </ul>
      <div>Current count: {count()}</div>
    </>
  );
};
