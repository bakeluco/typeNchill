const Navbar = () => {
  const navbarClasses =
    "fixed flex flex-row items-center justify-evenly bg-gray-700 bg-opacity-90 w-full h-16 m-0 shadow-lg";
  const hastagClasses = "material-icons text-gray-400 ml-2 my-auto";
  const titleClasses =
    "text-xl text-gray-200 font-semibold text-opacity-80 mr-auto ml-2 my-auto transition duration-300 ease-in-out";

  return (
    <div className={navbarClasses}>
      <span className={hastagClasses}>tag</span>
      <h5 className={titleClasses}>Chapter 1</h5>
    </div>
  );
};

export default Navbar;
