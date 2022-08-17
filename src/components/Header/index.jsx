import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const StyledLink  = styled(Link)`
  text-decoration: none;
  color: black;
`;
  return (
    <div className="nav-cont flx cnt-cnt">
        <nav className="flx spc-even ">
            <button><StyledLink to="/">Home</StyledLink></button>
            <button><StyledLink to="/Choice">Choice</StyledLink></button>
            <button><StyledLink to="/ListenAndLook">ListenAndLook</StyledLink></button>
        </nav>
    {/* <button onClick={handleNavigate}>Practise navigate</ button> */}
    </div>
  )
}
