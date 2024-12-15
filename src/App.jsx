import {BrowserRouter as Router, Link} from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes.jsx";

const App = () => (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
        </nav>
        <AppRoutes/>
    </Router>
);

export default App;