import { NavLink } from "react-router";

export default function Home(){
    return (
        <div>
            Home page
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of service</NavLink>
                <NavLink to="/facebook">Facebook</NavLink>
            </nav>
        </div>
        
      );
}