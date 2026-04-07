import ButtonIcon from "./components/icon-button"
import SearchIcon from "./assets/icons/MagnifyingGlass.svg?react"
import Input from "./components/input"
import Container from "./components/container"
import MainHeader from "./components/main-header"
import { BrowserRouter } from "react-router"
import Card from "./components/card"
import RequestList from "./pages/home/components/request-list"
import ClaretLeftIcon from "./assets/icons/CaretLeft.svg?react"
import ClaretRightIcon from "./assets/icons/CaretRight.svg?react"

function App() {
	return (
		<BrowserRouter>
			<Container size="md">
				<MainHeader className="pt-10" />
			</Container>
			<Container className="w-270.5 pt-10">
				<Card>
					<h1 className="text-xl font-bold">Solicitações</h1>

					<div className="flex mt-6">
						<form className="w-full flex gap-3">
							<div className="w-full">
								<Input type="text" placeholder="Pesquisar pelo nome" />
							</div>
							<div>
								<ButtonIcon
									type="submit"
									iconVariant="primary"
									icon={SearchIcon}
								/>
							</div>
						</form>
					</div>

					<RequestList itens={[
						{
							name: "Rodrigo",
							service: "Alimentação",
							value: "34,78"
						},
						{
							name: "Tamires",
							service: "Hospedagem",
							value: "1.200,00"
						},
						{
							name: "Lara",
							service: "Alimentação",
							value: "12,35"
						},
						{
							name: "Elias",
							service: "Transporte",
							value: "47,65"
						}, {
							name: "Thiago",
							service: "Serviços",
							value: "99,90"
						}
						, {
							name: "Vinicius",
							service: "Outros",
							value: "25,89"
						}
					]} />
					<div className="w-full flex items-center justify-center gap-2.5 mt-7.5">
						<ButtonIcon icon={ClaretLeftIcon} iconVariant="primary" size="sm" />
						<span>1/3</span>
						<ButtonIcon icon={ClaretRightIcon} iconVariant="primary" size="sm" />
					</div>
				</Card>
			</Container>
		</BrowserRouter>
	)
}

export default App
