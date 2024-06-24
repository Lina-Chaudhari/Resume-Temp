import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TempOne from "./Template/Tempone";
import TempTwo from"./Temptwo/Resume";
import TepmThree from"./Tempthree/ResumeWrapper";
import TempFour from "./TemoFour/Tempfour";
import TempFive from "./Tempfive/tempfive";
import TepmSix from "./Tempsix/Tempsix";
import TempSeven from "./TempSeven/Tempseven";
import Temp8 from "./Temp8/Tempeight";
import Temp9 from "./Temp9/Temp9";
import Temp10 from "./Temp10/Temp10";
import Temp11 from "./Temp11/Temp11";
import Temp12 from "./Temp12/Temp12";
import Temp13 from "./Temp13/Temp13";
import Temp14 from "./Temp14/Temp14";
import Temp15 from "./Temp15/Temp15";
import Temp16 from "./Temp16/Temp16";
import Temp17 from "./Temp17/Temp17";
import Temp18 from "./Temp18/Temp18";
import Temp19 from "./Temp19/Temp19";





const App = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temp19/>} />
        <Route path="/Tempone"  element={<TempOne/>} />
        <Route path="/Resume"  element={<TempTwo/>} />
        <Route path="/ResumeWrapper"  element={<TepmThree/>} />
        <Route path="/Tempfour"  element={<TempFour/>} />
        <Route path="/Tempfive"  element={<TempFive/>} />
        <Route path="/Tempsix"  element={<TepmSix/>} />
        <Route path="/Tempseven"  element={<TempSeven/>} />
        <Route path="/Tempeight"  element={<Temp8/>} />
        <Route path="/Temp9"  element={<Temp9/>} />
        <Route path="/Temp10"  element={<Temp10/>} />
        <Route path="/Temp11"  element={<Temp11/>} />
        <Route path="/Temp12"  element={<Temp12/>} />
        <Route path="/Temp13"  element={<Temp13/>} />
        <Route path="/Temp14"  element={<Temp14/>} />
        <Route path="/Temp15"  element={<Temp15/>} />
        <Route path="/Temp16"  element={<Temp16/>} />
        <Route path="/Temp17"  element={<Temp17/>} />
        <Route path="/Temp18"  element={<Temp18/>} />
        <Route path="/Temp19"  element={<Temp19/>} />
        

      </Routes>
    </BrowserRouter>
    );
};

export default App;
