import BasicExample from "./components/Navbar";
import Sidebar from "./components/sidebar";
import DRestFetching from "./components/restFetching";
import { Routes, Route } from "react-router-dom";
import ShowMore from "./components/ShowMore";
import Add from "./components/AddItems";
function App() {
  return (
    <>
      <BasicExample />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<DRestFetching />} />
            <Route path='more/:id' element={<ShowMore/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
