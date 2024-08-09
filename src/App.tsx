import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import "./reset.css"


function App() {

	return (
		<>
			<Routes>
			{/* <Route path="/recette/:id" element={<Recipe />} /> */}
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	)
}

export default App