import React from "react";
import axios from "axios";
import pizzas from "../store/pizzas";
import { observer } from "mobx-react-lite";
import { SortPopup } from "./SortPopup";
export const Categories = observer(({ categories, popup }) => {
  const [cat, setCat] = React.useState(0);
  React.useEffect(() => {
    if (cat === 0) {
      axios
        .get(`http://localhost:3001/pizzas`)
        .then((resp) => pizzas.setPizzas(resp.data));
    } else {
      axios
        .get(`http://localhost:3001/pizzas?category=${cat}`)
        .then((resp) => pizzas.setPizzas(resp.data));
    }
  }, [cat]);

  const [active, setActive] = React.useState(false);

  const setPosition = (el) => {
    setCat(el);
    setActive(!active);
  };
  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((el, index) => (
            <li
              key={index}
              onClick={() => setPosition(index)}
              className={index === cat ? "active" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <SortPopup popup={popup} />
    </div>
  );
});
