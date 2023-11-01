import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./TractorDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";
import { useTractorGetByIdQuery } from "../../features/api/queryApi";
import { InfinitySpin } from "react-loader-spinner";
import UpdateModal from "./Modal/UpdateModal";
import { useEffect, useState } from "react";

const TractorDetail = () => {
  // get url id ⤵
  const { id } = useParams();
  // get url id ⤴
  // navigate hook ⤵
  const navigate = useNavigate();
  // navigate hook ⤴
  // get by id tractor Detail ⤵
  const { data: isData, isLoading } = useTractorGetByIdQuery(id);
  const { data } = isData || {};
  // get by id tractor Detail ⤴
  //? loading ⤵
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <InfinitySpin width="200" color="black" />
      </div>
    );
  }
  //? loading ⤴

  // top scroll
  window.scrollTo({ top: 1, behavior: "smooth" });

  return (
    <div className="">
      <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-2 xl:grid-cols-3 px-1 xl:px-3  xl:gap-x-6 gap-y-3 xl:gap-y-6 mt-6  xl:mt-10 mb-5 xl:mb-0">
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-emerald-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className=" text-lg font-semibold text-emerald-500 ">
                Date
              </span>
              <p className="text-lg   text-gray-600 font-bold">{data?.date}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-teal-500">
            <svg
              className="w-7 h-6 text-white fill-current"
              viewBox="0 0 1304 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1302.196532 952.971098c5.919075 17.757225 0 35.514451-11.83815 47.352601-11.83815 11.83815-29.595376 23.676301-47.352602 23.676301H59.190751c-17.757225 0-35.514451-5.919075-47.352601-23.676301s-11.83815-29.595376-11.83815-47.352601l118.381503-591.907514c5.919075-29.595376 29.595376-47.352601 59.190751-47.352601h118.381503c35.514451 0 59.190751 23.676301 59.190752 59.190751s-23.676301 59.190751-59.190752 59.190752H224.924855l-94.705202 473.526011h1041.757226l-94.705203-473.526011H1006.242775c-35.514451 0-59.190751-23.676301-59.190752-59.190752s23.676301-59.190751 59.190752-59.190751h118.381502c29.595376 0 53.271676 17.757225 59.190752 47.352601l118.381503 591.907514zM514.959538 378.820809c-29.595376-17.757225-65.109827-5.919075-76.947977 23.676301-17.757225 23.676301-11.83815 59.190751 17.757225 76.947977L591.907514 556.393064v183.491329c0 35.514451 23.676301 59.190751 59.190752 59.190752s59.190751-23.676301 59.190751-59.190752V556.393064l136.138729-76.947977c29.595376-17.757225 35.514451-53.271676 23.6763-82.867052-17.757225-29.595376-53.271676-35.514451-82.867052-23.676301l-76.947977 47.352601V313.710983L846.427746 236.763006c29.595376-17.757225 35.514451-53.271676 23.6763-82.867052-17.757225-29.595376-53.271676-35.514451-82.867052-23.676301L710.289017 177.572254V59.190751c0-35.514451-23.676301-59.190751-59.190751-59.190751s-59.190751 23.676301-59.190752 59.190751v118.381503l-76.947976-41.433526c-29.595376-17.757225-65.109827-5.919075-76.947977 23.676301-17.757225 23.676301-11.83815 59.190751 17.757225 76.947977L591.907514 313.710983v106.543352l-76.947976-41.433526z" />
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-teal-500 ">
                Bigha
              </span>
              <p className="text-lg text-gray-600 font-bold">{data?.bigha}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-blue-500">
            <FaMoneyBillWaveAlt className="w-6 h-6 text-white" />
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-blue-500 ">
                Total Income
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.totalIncome}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg
              className="w-10 h-10 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 90 95"
              xmlSpace="preserve">
              <g>
                <circle cx="41.2" cy="24.4" r="14.4" />
                <path d="M62.3,47.8c-11.7,0-21.1,9.5-21.1,21.1S50.7,90,62.3,90s21.1-9.5,21.1-21.1S74,47.8,62.3,47.8z M47.2,59.9   c0.7-1.2,1.6-2.4,2.7-3.4c4.1-4.1,9.8-5.9,15.7-4.9c2.3,0.4,4.5,1.3,6.4,2.6c2.3,1.5,4.1,3.5,5.4,5.7c0.4,0.7,0.2,1.7-0.6,2.1   l-0.7,0.3c-3.5,1.6-7.5,1.6-11,0.1c-0.8-0.4-1.8-0.6-2.8-0.6c-1,0-1.9,0.2-2.8,0.6c-3.5,1.5-7.5,1.5-11-0.1L47.8,62   C47.1,61.6,46.8,60.6,47.2,59.9z M59.7,82.9l-0.2,1.7c-0.1,0.9-1,1.5-1.8,1.3c-2.9-0.8-5.7-2.3-7.9-4.5c-3.3-3.3-5.2-7.7-5.2-12.4   c0,0,0,0,0,0c0-1,1-1.7,1.9-1.4l2.9,0.8c2.9,0.8,5.5,2.5,7.3,4.9c0,0,0.1,0.1,0.1,0.1C58.9,76,60,79.4,59.7,82.9z M62.5,72.4   c-2.1,0.1-3.8-1.6-3.7-3.7c0.1-1.8,1.5-3.2,3.3-3.3c2.1-0.1,3.8,1.6,3.7,3.7C65.8,70.9,64.3,72.3,62.5,72.4z M74.7,81.3   c-2.2,2.2-4.9,3.8-7.8,4.5c-0.9,0.2-1.7-0.4-1.8-1.3l-0.1-1.7c-0.3-3.5,0.8-6.9,2.9-9.6c0,0,0.1-0.1,0.1-0.1   c1.8-2.4,4.4-4.1,7.3-4.9l2.8-0.8c0.9-0.2,1.8,0.4,1.8,1.4c0,0,0,0,0,0C79.9,73.6,78.1,78,74.7,81.3z" />
                <path d="M61.9,46.4c-2.4-3.9-5.8-7.1-9.9-9.1c-2.9,2.5-6.7,4-10.8,4c-4.1,0-7.9-1.5-10.8-3.9c-7.9,4.1-13.4,12.3-13.8,22   c0,0,0,8.1,0,8.2c0,3.3,10.6,6,23.7,6.1c-0.3-1.5-0.5-3.1-0.5-4.7C39.8,56.6,49.7,46.6,61.9,46.4z" />
              </g>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-red-500 ">
                Driver Money
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.driverMoney}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg
              className="w-10 h-10 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 100 120"
              xmlSpace="preserve">
              <g>
                <ellipse
                  transform="matrix(0.8506512 -0.5257304 0.5257304 0.8506512 -6.1192708 30.1462154)"
                  cx={50}
                  cy="25.8434906"
                  rx="19.2746181"
                  ry="19.2746525"
                />
                <path d="M74.1837463,47.6320801c-1.4159546-0.8648071-3.0491333-1.296875-4.7064819-1.3320312   c-2.416626-0.0512085-4.7433472,0.9563599-6.529541,2.5849609c-3.5632935,3.2487793-6.4158936,5.5032959-12.9476929,5.5032959   c-6.5349121,0-9.4993896-2.3184814-12.8955688-5.4764404c-1.5609741-1.4514771-3.539917-2.4508057-5.6668091-2.5912476   c-1.9647217-0.1296387-3.9453125,0.2876587-5.6213379,1.3114624c-5.0441284,3.0804443-15.2316895,12.5601807-15.2316895,38.8806152   c0,1.0379639,0.0161743,2.0393066,0.0450439,3.0117188c0.0646362,2.1806641,1.866394,3.9067383,4.0479736,3.9067383h27.5238647   c1.5106201,0,2.7351685-1.2246094,2.7351685-2.7351074v-6.0036621c0-1.7937012-0.8390503-3.5007324-2.1988525-4.6870117   c-2.2856445-1.9963379-3.7612305-4.9763184-3.7612305-8.2746582c0-3.9926758,2.1409912-7.5224609,5.3814697-9.4320068   c0.2314453-0.1157227,0.5496826,0.0289307,0.520752,0.2893066v6.307251c0,1.8776855,1.5363159,3.4140625,3.4140015,3.4140625   h2.8933105c1.9095459,0,3.4429321-1.5334473,3.4140015-3.4140625l-0.0289307-6.6254883   c0-0.2314453,0.260437-0.434082,0.4918823-0.3183594c3.5587158,1.8227539,5.9890137,5.526123,5.960083,9.7792969   c0,3.4719238-1.5913086,6.567627-4.1373291,8.5928955c-1.5045166,1.21521-2.4014282,2.9801025-2.4014282,4.8895264v5.4829102   c0,1.510498,1.2246094,2.7351074,2.7351685,2.7351074h28.1026611c2.1815186,0,3.9832153-1.7260742,4.0480347-3.9064941   c0.0288696-0.9724121,0.045105-1.973877,0.045105-3.0119629C89.4153748,60.1922607,79.2276917,50.7125244,74.1837463,47.6320801z" />
              </g>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-red-500 ">
                Helper Money
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.helperMoney}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-black">
            <svg
              className="w-7 h-7 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M8 5H19C19.5523 5 20 5.44772 20 6V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V11L8 5ZM13 1H18C18.5523 1 19 1.44772 19 2V4H12V2C12 1.44772 12.4477 1 13 1ZM6 12V19H8V12H6Z"></path>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-black ">
                Oil Liter
              </span>
              <p className="text-lg text-gray-600 font-bold">{data?.oil}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg
              className="w-7 h-7 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M8 5H19C19.5523 5 20 5.44772 20 6V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V11L8 5ZM13 1H18C18.5523 1 19 1.44772 19 2V4H12V2C12 1.44772 12.4477 1 13 1ZM6 12V19H8V12H6Z"></path>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-red-500">
                Oil Money
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.oileMoney}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-cyan-500">
            <svg
              className="w-8 h-8 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12 3.09747L7.05025 8.04722C4.31658 10.7809 4.31658 15.213 7.05025 17.9467C9.78392 20.6804 14.2161 20.6804 16.9497 17.9467C19.6834 15.213 19.6834 10.7809 16.9497 8.04722L12 3.09747ZM12 0.269043L18.364 6.633C21.8787 10.1477 21.8787 15.8462 18.364 19.3609C14.8492 22.8756 9.15076 22.8756 5.63604 19.3609C2.12132 15.8462 2.12132 10.1477 5.63604 6.633L12 0.269043ZM7 12.997H17C17 15.7584 14.7614 17.997 12 17.997C9.23858 17.997 7 15.7584 7 12.997Z"></path>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-cyan-500">
                Oil Liter Expense
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.oilLiterPoient}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-stone-500">
            <FaMoneyBillWaveAlt className="w-6 h-6 text-white" />
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-stone-500">
                Out Standing Amount
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.outstandingamount}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-[#5c5470d3]">
            <svg
              className="w-10 h-10 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 100 120"
              xmlSpace="preserve">
              <g>
                <ellipse
                  transform="matrix(0.8506512 -0.5257304 0.5257304 0.8506512 -6.1192708 30.1462154)"
                  cx={50}
                  cy="25.8434906"
                  rx="19.2746181"
                  ry="19.2746525"
                />
                <path d="M74.1837463,47.6320801c-1.4159546-0.8648071-3.0491333-1.296875-4.7064819-1.3320312   c-2.416626-0.0512085-4.7433472,0.9563599-6.529541,2.5849609c-3.5632935,3.2487793-6.4158936,5.5032959-12.9476929,5.5032959   c-6.5349121,0-9.4993896-2.3184814-12.8955688-5.4764404c-1.5609741-1.4514771-3.539917-2.4508057-5.6668091-2.5912476   c-1.9647217-0.1296387-3.9453125,0.2876587-5.6213379,1.3114624c-5.0441284,3.0804443-15.2316895,12.5601807-15.2316895,38.8806152   c0,1.0379639,0.0161743,2.0393066,0.0450439,3.0117188c0.0646362,2.1806641,1.866394,3.9067383,4.0479736,3.9067383h27.5238647   c1.5106201,0,2.7351685-1.2246094,2.7351685-2.7351074v-6.0036621c0-1.7937012-0.8390503-3.5007324-2.1988525-4.6870117   c-2.2856445-1.9963379-3.7612305-4.9763184-3.7612305-8.2746582c0-3.9926758,2.1409912-7.5224609,5.3814697-9.4320068   c0.2314453-0.1157227,0.5496826,0.0289307,0.520752,0.2893066v6.307251c0,1.8776855,1.5363159,3.4140625,3.4140015,3.4140625   h2.8933105c1.9095459,0,3.4429321-1.5334473,3.4140015-3.4140625l-0.0289307-6.6254883   c0-0.2314453,0.260437-0.434082,0.4918823-0.3183594c3.5587158,1.8227539,5.9890137,5.526123,5.960083,9.7792969   c0,3.4719238-1.5913086,6.567627-4.1373291,8.5928955c-1.5045166,1.21521-2.4014282,2.9801025-2.4014282,4.8895264v5.4829102   c0,1.510498,1.2246094,2.7351074,2.7351685,2.7351074h28.1026611c2.1815186,0,3.9832153-1.7260742,4.0480347-3.9064941   c0.0288696-0.9724121,0.045105-1.973877,0.045105-3.0119629C89.4153748,60.1922607,79.2276917,50.7125244,74.1837463,47.6320801z" />
              </g>
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-[#5c5470d3]">
                Helper Name
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.helperName.charAt(0).toUpperCase() +
                  data?.helperName.slice(1)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-[#E94560]">
            <FaMoneyBillWaveAlt className="w-6 h-6 text-white" />
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-[#E94560]">
                Expense
              </span>
              <p className="text-lg text-gray-600 font-bold">{data?.expence}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-[#fdc57b]">
            <FaMoneyBillWaveAlt className="w-6 h-6 text-white" />
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-[#fdc57b]">
                Total Expense
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.totalExpense}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden bg-white rounded-lg card-shdow">
          <div className="flex items-center justify-center w-12 bg-[#016A70]">
            <FaMoneyBillTransfer className="w-7 h-7 text-white" />
          </div>
          <div className="px-4 py-2 -mx-3 ">
            <div className="mx-3 ">
              <span className="text-lg  font-semibold text-[#016A70]">
                Total Amount Deposited
              </span>
              <p className="text-lg text-gray-600 font-bold">
                {data?.totalAmountDeposited}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 mb-5 ">
        <div className="  flex justify-between px-1 xl:px-3">
          <button
            className="btn btn-circle bg-indigo-500"
            onClick={() => navigate("/alltractor")}>
            <svg
              className="w-8 h-8"
              id="arrow-narrow-left_24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect
                width={24}
                height={24}
                stroke="none"
                fill="#000000"
                opacity={0}
              />
              <g transform="matrix(1 0 0 1 12 12)">
                <g style={{}}>
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      style={{
                        stroke: "none",
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeDashoffset: 0,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" translate(-12, -12)"
                      d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                      strokeLinecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0 0)">
                    <line
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeDashoffset: 0,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      x1={-7}
                      y1={0}
                      x2={7}
                      y2={0}
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -5 2)">
                    <line
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeDashoffset: 0,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      x1={-2}
                      y1={-2}
                      x2={2}
                      y2={2}
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -5 -2)">
                    <line
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeDashoffset: 0,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      x1={-2}
                      y1={2}
                      x2={2}
                      y2={-2}
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button
            className="btn btn-circle bg-red-500"
            onClick={() => document.getElementById("my_modal_5").showModal()}>
            <MdDeleteForever className=" w-7 h-7 text-white" />
          </button>
          <label
            className="btn btn-circle bg-blue-500"
            htmlFor="__update_modal__">
            <svg
              className="svg-icon w-6 h-6 text-white"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M323.072 100.864h377.856c28.16 0 50.688-22.528 50.688-50.688S728.576 0 700.928 0H323.072c-28.16 0-50.688 22.528-50.688 50.688s23.04 50.176 50.688 50.176zM189.952 286.72h643.584c28.16 0 50.688-22.528 50.688-50.688s-22.528-50.688-50.688-50.688H189.952c-28.16 0-50.688 22.528-50.688 50.688s23.04 50.688 50.688 50.688zM936.448 374.784H87.552C39.936 374.784 1.024 413.696 1.024 460.8v476.672c0 47.616 38.4 86.016 86.016 86.016h849.408c47.616 0 86.016-38.4 86.016-86.016V460.8c0.512-47.104-38.4-86.016-86.016-86.016z m-297.984 259.584c-8.704 8.704-20.48 13.312-31.744 13.312-11.776 0-23.04-4.608-31.744-13.312l-17.408-17.408V890.88c0 25.088-20.48 45.056-45.056 45.056s-45.056-20.48-45.056-45.056v-273.92l-17.408 17.408c-17.408 17.408-46.08 17.408-64 0-17.408-17.408-17.408-46.08 0-64L480.256 476.16c8.704-8.704 19.968-13.312 31.744-13.312s23.552 4.608 31.744 13.312l94.208 94.208c17.92 17.92 17.92 46.592 0.512 64z" />
            </svg>
          </label>
        </div>
      </div>
      <DeleteModal id={data?._id} />
      <UpdateModal id={data?._id} />
    </div>
  );
};

export default TractorDetail;
