import { makeAutoObservable } from "mobx";
import { toJS } from "mobx";

class Orders {
  orders = [];
  totalCount = 0;
  pizzas = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setOrder = (order) => {
    const data = toJS(this.orders)
      .map((el) => el.name)
      .flat();
    if (data.includes(order.name)) {
      this.totalCount += 1;
      this.pizzas = toJS(order).pizzaCount;
      toJS(this.orders).map((el, index) =>
        el.name === order.name
          ? (this.orders[index].pizzasCounts = this.pizzas)
          : ""
      );
      toJS(this.orders).map((el, index) =>
        el.name === order.name
          ? (this.orders[index].allPrice = this.pizzas * el.price)
          : ""
      );
      console.log(this.orders);
    } else {
      this.orders.push(order);
      this.totalCount += 1;
    }
  };
  deleteOrder = (id, counts) => {
    this.orders = this.orders.filter((el) => Number(el.id) !== Number(id));
    this.totalCount = this.totalCount - counts;
  };
  deleteAllOrders = () => {
    this.orders = [];
    this.totalCount = 0;
  };
  plus = (name, price) => {
    this.totalCount += 1;
    toJS(this.orders).map((el, index) =>
      el.name === name
        ? (this.orders[index].pizzasCounts =
            this.orders[index].pizzasCounts + 1)
        : ""
    );
    toJS(this.orders).map((el, index) =>
      el.price === price
        ? (this.orders[index].allPrice = this.orders[index].allPrice + price)
        : ""
    );
  };
  minus = (name, price) => {
    this.totalCount -= 1;
    toJS(this.orders).map((el, index) =>
      el.name === name
        ? (this.orders[index].pizzasCounts =
            this.orders[index].pizzasCounts - 1)
        : ""
    );
    toJS(this.orders).map((el, index) =>
      el.price === price
        ? (this.orders[index].allPrice = this.orders[index].allPrice - price)
        : ""
    );
  };
}

export default new Orders();
