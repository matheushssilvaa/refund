import Container from "./components/container"
import MainHeader from "./components/main-header"
import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/home/home"
import RequestPage from "./pages/new-request/new-request"
import LayoutMain from "./pages/layout-main"
import SingleRequestPage from "./pages/single-request/single-request"
import RequestSentPage from "./pages/request-sent/request-sent"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<HomePage />} />
					<Route path="/nova-solicitacao" element={<RequestPage />} />
					<Route path="/single-request/:id" element={<SingleRequestPage />} />
					<Route path="/request-sent" element={<RequestSentPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
