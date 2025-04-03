

import BasicExample from "./components/Navbar"
import Sidebar from "./components/sidebar";
// import Naming  from "./components/changing";
import Counter from "./components/numbering"
function App() {
  

  return (<div>
    <BasicExample></BasicExample>
      <div className="d-flex">
        <Sidebar></Sidebar>
        {/* <Naming></Naming> */}
        <Counter></Counter></div>
        
    </div>
  )
}

export default App
