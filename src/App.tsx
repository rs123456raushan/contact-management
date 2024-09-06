import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Router>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        {!isOpen && <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/map" element={<Map />} />
            <Route path="/chart" element={<LineGraph />} />
          </Routes>
        </div>}
      </Router >
    </div >
  );
};

export default App;
