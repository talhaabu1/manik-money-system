import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className=" ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 ">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto">
              Take me home
            </Link>
          </div>
        </div>
        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto"
            src="https://cdn-icons-png.flaticon.com/128/8452/8452928.png"
            alt="flaticon"
          />
        </div>
      </div>
    </section>
  );
};

export default Error;
