import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Spinner from "../components/UI/Spinner";

const withPageGuard = (component, protection = "with-auth") => {
  const isUserLoading = useSelector((state) => state.user.isUserLoading);
  const userDetails = useSelector((state) => state.user.userDetails);

  if (isUserLoading) {
    return (
      <div className="flex justify-center h-screen">
        <Spinner size="50" />
      </div>
    );
  }

  if (protection === "with-auth") {
    if (userDetails) {
      return component;
    } else {
      return <Navigate to="/signin" replace />;
    }
  }

  if (protection === "without-auth") {
    if (userDetails) {
      return <Navigate to="/dashboard" replace />;
    } else {
      return component;
    }
  }
};

export default withPageGuard;
