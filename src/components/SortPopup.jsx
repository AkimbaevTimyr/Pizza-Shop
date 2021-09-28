import React from "react";
import axios from "axios";
import pizzas from "../store/pizzas";

export const SortPopup = ({ popup }) => {
  const [visible, setVisible] = React.useState(false);
  const [pop, setPopup] = React.useState("популярности");
  const setPop = (el) => {
    setPopup(el);
    setVisible(!visible);
  };

  React.useEffect(() => {
    switch (pop) {
      case "популярности":
        axios
          .get("http://localhost:3001/pizzas?_sort=rating")
          .then((resp) => pizzas.setPizzas(resp.data));
        console.log("1");
        break;
      case "цене":
        axios
          .get(`http://localhost:3001/pizzas?_sort=price`)
          .then((resp) => pizzas.setPizzas(resp.data));
        console.log("1");
        break;
      case "алфавиту":
        axios
          .get(`http://localhost:3001/pizzas?_sort=name`)
          .then((resp) => pizzas.setPizzas(resp.data));
        console.log("1");
        break;
    }
  });
  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setVisible(!visible)}>{pop}</span>
      </div>
      {visible ? (
        <div className="sort__popup">
          <ul>
            {popup.map((el, index) => (
              <li onClick={() => setPop(el, index)} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
