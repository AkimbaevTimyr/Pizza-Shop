import { makeAutoObservable } from "mobx";
class Pizzas {
    pizza = [];
    constructor(){
        makeAutoObservable(this)
    }
    setPizzas = (pizzas) =>{
        this.pizza.push(pizzas)
        console.log(pizzas)
    }
    setPop = (pop) =>{
    }
}
export default new Pizzas();