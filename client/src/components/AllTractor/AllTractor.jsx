import "./AllTractor.css";
// import ReactDatePicker from "react-datepicker";
const AllTractor = () => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className=" ">
      {/* <ReactDatePicker
        required
        className=" w-full text-center bg-slate-200"
        id="date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
      <div className="overflow-x-auto bg-[#f4f3f37e]">
        <table className="table">
          {/* head */}
          <thead className=" text-base bg-[#DFDFDF]">
            <tr className=" text-center text-black">
              <th className="w-1">#</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" text-center tex">
            {/* row 1 */}
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
            <tr className=" border-t-[2px]">
              <th className=" border-r-[1px]">1</th>
              <td className=" border-r-[1px] text-base font-bold">
                Tue Aug 29 2023
              </td>
              <td>
                <button className="btn btn-sm btn-outline btn-info rounded-full normal-case ">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTractor;
