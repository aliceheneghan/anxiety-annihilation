import { Link } from "react-router-dom";
import styled from "styled-components";

// styled
const StyledLink  = styled(Link)`
text-decoration: none;
color: black;
`;

export default function Header() {
  return (
    <div className="nav-cont flx cnt-cnt">
        <nav className="flx spc-even ">
            <button><StyledLink to="/">Home</StyledLink></button>
            <button><StyledLink to="/Choice">Choice</StyledLink></button>
        </nav>
    </div>
  )
}
