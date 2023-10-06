
import {
 Routes, Route,
} from 'react-router-dom'
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import ServicePage from "./pages/servicePage";

function App() {
  return (
<>
<Routes>
<Route path="/" exact Component={HomePage} />
<Route path="/service" exact Component={ServicePage} />
<Route path="/contact-content" exact Component={ContactPage} />
</Routes>
</>
  );
}

export default App;
