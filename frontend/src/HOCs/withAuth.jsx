import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../components/UI/Spinner";

import { userThunks } from "../store/slices/user/userSlice";

/**
 * A component to guard pages based on authentication status.
 * @param {{ element: React.ReactElement, protection: "with-auth" | "without-auth" }} props
 * @returns {React.ReactElement} The guarded page or a redirect.
 */
const WithPageGuard = (props) => {
  const { element, protection } = props;

  const isUserLoading = useSelector((state) => state.user.isUserLoading);
  const userDetails = useSelector((state) => state.user.userDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userDetails) dispatch(userThunks.getUser());
  }, []);

  if (isUserLoading) {
    return (
      <div className="flex justify-center h-screen">
        <Spinner size="50" />
      </div>
    );
  }

  if (protection === "with-auth" && !userDetails)
    return <Navigate to="/signin" replace />;

  if (protection === "without-auth" && userDetails)
    return <Navigate to="/dashboard" replace />;

  return element;
};

WithPageGuard.propTypes = {
  element: PropTypes.element.isRequired,
  protection: PropTypes.oneOf(["with-auth", "without-auth"]),
};

export default WithPageGuard;
