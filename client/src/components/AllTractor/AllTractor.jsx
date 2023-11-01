import { Link } from "react-router-dom";
import "./AllTractor.css";
// import { InfinitySpin } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

// import { useAllTractorQuery } from "../../features/api/queryApi";

// import ReactDatePicker from "react-datepicker";
// import { useState } from "react";
// import ReactDatePicker from "react-datepicker";
// const [startDate, setStartDate] = useState(new Date());
//? one color and tow color change ⤵
// const colors = ["bg-slate-600", "bg-slate-200", ${colors[i % colors.length]}];
//? one color and tow color change ⤴

const AllTractor = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/tractor?page=${page}`
      );
      const newData = await res.json();
      setData((prev) => [...prev, ...newData.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(scrollTop + clientHeight + 50, scrollHeight);
    if (scrollTop + clientHeight + 50 >= scrollHeight) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ? loading ⤵

  if (data.length === 0) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <InfinitySpin color="black" />
      </div>
    );
  }
  // ? loading ⤴

  return (
    <>
      <div>
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
                <th className="w-1">NO</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" text-center tex">
              {/* all tractor list map ⤵ */}

              {data?.map((item, i) => (
                <tr className={`border-t-[2px]`} key={i}>
                  <th className=" border-r-[1px]">{i + 1}</th>
                  <td className=" border-r-[1px] text-base font-bold">
                    {item.date}
                  </td>
                  <td>
                    <Link
                      to={`/tractordetails/${item._id}`}
                      className="btn btn-sm  bg-gradient-to-r  from-[#808080] to-[#b5b5b5] text-white  rounded-full normal-case">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
              {/* all tractor list map ⤴  */}
            </tbody>
          </table>
        </div>
        {loading && (
          <div className=" flex justify-center">
            <InfinitySpin color="black" />
          </div>
        )}
      </div>
    </>
  );
};

export default AllTractor;
