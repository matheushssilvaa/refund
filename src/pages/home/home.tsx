import Card from "../../components/card";
import ButtonIcon from "../../components/icon-button";
import Input from "../../components/input";
import RequestList from "./components/request-list";
import SearchIcon from "../../assets/icons/MagnifyingGlass.svg?react"
import ClaretLeftIcon from "../../assets/icons/CaretLeft.svg?react"
import ClaretRightIcon from "../../assets/icons/CaretRight.svg?react"

export default function HomePage() {
	return (
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
					id: "1",
					name: "Rodrigo",
					service: "Alimentação",
					value: "34,78"
				},
				{
					id: "2",
					name: "Tamires",
					service: "Hospedagem",
					value: "1.200,00"
				},
				{
					id: "3",
					name: "Lara",
					service: "Alimentação",
					value: "12,35"
				},
				{
					id: "4",
					name: "Elias",
					service: "Transporte",
					value: "47,65"
				},
				{
					id: "5",
					name: "Thiago",
					service: "Serviços",
					value: "99,90"
				},
				{
					id: "6",
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
	)
}