import ProfileImage from "./ProfileImage";
import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";

const SidePanel = (props) => {
  const { isOpen } = props;

  return (
    <div
      className={`z-50 min-w-[240px] flex flex-col justify-between items-center p-6 w-8/12 m-4 mr-0 h-[95%] bg-dark rounded-xl sm:w-6/12 md:z-0 md:w-[15%] ${
        isOpen ? "translate-x-0" : "translate-x-[-150%]"
      } duration-300 fixed top-0 left-0 md:static md:translate-x-0 md:h-auto`}
    >
      <ProfileImage />
      <NavLinks />

      <LogoutButton />
    </div>
  );
};

export default SidePanel;
