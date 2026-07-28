import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#06142d]">
      <Header setOpenMenu={setOpenMenu} />

      <Sidebar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </div>
  );
}

export default App;