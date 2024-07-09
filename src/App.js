import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import Forget from "./components/forgotpass";
import Profile from "./components/profile";

import DataSci1 from "./All-Templates/Data Scientist/Temp21/Temp21";
import DataSci2 from "./All-Templates/Data Scientist/Temp22/Temp22";
import DataSci3 from "./All-Templates/Data Scientist/Temp23/Temp23";
import DataSci4 from "./All-Templates/Data Scientist/Temp24/Temp24";
import DataSci5 from "./All-Templates/Data Scientist/Temp25/Temp25";

import Account1 from "./All-Templates/Accounting/Account1/Tempone";
import Account2 from "./All-Templates/Accounting/Account2/Tempseven";
import Account3 from "./All-Templates/Accounting/Account3/Temp43";
import Account4 from "./All-Templates/Accounting/Account4/Temp44";
import Account5 from "./All-Templates/Accounting/Account5/Temp45";

import Teacher1 from "./All-Templates/Teacher/Teacher1/Tech1";
import Teacher2 from "./All-Templates/Teacher/Teacher2/ResumeWrapper";
import Teacher3 from "./All-Templates/Teacher/Teacher3/Temp38";
import Teacher4 from "./All-Templates/Teacher/Teacher4/Temp39";
import Teacher5 from "./All-Templates/Teacher/Teacher5/Temp40";

import SEngineer1 from "./All-Templates/Software Engineer/Temp4/Tempfour";
import SEngineer2 from "./All-Templates/Software Engineer/Temp5/tempfive";
import SEngineer3 from "./All-Templates/Software Engineer/Temp6/Tempsix";
import SEngineer4 from "./All-Templates/Software Engineer/Software4/Temp41";
import SEngineer5 from "./All-Templates/Software Engineer/Software5/Temp42";

import Manager1 from "./All-Templates/Product Manager/Manager1/Tempeight";
import Manager2 from "./All-Templates/Product Manager/Manager2/Temp9";
import Manager3 from "./All-Templates/Product Manager/Manager3/Temp10";
import Manager4 from "./All-Templates/Product Manager/Manager4/Temp11";
import Manager5 from "./All-Templates/Product Manager/Manager5/Temp12";

import Design1 from "./All-Templates/Designer/Design1/Temp13";
import Design2 from "./All-Templates/Designer/Design2/Temp14";
import Design3 from "./All-Templates/Designer/Design3/Temp15";
import Design4 from "./All-Templates/Designer/Design4/Temp20";
import Design5 from "./All-Templates/Designer/Design5/Temp37";

import Consulant1 from"./All-Templates/Consultant/Consulant1/Temp16";
import Consulant2 from"./All-Templates/Consultant/Consulant2/Temp17";
import Consulant3 from"./All-Templates/Consultant/Consulant3/Temp18";
import Consulant4 from"./All-Templates/Consultant/Consulant4/Temp19";
import Consulant5 from"./All-Templates/Consultant/Consulant5/Temp31";

import BA1 from "./All-Templates/Business Analyst/Business1/Temp26";
import BA2 from "./All-Templates/Business Analyst/Business2/Temp27";
import BA3 from "./All-Templates/Business Analyst/Business3/Temp28";
import BA4 from "./All-Templates/Business Analyst/Business4/Temp29";
import BA5 from "./All-Templates/Business Analyst/Business5/Temp30";

import Sales1 from "./All-Templates/Sales/Sales1/Temp32";
import Sales2 from "./All-Templates/Sales/Sales2/Temp33";
import Sales3 from "./All-Templates/Sales/Sales3/Temp34";
import Sales4 from "./All-Templates/Sales/Sales4/Temp35";
import Sales5 from "./All-Templates/Sales/Sales5/Temp36";

import Marketing1 from"./All-Templates/Marketing/Marketing1/Temp46";
import Marketing2 from"./All-Templates/Marketing/Marketing2/Temp47";
import Marketing3 from"./All-Templates/Marketing/Marketing3/Temp48";
import Marketing4 from"./All-Templates/Marketing/Marketing4/Temp49";
import Marketing5 from"./All-Templates/Marketing/Marketing5/Temp50";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route path="/" element={<Marketing5/>} />
              <Route
                path="/Login"
                element={user ? <Navigate to="/Forget" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ResetPassword" element={<Forget />} />

              <Route path="/Temp21" element={<DataSci1 />} />
              <Route path="/Temp22" element={<DataSci2/>} />
              <Route path="/Temp23" element={<DataSci3 />} />
              <Route path="/Temp24" element={<DataSci4 />} />
              <Route path="/Temp25" element={<DataSci5 />} />
              <Route path="/Temp1" element={<Account1/>} />
              <Route path="/Temp7" element={<Account2/>} />
              <Route path="/Temp43" element={<Account3/>} />
              <Route path="/Temp44" element={<Account4/>} />
              <Route path="/Temp45" element={<Account5/>} />
              <Route path="/Temp2" element={<Teacher1/>} />
              <Route path="/Temp3" element={<Teacher2/>} />
              <Route path="/Temp38" element={<Teacher3/>} />
              <Route path="/Temp39" element={<Teacher4/>} />
              <Route path="/Temp40" element={<Teacher5/>} />
              <Route path="/Temp4" element={<SEngineer1/>} />
              <Route path="/Temp5" element={<SEngineer2/>} />
              <Route path="/Temp6" element={<SEngineer3/>} />
              <Route path="/Temp41" element={<SEngineer4/>} />
              <Route path="/Temp42" element={<SEngineer5/>} />
              <Route path="/Temp8" element={<Manager1/>} />
              <Route path="/Temp9" element={<Manager2/>} />
              <Route path="/Temp10" element={<Manager3/>} />
              <Route path="/Temp11" element={<Manager4/>} />
              <Route path="/Temp12" element={<Manager5/>} />
              <Route path="/Temp13" element={<Design1/>} />
              <Route path="/Temp14" element={<Design2/>} />
              <Route path="/Temp15" element={<Design3/>} />
              <Route path="/Temp20" element={<Design4/>} />
              <Route path="/Temp37" element={<Design5/>} />
              <Route path="/Temp16" element={<Consulant1/>} />
              <Route path="/Temp17" element={<Consulant2/>} />
              <Route path="/Temp18" element={<Consulant3/>} />
              <Route path="/Temp19" element={<Consulant4/>} />
              <Route path="/Temp31" element={<Consulant5/>} />
              <Route path="/Temp26" element={<BA1/>} />
              <Route path="/Temp27" element={<BA2/>} />
              <Route path="/Temp28" element={<BA3/>} />
              <Route path="/Temp29" element={<BA4/>} />
              <Route path="/Temp30" element={<BA5/>} />
              <Route path="/Temp32" element={<Sales1/>} />
              <Route path="/Temp33" element={<Sales2/>} />
              <Route path="/Temp34" element={<Sales3/>} />
              <Route path="/Temp35" element={<Sales4/>} />
              <Route path="/Temp36" element={<Sales5/>} />
              <Route path="/Temp46" element={<Marketing1/>} />
              <Route path="/Temp47" element={<Marketing2/>} />
              <Route path="/Temp48" element={<Marketing3/>} />
              <Route path="/Temp49" element={<Marketing4/>} />
              <Route path="/Temp50" element={<Marketing5/>} />


              </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;