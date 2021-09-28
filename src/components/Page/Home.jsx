import React from "react";
import { Categories } from "../Categories";
import { Content } from "../Content";
import { Header } from "../Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cart } from "./Cart";

export const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/">
            <Categories
              categories={[
                "Все",
                "Мясные",
                "Вегетарианская",
                "Гриль",
                "Острые",
                "Закрытые",
              ]}
              popup={["популярности", "цене", "алфавиту"]}
            />
          </Route>
          <Route exact path="/">
            <Content />
          </Route>
        </div>
      </div>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
  );
};
