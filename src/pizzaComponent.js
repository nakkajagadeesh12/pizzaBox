import React, { useEffect, useState } from "react";
import "./pizzaComponent.css";
import plus from "./icons/plus.svg";
import minus from "./icons/minus.svg";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./Actions";

const MAX_PRICE = 1000;
const MIN_PRICE = 200;

function PizzaComponent({ incrementDispatch, decrementDispatch, count }) {
  const [total, setTotal] = useState(0);

  const decrementCount = (type) => {
    decrementDispatch(type);
  };

  const incrementCount = (type) => {
    incrementDispatch(type);
  };

  useEffect(() => {
    let totalAmount =
      count.small * 150 + count.medium * 200 + count.large * 300;
    setTotal(totalAmount);
  }, [count.adults, count.children, count.large, count.medium, count.small]);

  return (
    <div className="main-container">
      <h1>Order Pizza</h1>
      <div className="block-container">
        <div className="pizzatype">
          <div className="row">
            <span className="type small">
              <i class="fas fa-pizza-slice"></i>
            </span>
            <div>Small</div>
            <button
              onClick={() => decrementCount("small")}
              disabled={
                count.small <= 0 || total - MIN_PRICE < 150 ? true : false
              }
            >
              <i
                className={`fas fa-minus-circle ${
                  count.small <= 0 || total - MIN_PRICE < 150
                    ? "disable"
                    : "minus"
                } `}
              ></i>
            </button>
            <div>{count.small}</div>
            <button
              onClick={() => incrementCount("small")}
              disabled={MAX_PRICE - total >= 150 ? false : true}
            >
              <i
                className={`fas fa-plus-square ${
                  MAX_PRICE - total >= 150 ? "plus" : "disable"
                }`}
              ></i>
            </button>
          </div>
          <div className="row">
            <span className="type medium">
              <i class="fas fa-pizza-slice"></i>
            </span>
            <div>Medium</div>
            <button
              onClick={() => decrementCount("medium")}
              disabled={
                count.medium <= 0 || total - MIN_PRICE < 200 ? true : false
              }
            >
              <i
                className={`fas fa-minus-circle ${
                  count.medium <= 0 || total - MIN_PRICE < 200
                    ? "disable"
                    : "minus"
                } `}
              ></i>
              {/* <img src={minus} alt="plus" height={20} /> */}
            </button>
            <div>{count.medium}</div>
            <button
              onClick={() => incrementCount("medium")}
              disabled={MAX_PRICE - total >= 200 ? false : true}
            >
              <i
                className={`fas fa-plus-square ${
                  MAX_PRICE - total >= 200 ? "plus" : "disable"
                }`}
              ></i>
              {/* <img src={plus} alt="plus" height={20} /> */}
            </button>
          </div>
          <div className="row">
            <span className="type large">
              <i class="fas fa-pizza-slice"></i>
            </span>
            <div>Large</div>
            <button
              onClick={() => decrementCount("large")}
              disabled={
                count.large <= 0 || total - MIN_PRICE < 300 ? true : false
              }
            >
              <i
                className={`fas fa-minus-circle ${
                  count.large <= 0 || total - MIN_PRICE < 300
                    ? "disable"
                    : "minus"
                } `}
              ></i>
              {/* <img src={minus} alt="plus" height={20} /> */}
            </button>
            <div>{count.large}</div>
            <button
              onClick={() => incrementCount("large")}
              disabled={MAX_PRICE - total >= 300 ? false : true}
            >
              <i
                className={`fas fa-plus-square ${
                  MAX_PRICE - total >= 300 ? "plus" : "disable"
                }`}
              ></i>
              {/* <img src={plus} alt="plus" height={20} /> */}
            </button>
          </div>
        </div>
        <hr />
        <div className="rows">
          <span>
            <i class="fas fa-user"></i>
          </span>
          <div className="generation">ADULTS</div>
          <button
            onClick={() => decrementCount("adults")}
            disabled={
              count.adults <= 0 ||
              total - MIN_PRICE < 200 ||
              (count.medium === 0 && count.large === 1)
                ? true
                : false
            }
          >
            <i
              className={`fas fa-minus-circle ${
                count.adults <= 0 ||
                total - MIN_PRICE < 200 ||
                (count.medium === 0 && count.large === 1)
                  ? "disable"
                  : "minus"
              } `}
            ></i>
            {/* <img src={minus} alt="plus" height={20} /> */}
          </button>
          <div>{count.adults}</div>
          <button
            onClick={() => incrementCount("adults")}
            disabled={
              MAX_PRICE - total >= 200 || MAX_PRICE - total >= 300
                ? false
                : true
            }
          >
            <i
              className={`fas fa-plus-square ${
                MAX_PRICE - total >= 200 || MAX_PRICE - total >= 300
                  ? "plus"
                  : "disable"
              }`}
            ></i>
            {/* <img src={plus} alt="plus" height={20} /> */}
          </button>
        </div>
        <hr />
        <div className="rows">
          <span>
          <i class="fas fa-child"></i>
          </span>
          <div className="generation">CHILDREN</div>
          <button
            onClick={() => decrementCount("children")}
            disabled={
              count.children <= 0 || total - MIN_PRICE < 150 ? true : false
            }
          >
            <i
              className={`fas fa-minus-circle ${
                count.children <= 0 || total - MIN_PRICE < 150
                  ? "disable"
                  : "minus"
              } `}
            ></i>
            {/* <img src={minus} alt="plus" height={20} /> */}
          </button>
          <div>{count.children}</div>
          <button
            onClick={() => incrementCount("children")}
            disabled={MAX_PRICE - total >= 150 ? false : true}
          >
            <i
              className={`fas fa-plus-square ${
                MAX_PRICE - total >= 150 ? "plus" : "disable"
              }`}
            ></i>
            {/* <img src={plus} alt="plus" height={20} /> */}
          </button>
        </div>
      </div>
      <div className="total">
        <div>Order Total</div>
        <div>{total}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementDispatch: (data) => dispatch(incrementAction(data)),
    decrementDispatch: (data) => dispatch(decrementAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaComponent);
