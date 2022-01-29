const icons = ["home", "add", "bookmark", "library_books", "light_mode"];

const tooltip = [
  "🏠 Home page ",
  "➕ Add custom text! ",
  "✏️ Continue where you left off ",
  "📝 Show collection ",
  "🌞 Toggle theme ",
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      {icons.map((icon, index) => (
        <div key={icon}>
          {index == icons.length - 1 ? <Divider /> : ""}
          <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-yellow-500 hover:bg-yellow-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear group">
            <SidebarIcon icon={icon} />
            <Tooltip text={tooltip[index]} />
          </div>
          {index == 0 ? <Divider /> : ""}
        </div>
      ))}
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <span className="material-icons">{icon}</span>
);

const Tooltip = ({ text }) => (
  <span
    className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
text-white bg-gray-900 
text-xs font-bold 
transition-all duration-100 scale-0 origin-left group-hover:scale-100"
  >
    {text}
  </span>
);

const Divider = () => (
  <hr
    className=" bg-gray-200 dark:bg-gray-800 
border border-gray-200 dark:border-gray-800 rounded-full
mx-2"
  />
);

export default Sidebar;
