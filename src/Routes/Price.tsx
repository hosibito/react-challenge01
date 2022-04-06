import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
  
interface ChartProps {
    coinId: string;
}

const Prices = styled.table`
    border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
  line-height: 1.5;
  margin: 20px 10px;
  th{  
    width: 100%;
    font-weight: bold;
    vertical-align: top;
    color: ${(prop) => prop.theme.accentColor};
    background:  ${(prop) => prop.theme.btnBgColor} ;
  }
  td{ 
    width: 100%;
    padding: 5px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background: ${(prop) => prop.theme.headerBgColor};
  }
    
`

function Price() {
    const outletDatas = useOutletContext<ChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", outletDatas.coinId], () =>
        fetchCoinHistory(outletDatas.coinId),
        {
            refetchInterval: 10000,
        }
    );   
    const isDark = useRecoilValue(isDarkAtom);    
    return (
    <>
        <Prices>
            <thead>
                <tr>
                    <th>time_open</th>                
                    <th>open</th>
                    <th>high</th>
                    <th>low</th>
                    <th>close</th>                  
                </tr>
            </thead>
            <tbody>
                {data?.map((ppp) => ( 
                    <tr key={ppp.time_open}>
                        <td>{new Date(ppp.time_open).toISOString().split("T")[0]}</td>                      
                        <td>{ppp.open.toFixed(2)}</td>
                        <td>{ppp.high.toFixed(2)}</td>
                        <td>{ppp.low.toFixed(2)}</td>
                        <td>{ppp.close.toFixed(2)}</td>                       
                    </tr>
                ))}
            </tbody>
        </Prices>
    </>
        );
}

export default Price;
