import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  //? number to string ⤵

  //? number to string ⤴
  return (
    <div>
      <div className=" ">
        <Link to="tractordetails" className="btn btn-info">
          Info
        </Link>
      </div>
    </div>
  );
};

export default Home;
