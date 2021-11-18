import React from "react";

const Modal = ({ close, counts }) => {
  const [active, setActive] = React.useState(1)
  return (
    <div className="modal">
      <div>
          <div onClick={() => close()} className="cart__item-remove">
            <div className="button button--outline button--circle">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
          </div>
        </div>
      <div className="modal__content">
        <div className=".cart__modal-info">
          <h3>Заказ</h3>
        </div>
        <div className="form__name">
          <form>
            <div className="input_group">
              <input placeholder="Имя"></input>
            </div>
            <br/>
            <div className="input_group">
              <input placeholder="Номер телефона"></input>
            </div>
            <h3>Доставка</h3>


            <div className="input__groups delivery">
              <div onClick={()=> setActive(1)} className={active === 1 ? "input_p" : 'input_a'}>
                <label>Доставка</label>
              </div>
              <div onClick={()=> setActive(2)} className={active === 2 ? "input_p" : 'input_a'}>
                <label>Самовывоз</label>
              </div>
            </div>
            <br/>
            {active === 1 ? (<div className="input_group">
              <input placeholder="Укажите адрес доставки"></input>
            </div>) : (<div className="select">
              <select name="2" id="2">
                <option>Пиццерия Папа</option>
                <option>Пиццерия Мама</option>
              </select>
            </div>)}
            
            <h3>Оплата</h3>
            <div className="select">
              <select name="2" id="1">
                <option>Наличными</option>
                <option>Картой</option>
              </select>
            </div>
            <br/>
            <button className="modal__button"><span>Оформить заказ</span></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
