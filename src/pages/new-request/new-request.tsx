import Card from "../../components/card";
import Input from "../../components/input";
import SelectInput from "../../components/select";
import Button from "../../components/button";

export default function RequestPage() {
	return (
		<div className="w-full flex justify-center">
			<Card className="w-lg">
				<div className="space-y-3">
					<h1 className="text-xl font-bold">Nova Solicitação de reembolso</h1>
					<p className="text-sm">Dados da despesa para solicitar reembolso</p>
				</div>

				<div className="flex justify-center w-full mt-6">
					<form className="w-full gap-6 space-y-6">
						<div className="w-full">
							<Input label="Nome da solicitação" type="text" />
						</div>

						<div className="flex gap-4">
							<div className="w-full">
								<SelectInput className="w-full" label="Categoria" optionsData={[
									{
										option: "Alimentação", value: "Alimentação"
									},
									{
										option: "Hospedagem", value: "Hospedagem"
									},
									{
										option: "Transporte", value: "Transporte"
									},
									{
										option: "Serviços", value: "Serviços"
									},
									{
										option: "Outros", value: "Outros"
									}
								]} />
							</div>

							<div className="w-38.5">
								<Input
									type="text"
									label="Valor"
									placeholder="0,00"
								/>
							</div>

						</div>

						<div className="w-full flex justify-between items-end">
							<Input
								className="w-full"
								label="Comprovante"
								type="file"
							/>
						</div>

						<div>
							<Button
								className="flex justify-center w-full"
								type="submit"
								variant="default">
								Enviar
							</Button>
						</div>
					</form>
				</div>
			</Card>
		</div>
	)
}