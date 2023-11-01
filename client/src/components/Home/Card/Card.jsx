import React from "react";
import "./Card.css";
import { useTractorGetTotalDetailsQuery } from "../../../features/api/queryApi";
import { sumTotalNumber } from "../../CastomHook/calculationNumber";
import { useEffect } from "react";

const Card = () => {
  //? reducer hook all ⤵
  const drive = (accumulator, item) => accumulator + item.driverMoney;
  const helper = (accumulator, item) => accumulator + item.helperMoney;
  const total = (accumulator, item) => accumulator + item.totalIncome;
  const expense = (accumulator, item) => accumulator + item.totalExpense;
  //? reducer hook all ⤴

  // custom hook call total Calculate ⤵
  const totalIncome = sumTotalNumber(total);
  const driverIncome = sumTotalNumber(drive);
  const helperIncome = sumTotalNumber(helper);
  const totalExpense = sumTotalNumber(expense);
  // custom hook call total Calculate  ⤴

  return (
    <div className=" grid gap-y-6 2xl:grid-cols-4 2xl:gap-x-5 mx-5 mt-8">
      <div className="text-center py-3 bg-gradient-to-r from-blue-300  border-r-2 border-blue-200 rounded-lg hover:-translate-y-4 transition-transform ">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          {totalIncome || 0}
        </h6>
        <p className="text-sm font-bold tracking-widest text-gray-800 uppercase lg:text-base ">
          total income
        </p>
      </div>
      <div className="text-center py-3 bg-gradient-to-r from-red-300 border-r-2 border-red-200  rounded-lg hover:-translate-y-4 transition-transform ">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          {driverIncome || 0}
        </h6>
        <p className="text-sm font-bold tracking-widest text-gray-800 uppercase lg:text-base ">
          Driver Income
        </p>
      </div>
      <div className="text-center py-3 bg-gradient-to-r from-red-300 border-r-2 border-red-200  rounded-lg hover:-translate-y-4 transition-transform ">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          {helperIncome || 0}
        </h6>
        <p className="text-sm font-bold tracking-widest text-gray-800 uppercase lg:text-base ">
          Helper Income
        </p>
      </div>
      <div className="text-center py-3 bg-gradient-to-r from-orange-300 border-r-2 border-orange-200 rounded-lg hover:-translate-y-4 transition-transform ">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          {totalExpense || 0}
        </h6>
        <p className="text-sm font-bold tracking-widest text-gray-800 uppercase lg:text-base ">
          Total Expense
        </p>
      </div>
    </div>
  );
};

export default Card;
