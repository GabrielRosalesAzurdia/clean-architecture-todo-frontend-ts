import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Faq, Home } from "./pages";
import { Navbar } from "./presentation/components";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/faq" element={<Faq />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
