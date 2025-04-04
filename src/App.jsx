

import BasicExample from "./components/Navbar"
import Sidebar from "./components/sidebar";
import DRestFetching from "./components/restFetching"
function App() {
  

  return (<div>
    <BasicExample></BasicExample>
      <div className="d-flex" >
        <Sidebar></Sidebar>
        <div style={{ marginLeft: "30px", marginTop: "20px" }}>
          <DRestFetching></DRestFetching>
        </div></div>

        
    </div>
  )
}

export default App
