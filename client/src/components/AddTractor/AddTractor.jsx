import ReactDatePicker from "react-datepicker";
import "./AddTractor.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useAddTractorMutation } from "../../features/api/mutationApi";

const AddTractor = () => {
  const [startDate, setStartDate] = useState(new Date());

  //? add data redux hook mutation start ⤵
  const [setPost, { data: postData }] = useAddTractorMutation();
  //? add data redux hook mutation end ⤴
  console.log(postData);
  //? hook form user ⤵
  const { register, handleSubmit } = useForm();

  // my tractor history data sta ☸
  const onSubmit = (data) => {
    // string to number fuction start ⤵
    const stringToNumber = (value) => {
      return Number(value);
    };
    // string to number fuction end ⤴

    const { bigha, oileMoney, oil, expence } = data;
    const driverMoney = stringToNumber(bigha) * 75;
    const helperMoney = stringToNumber(bigha) * 15;
    const oilLiterPoient = stringToNumber(oil) / stringToNumber(bigha);
    const totalIncome = stringToNumber(bigha) * 500;
    const totalExpense =
      stringToNumber(totalIncome) -
      (driverMoney +
        helperMoney +
        stringToNumber(expence) +
        stringToNumber(oileMoney));
    const allData = {
      ...data,
      driverMoney,
      helperMoney,
      oilLiterPoient,
      totalIncome,
      totalExpense,
      date: startDate.toDateString(),
    };
    setPost(allData);
  };
  // my tractor history data end ☸
  return (
    <div className=" mt-[5%]">
      <div>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-lg addPasShdow">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Add Tractor History
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 font-semibold block"
                  htmlFor="date"
                >
                  Date
                </label>
                <ReactDatePicker
                  required
                  className=" w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                  id="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div>
                <label className="text-gray-700 font-semibold" htmlFor="Bigha">
                  Bigha
                </label>
                <input
                  required
                  {...register("bigha")}
                  id="Bigha"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold" htmlFor="Helper">
                  Oile Money
                </label>
                <input
                  required
                  {...register("oileMoney")}
                  id="Helper"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold" htmlFor="oil">
                  Oil Liter
                </label>
                <input
                  required
                  {...register("oil")}
                  id="oil"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Expense"
                >
                  Outstanding Amount
                </label>
                <input
                  required
                  {...register("outstandingamount")}
                  id="Expense"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="HelperName"
                >
                  Helper Name
                </label>
                <input
                  required
                  {...register("helperName")}
                  id="HelperName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Expence"
                >
                  Expense
                </label>
                <input
                  required
                  {...register("expence")}
                  id="Expence"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTractor;
