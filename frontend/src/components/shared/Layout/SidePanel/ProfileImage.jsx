import { useSelector } from "react-redux";
import profile from "../../../../assets/profile.png";

const ProfileImage = () => {
  const name = useSelector((state) => state.user.userDetails?.name);

  const firstName = name?.split(" ")[0];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex mx-auto bg-black rounded-2xl">
        <img src={profile} alt="Profile" />
      </div>

      <h3>Hello, {firstName}</h3>
    </div>
  );
};

export default ProfileImage;
