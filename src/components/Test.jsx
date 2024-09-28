import React from "react";

const Test = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-4 border-2 border-black">Slide Bar</div>
        <div className="col-span-4 border-2 border-red-500"></div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-2 border-2 border-blue-500">
          3
        </div>
        <div className="col-span-2 col-start-4 row-start-4 border-2 border-yellow-500">
          4
        </div>
        <div className="col-span-5 col-start-1 row-start-5 border border-green-500">
          6
        </div>
        <div className="col-start-4 row-start-2 border border-green-500">7</div>
        <div className="col-start-5 row-start-2 border border-gray-500">8</div>
        <div className="col-start-5 row-start-3 border border-violet-500">
          9
        </div>
        <div className="col-start-4 row-start-3 border border-green-500">
          10
        </div>
      </div>
    </div>
  );
};

export default Test;
