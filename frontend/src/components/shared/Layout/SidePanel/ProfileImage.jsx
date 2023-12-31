import profile from "../../../../assets/profile.png";

const ProfileImage = () => {
  const name = "Harish";
  return (
    <div className="flex flex-col gap-4">
      <div className="flex mx-auto bg-black rounded-2xl">
        <img src={profile} alt="Profile" />
      </div>

      <h3>Hello, {name}</h3>
    </div>
  );
};

export default ProfileImage;
