import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="Navigation">
        <Link to='/'>Home</Link>
        <Link to='/heroes'>Heroes</Link>
        <Link to='/episodes'>Episodes</Link>
    </nav>
)

export default Navigation;