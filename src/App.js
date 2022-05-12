import './App.css';
import { LoginForm } from './Loginfunc/login';
import Newmodel from './Loginfunc/newmodel';
import Managerpage from './Loginfunc/managerpage';
import Newmanager from './Loginfunc/newmanager';
import Newjob from './Loginfunc/newjob';
import Managerseejobs from './Loginfunc/managerseejobs';
import Deletemodel from './Loginfunc/deletemodel';
import Addmodel from './Loginfunc/addmodel';
import Modelpage from './Loginfunc/modelpage';
import Modelseejobs from './Loginfunc/modelseejobs';
import Modeladdexpense from './Loginfunc/modeladdexpense';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

function App() {



  return (
    // <Manager></Manager>
    
    <Router>
    <Routes>
    <Route path="/" element={<LoginForm></LoginForm>} />
    <Route path="/loginform" element={<LoginForm></LoginForm>} />
    <Route path="/newmodel" element={<Newmodel></Newmodel>} />
    <Route path="/managerPage" element={<Managerpage></Managerpage>}/>
    <Route path="/newmanager" element={<Newmanager></Newmanager>}/>
    <Route path="/newjob" element={<Newjob></Newjob>}/>
    <Route path="/seejob" element={<Managerseejobs></Managerseejobs>}/>
    <Route path="/deletemodel" element={<Deletemodel></Deletemodel>}/>
    <Route path="/addmodel" element={<Addmodel></Addmodel>}/>
    {/* Mode pages */}
    <Route path="/modelPage" element={<Modelpage></Modelpage>}/>
    <Route path="/modelseejob" element={<Modelseejobs></Modelseejobs>}/>
    <Route path="/modeladdexpense" element={<Modeladdexpense></Modeladdexpense>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
