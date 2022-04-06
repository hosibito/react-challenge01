import { useRecoilValue } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from "react-query/devtools";

import Router from "./Router";
import { isDarkAtom } from './atoms';
import { darkTheme, lightTheme } from './theme';



const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  width: 100vw;
}
a {
  text-decoration:none;
  color:inherit;
}
`;




function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Router />  
      <ReactQueryDevtools initialIsOpen={true} /> 
    </ThemeProvider>
  );
}

export default App;

