import React from "react";
import { PizzaBlock } from "./PizzaBlock";
import pizzas from "../store/pizzas";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
export const Content = observer(() => {
  const obj = toJS(pizzas.pizza);
  const pizza = obj[obj.length - 1];
  return (
    <div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizza === undefined
          ? []
          : pizza.map((el, index) => (
              <PizzaBlock
                key={index}
                pizzaSelector={["тонкое", "традиционное"]}
                name={el.name}
                image={el.imageUrl}
                price={el.price}
                types={el.types}
                sizes={el.sizes}
                id={el.id}
              />
            ))}
      </div>
    </div>
  );
});
