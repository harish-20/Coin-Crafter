import { Link } from "react-router-dom";

import homepageImage from "../../assets/homepage.png";

const HomepageImage = () => (
  <Link to="/signin" className="w-9/12">
    <img
      className="h-auto mt-10 rounded-[34px] shadow-lg shadow-green-200 float-animate"
      src={homepageImage}
      alt="homepage image"
    />
  </Link>
);

export default HomepageImage;
