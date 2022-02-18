import Sidebar from "./components/Sidebar";
import Collections from "./components/Collections";
import View from "./components/View";
import { TextContextProvider } from "./context/TextContext";

const App = () => (
  <TextContextProvider>
    <Sidebar />
    <Collections />;
    <View />
  </TextContextProvider>
);

export default App;
