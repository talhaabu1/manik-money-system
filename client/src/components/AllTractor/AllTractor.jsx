import { Link } from "react-router-dom";
import { useAllTractorQuery } from "../../features/api/queryApi";
import "./AllTractor.css";
import { InfinitySpin } from "react-loader-spinner";
// import ReactDatePicker from "react-datepicker";
// import { useState } from "react";
// import ReactDatePicker from "react-datepicker";
const AllTractor = () => {
  // const [startDate, setStartDate] = useState(new Date());
  //? one color and tow color change ⤵
  // const colors = ["bg-slate-600", "bg-slate-200", ${colors[i % colors.length]}];
  //? one color and tow color change ⤴

  //? All Tractor Featch ⤵
  const { data, isLoading } = useAllTractorQuery();
  //? All Tractor Featch ⤴

  //? loading ⤵
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <InfinitySpin width="300" color="black" />
      </div>
    );
  }
  //? loading ⤴

  return (
    <div className=" ">
      {/* <ReactDatePicker
        required
        className=" w-full text-center bg-slate-400 marl"
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
            {/* all tractor list map */}
            {data?.data.map((item, i) => (
              <tr className={`border-t-[2px]`} key={i}>
                <th className=" border-r-[1px]">{i + 1}</th>
                <td className=" border-r-[1px] text-base font-bold">
                  {item.date}
                </td>
                <td>
                  <Link
                    to={`/tractordetails/${item._id}`}
                    className="btn btn-sm btn-outline btn-info rounded-full normal-case "
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTractor;
