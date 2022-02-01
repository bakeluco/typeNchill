import Sidebar from "./components/Sidebar";
import Collections from "./components/Collections";
import Navbar from "./components/Navbar";
import View from "./components/View";
// import Home from "./views/Home"

function App() {
  return (
    <div className="">
      <Sidebar />
      {/* <Navbar /> */}
      <Collections />
      <View />
    </div>
  );
}

export default App;
