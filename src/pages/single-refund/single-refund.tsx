import Card from "../../components/card";
import Input from "../../components/input";
import SelectInput from "../../components/select";
import Button from "../../components/button";
import FileIcon from "../../assets/icons/File.svg?react"
import NavLink from "../../components/nav-link"

import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function SingleRequestPage() {
	return (
		<div className="w-full flex justify-center">
			<Card className="w-lg">
				<div className="space-y-3">
					<h1 className="text-xl font-bold">Solicitação de reembolso</h1>
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

						<div>
							<NavLink
								className="w-full flex justify-center items-center"
								variant="default"
								icon={FileIcon}
								iconVariant="primary"
								link="#"
							>
								Abrir comprovante
							</NavLink>

							<AlertDialog.Root>
								<AlertDialog.Trigger asChild>
									<Button
										className="flex justify-center w-full mt-4"
										variant="default"
									>
										Excluir
									</Button>
								</AlertDialog.Trigger>

								<AlertDialog.Portal>
									<AlertDialog.Overlay className="fixed inset-0 bg-gray-100/80" />
									<AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl w-lg" asChild>
										<Card>
											<AlertDialog.Title className="text-[20px] font-semibold">
												Excluir solicitação
											</AlertDialog.Title>
											<AlertDialog.Description className="text-sm mt-2">
												Tem certeza que deseja excluir essa solicitação? essa ação é irreversivel.
											</AlertDialog.Description>

											<div className="flex justify-end gap-3 mt-4">
												<AlertDialog.Cancel asChild>
													<NavLink
														className="flex justify-center items-center"
														variant="default"
														iconVariant="primary"
														link="#"
													>
														Cancelar
													</NavLink>
												</AlertDialog.Cancel>
												<AlertDialog.Action asChild>
													<Button variant="default">Confirmar</Button>
												</AlertDialog.Action>
											</div>
										</Card>
									</AlertDialog.Content>
								</AlertDialog.Portal>
							</AlertDialog.Root>
						</div>
					</form>
				</div>
			</Card>
		</div>
	)
}