import Card from "../../components/card";
import RequestSentIcon from "../../assets/icons/RequestSent.svg?react"
import Icon from "../../components/icon";
import Button from "../../components/button";
import { Link } from "react-router";

export default function RequestSentPage() {
	return (
		<div className="flex justify-center">
			<Card className="flex flex-col justify-center w-lg">
				<div className="flex flex-col justify-center space-y-6 text-center">
					<h1 className="text-2xl font-bold text-green-100">
						Solicitação Enviada!
					</h1>
					<div className="flex justify-center w-full">
						<Icon svg={RequestSentIcon} className="w-27.5 h-27.5" />
					</div>
					<p>
						Agora é apenas aguardar! Sua solicitação será analisada
						e, em breve, o setor financeiro irá entrar em contato com você.
					</p>
				</div>
				<Link to="/nova-solicitacao">
					<Button className="w-full flex justify-center mt-10">
						Nova Solicitação
					</Button>
				</Link>
			</Card>
		</div>
	)
}