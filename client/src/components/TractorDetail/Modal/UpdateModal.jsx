import React, { useEffect, useRef } from "react";
import { useUpdateTractorMutation } from "../../../features/api/mutationApi";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { useTractorGetByIdQuery } from "../../../features/api/queryApi";
import toast from "react-hot-toast";

const UpdateModal = ({ id }) => {
  //? get data this id form and set initialValues value⤵
  const levelRef = useRef(null);
  const { data } = useTractorGetByIdQuery(id);
  const { date, helperName } = data?.data || {};
  const initialValues = {
    bigha: data.data.bigha,
    oil: data.data.oil,
    oileMoney: data.data.oileMoney,
    outstandingamount: data.data.outstandingamount,
    expence: data.data.expence,
  };
  //? get data this id form and set initialValues value⤴

  //? add data redux hook mutation start ⤵
  const [setUpdate, { data: updateData, isLoading }] =
    useUpdateTractorMutation();
  //? add data redux hook mutation end ⤴

  //? hook form user ⤵

  const { register, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  // my tractor history data sta ☸
  const onSubmit = (data) => {
    // string to number fuction start ⤵
    const stringToNumber = (value) => {
      return parseFloat(value);
    };
    // string to number fuction end ⤴

    //? hisabe kithebe calculate ⤵
    const { bigha, oileMoney, oil, expence, outstandingamount } = data;
    const driverMoney = stringToNumber(bigha) * 75;
    const helperMoney = stringToNumber(bigha) * 15;
    const oilLiterPoient = stringToNumber(oil) / stringToNumber(bigha);
    const totalIncome = stringToNumber(bigha) * 500;
    const totalExpense =
      driverMoney +
      helperMoney +
      stringToNumber(expence) +
      stringToNumber(oileMoney);
    const totalAmountDeposited =
      stringToNumber(totalIncome) -
      (driverMoney +
        helperMoney +
        stringToNumber(expence) +
        stringToNumber(oileMoney) +
        stringToNumber(outstandingamount));
    //? all data const virable ⤵
    const allData = {
      ...data,
      driverMoney,
      helperMoney,
      oilLiterPoient,
      totalIncome,
      totalExpense,
      date,
      helperName,
      totalAmountDeposited,
    };
    //? all data const virable ⤴
    //? update data call ⤵
    setUpdate({ id, allData });
    //? update data call ⤴
    //? hisabe kithebe calculate ⤴
  };
  // my tractor history data end ☸

  //? toast check data add successfully ⤵
  useEffect(() => {
    if (updateData?.status && updateData?.data?.modifiedCount > 0) {
      levelRef.current.click();
    }
    if (!updateData?.status && updateData?.statusCode === 500) {
      toast.error("Data Update Not Successful");
    }
  }, [updateData]);
  //? toast check data add successfully ⤴

  return (
    <div>
      <input type="checkbox" id="__update_modal__" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box ">
          <div className=" ">
            <div>
              <label
                ref={levelRef}
                htmlFor="__update_modal__"
                className="btn btn-sm bg-gray-700 text-white btn-circle  absolute right-2 top-2 ">
                ✕
              </label>
              <section className="">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">
                  Update Tractor History
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-gray-700 font-semibold"
                        htmlFor="Bigha">
                        Bigha
                      </label>
                      <input
                        required
                        {...register("bigha")}
                        id="Bigha"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-md"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-700 font-semibold"
                        htmlFor="oil">
                        Oil Liter
                      </label>
                      <input
                        required
                        {...register("oil")}
                        id="oil"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-700 font-semibold"
                        htmlFor="oileMoney">
                        Oile Money
                      </label>
                      <input
                        required
                        {...register("oileMoney")}
                        id="oileMoney"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 font-semibold"
                        htmlFor="Expense">
                        Outstanding Amount
                      </label>
                      <input
                        required
                        {...register("outstandingamount")}
                        id="Expense"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-700 font-semibold"
                        htmlFor="Expence">
                        Expense
                      </label>
                      <input
                        required
                        {...register("expence")}
                        id="Expence"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      disabled={isLoading && true}
                      type="submit"
                      className="px-8 py-2.5 leading-5 text-white flex justify-center items-center transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      {isLoading || "Update"}
                      {isLoading && (
                        <span className="loading loading-spinner"></span>
                      )}
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
