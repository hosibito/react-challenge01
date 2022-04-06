import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Routes/Coins";
import Coin from "./Routes/Coin";
import Header from "./part/header";
import Chart from "./Routes/Chart";
import Price from "./Routes/Price";
import ChartCandalStick from "./Routes/ChartCandlstick";

function Router() {  
    const PUrl = process.env.PUBLIC_URL 
    console.log(process.env.PUBLIC_URL)
    return (   
        <BrowserRouter>
            <Header/>   
            <Routes>         
                <Route path={PUrl + "/"} element={<Coins />}></Route>
                <Route path={PUrl + "/:coinId"} element={<Coin />}>
                    <Route path="chartline" element={<Chart />} />
                    <Route path="chartcandalstick" element={<ChartCandalStick />} />
                    <Route path="price" element={<Price />} /> 
                </Route>
            </Routes>
        </BrowserRouter>     
    );
  }
  
  export default Router;