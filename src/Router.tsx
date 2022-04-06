import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Routes/Coins";
import Coin from "./Routes/Coin";
import Header from "./part/header";
import Chart from "./Routes/Chart";
import Price from "./Routes/Price";
import ChartCandalStick from "./Routes/ChartCandlstick";

function Router() {  
    return (   
        <BrowserRouter>
            <Header/>   
            <Routes>         
                <Route path={process.env.PUBLIC_URL + "/"} element={<Coins />}></Route>
                <Route path={process.env.PUBLIC_URL + "/:coinId"} element={<Coin />}>
                    <Route path="chartline" element={<Chart />} />
                    <Route path="chartcandalstick" element={<ChartCandalStick />} />
                    <Route path="price" element={<Price />} /> 
                </Route>
            </Routes>
        </BrowserRouter>     
    );
  }
  
  export default Router;