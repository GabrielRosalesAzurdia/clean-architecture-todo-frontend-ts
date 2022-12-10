import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Faq, Home } from "./pages";
import {Toaster} from 'react-hot-toast'
import NavbarContainer from "./presentation/components/Navbar/NavbarContainer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavbarContainer />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/faq" element={<Faq />} />
				</Routes>
				<Toaster  position="bottom-center"/>
			</BrowserRouter>
		</div>
	);
}

export default App;
