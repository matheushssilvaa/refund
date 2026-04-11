import Container from "./components/container"
import MainHeader from "./components/main-header"
import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/home/home"
import RequestPage from "./pages/new-request/new-request"
import LayoutMain from "./pages/layout-main"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<HomePage />} />
					<Route path="/nova-solicitacao" element={<RequestPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
