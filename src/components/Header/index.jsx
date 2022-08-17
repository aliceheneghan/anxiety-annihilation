import { NavLink } from "react-router-dom";

export default function Header() {
    
  return (
    <div className="header-cont">
        <nav>
            <NavLink to="/" style={({ isActive }) => { 
                return isActive ? { backgroundColor: "pink" } : undefined;
             }}>Home</NavLink>
            <NavLink to="/Choice">Choice</NavLink>
            <NavLink to="/ListenAndLook">ListenAndLook</NavLink>
        </nav>
    {/* <button onClick={handleNavigate}>Practise navigate</ button> */}
    </div>
  )
}
