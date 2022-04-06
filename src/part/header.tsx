import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    background-color: ${(props) => props.theme.headerBgColor};
    margin-bottom: 1rem;
`

const LinkHome = styled.div`
    width: 30%;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textColor};
    margin-left: 1rem;

`;

const Title = styled.div`
    width: 40%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.accentColor};
`;

const ThemeBtn = styled.div`
    width: 30%;
    margin-right: rem;
    font-size: 1.5rem;
    :hover{
        color:${(props) => props.theme.accentColor};
        cursor: pointer;
    }
`;

function Header() {  
    const [ IsDark, setThemeIsDark] = useRecoilState(isDarkAtom) 
    const toggleThemeIsDark = () => setThemeIsDark((prev) => !prev)
    const PUrl = process.env.PUBLIC_URL 
    return (
        <Container> 
            <LinkHome>
                <Link to={PUrl + "/"}>Home</Link>
            </LinkHome>
            <Title>코인</Title>
            <ThemeBtn onClick={toggleThemeIsDark}>change Theme : {IsDark ? "Dark" :"Light"}</ThemeBtn>
        </Container>
    
    );
}
export default Header;