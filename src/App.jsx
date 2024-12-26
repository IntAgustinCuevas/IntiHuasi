import { useState } from "react";
import Sidebar from "./components/Sidebar";
import BottombarMovil from "./components/BottombarMovil";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-[#fcd821] w-full min-h-screen">
      {/* Barra lateral fullscreen */}
      <Sidebar showSidebar={showSidebar} />
      {/* Barra de navegacion smallscreen */}
      <BottombarMovil toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      {/* Barra de navegacion */}
      <NavBar />
      {/* Pagina principal */}
      <MainPage />
    </div>
  );
}

export default App;
