import "./AddPassenger.css";
const AddPassenger = () => {
  return (
    <div className=" mt-[5%]">
      <div>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-lg addPasShdow">
          <h2 className="text-lg   font-semibold text-gray-700 capitalize">
            Add Passenger
          </h2>
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="PassportNumber"
                >
                  Passport Number
                </label>
                <input
                  id="PassportNumber"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="MobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  id="MobileNumber"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Service"
                >
                  Service
                </label>
                <input
                  id="Service"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="reference"
                >
                  Reference
                </label>
                <input
                  id="reference"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="TotalCost"
                >
                  Total Cost
                </label>
                <input
                  id="TotalCost"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Deposit"
                >
                  Deposit
                </label>
                <input
                  id="Deposit"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Transfer"
                >
                  Transfer
                </label>
                <input
                  id="Transfer"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold" htmlFor="return">
                  Return
                </label>
                <input
                  id="return"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 font-semibold"
                  htmlFor="Expense"
                >
                  Expense
                </label>
                <input
                  id="Expense"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddPassenger;
