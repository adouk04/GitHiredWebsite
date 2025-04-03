import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import About from "./About"
import Officers from "./Officers"
import Events from "./Events"

function App() {
    return (
		<Router>
            <Header />

            <Routes>
                {/* Define the routes */}
                <Route path="/" element={<Home />} /> {/* Home Page */}
                <Route path="/about" element={<About />} /> {/* About Us Page */}
                <Route path="/officers" element={<Officers />} /> {/* Officers Page */}
                <Route path="/events" element={<Events/>} /> {/* Events Page */}
            </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;
