import React from "react";
import Todos from "../components/Todos";
import Counter from "../components/Counter";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div>
          <button>
            <a href="/products"> Show Product</a>
          </button>
          <br />
          <button>
            <a href="/todos"> Show Todo</a>
          </button>
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default HomePage;
