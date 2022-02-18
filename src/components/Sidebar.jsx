const icons = ["home", "add", "bookmark", "library_books", "light_mode"];

const tooltip = [
  "🏠 Home page ",
  "➕ Add custom text! ",
  "✏️ Continue where you left off ",
  "📝 Show collection ",
  "🌞 Toggle theme ",
];

const Sidebar = () => {
  const bgClasses = "fixed top-0 left-0 h-screen w-16 bg-gray-900 ";
  const iconClasses = `flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-yellow-500 hover:bg-yellow-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear group`;

  return (
    <div className={bgClasses}>
      {icons.map((icon, index) => (
        <div key={icon}>
          {index == icons.length - 1 ? <Divider /> : ""}
          <div className={iconClasses}>
            <SidebarIcon icon={icon} />
            <Tooltip text={tooltip[index]} />
          </div>
          {index == 0 ? <Divider /> : ""}
        </div>
      ))}
    </div>
  );
};

const SidebarIcon = ({ icon }) => (
  <span className="material-icons">{icon}</span>
);

const Tooltip = ({ text }) => {
  const classes =
    "absolute w-auto p-2 m-4 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100";

  return <span className={classes}>{text} </span>;
};

const Divider = () => {
  const classes = "border border-gray-800  mx-2";
  return <hr className={classes} />;
};

export default Sidebar;
