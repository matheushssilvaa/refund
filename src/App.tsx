import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/home/home"
import RequestPage from "./pages/new-request/new-request"
import LayoutMain from "./pages/layout-main"
import SingleRequestPage from "./pages/single-request/single-request"
import RequestSentPage from "./pages/request-sent/request-sent"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { NuqsAdapter } from "nuqs/adapters/react"

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<BrowserRouter>
					<Routes>
						<Route element={<LayoutMain />}>
							<Route index element={<HomePage />} />
							<Route path="/new-refund" element={<RequestPage />} />
							<Route path="/single-refund/:id" element={<SingleRequestPage />} />
							<Route path="/refund-sent" element={<RequestSentPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</NuqsAdapter>
		</QueryClientProvider>
	)
}

export default App
