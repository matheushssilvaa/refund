import Card from "../../components/card";
import Input from "../../components/input";
import SelectInput from "../../components/select";
import Button from "../../components/button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formRefundSchema, type FormRefundSchema } from "../../schema/schemas";
import InputFIle from "../../components/input-file";
import useRefund from "../../hooks/use-refund";

export default function RequestPage() {
	const form = useForm<FormRefundSchema>({
		resolver: zodResolver(formRefundSchema)
	})

	const { createRefund } = useRefund()

	async function onSubmit(payload: FormRefundSchema) {
		try {
			await createRefund(payload)
			console.log("Formulário enviado!", payload)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="w-full flex justify-center">
			<Card className="w-lg">
				<div className="space-y-3">
					<h1 className="text-xl font-bold">
						Nova Solicitação de reembolso
					</h1>
					<p className="text-sm">
						Dados da despesa para solicitar reembolso
					</p>
				</div>

				<div className="flex justify-center w-full mt-6">
					<form
						className="w-full gap-6 space-y-6"
						onSubmit={form.handleSubmit(onSubmit)}>
						<div className="w-full">
							<Input
								label="Nome da solicitação"
								type="text"
								error={form.formState.errors.title?.message}
								{...form.register("title")}
							/>
						</div>

						<div className="flex gap-4">
							<div className="w-full">
								<SelectInput
									className="w-full"
									label="Categoria"
									error={form.formState.errors.category?.message}
									optionsData={[
										{
											option: "Alimentação", value: "food"
										},
										{
											option: "Hospedagem", value: "hosting"
										},
										{
											option: "Transporte", value: "transport"
										},
										{
											option: "Serviços", value: "services"
										},
										{
											option: "Outros", value: "other"
										}
									]}
									{...form.register("category")}
								/>
							</div>

							<div className="w-38.5">
								<Input
									type="string"
									label="Valor"
									placeholder="0,00"
									error={form.formState.errors.value?.message}
									{...form.register("value")}
								/>
							</div>
						</div>

						<div className="w-full flex justify-between items-end">
							<InputFIle
								className="w-full"
								label="Comprovante"
								type="file"
								error={form.formState.errors.receiptFile?.message}
								form={form}
								allowedExtensions={["jpg", "jpeg", "pdf"]}
								maxFileSizeInMB={2}
								{...form.register("receiptFile")}
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