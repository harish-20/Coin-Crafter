import { Link } from "react-router-dom";

import homepageImage from "../../assets/homepage.png";

const HomepageImage = () => (
  <Link to="/signin" className="w-9/12">
    <img
      className="w-full mt-10 rounded-xl shadow-lg shadow-green-600 float-animate md:w-[98vw]"
      src={homepageImage}
      alt="homepage image"
    />
  </Link>
);

export default HomepageImage;
