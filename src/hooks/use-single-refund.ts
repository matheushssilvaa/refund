import { useQuery } from "@tanstack/react-query";
import { type Refund } from "../models/Refund";
import { api, fetcher } from "../helpers/api";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function useSingleRefund(id?: string) {
	const navigate = useNavigate()

	const { data, isLoading } = useQuery<Refund>({
		queryKey: ["refundSingle", id],
		queryFn: () => fetcher(`/refunds/${id}`),
		enabled: !!id
	})

	async function getDownloadURLImage(id: string) {
		try {
			const { data } = await api.get(
				import.meta.env.VITE_IMAGES_URL + `/receipts/download/${id}`
			)
			window.open(import.meta.env.VITE_IMAGES_URL + data.url, "_blank")
		} catch (error) {
			console.error(error)
		}
	}

	async function deleteReceipt(id: string) {
		try {
			const { data } = await api.get(`/receipts/${id}`)

			return data.id
		} catch (error) {
			console.error(error.message)
			throw new Error(error)
		}
	}

	async function deleteRefund(id: string) {
		try {
			const { data } = await api.delete(`/refunds/${id}`)
			navigate('/')
			toast.success("Recibo deletado com sucesso!")
			return { data }
		} catch (error) {
			toast.error(`Ocorreu um erro ao deletar o recibo. Mensagem ${error.message}`)
			throw new Error(error)
		}
	}

	return {
		data,
		isLoading,
		getDownloadURLImage,
		deleteReceipt,
		deleteRefund
	}
}