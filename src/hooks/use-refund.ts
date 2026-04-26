// use-refund.ts
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api, fetcher } from "../helpers/api";
import {
	createSerializer,
	parseAsInteger,
	parseAsString,
	useQueryState
} from "nuqs";

import { type Receipt } from "../models/Receipt";
import type { FormRefundSchema } from "../schema/schemas";

export default function useRefund() {
	const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
	const [q, setQ] = useQueryState('q', parseAsString.withDefault(''))

	const toSearchParams = createSerializer({
		page: parseAsInteger,
		q: parseAsString
	})

	const { data, isLoading } = useQuery({
		queryKey: ["refunds", page, q],
		queryFn: () => fetcher(`/refunds${toSearchParams({ page, q })}`)
			.then((res) => res.refunds),
		placeholderData: keepPreviousData
	})

	async function createRefundFile(payload: FormRefundSchema) {
		try {
			const { data } = await api.post<Receipt>("/receipts", {
				receiptFile: payload.receiptFile[0]
			},
				{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}
			)
			return data.receipt.id
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	async function createRefund(payload: FormRefundSchema) {
		try {
			const receiptId = await createRefundFile(payload)

			const { data } = await api.post("/refunds", {
				title: payload.title,
				category: payload.category,
				value: payload.value,
				receipt: receiptId
			})
			return data
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	return {
		refound: data?.data,
		isLoadingRefound: isLoading,
		paginationData: data?.meta,
		search: { q, setQ },
		searchPage: {
			page,
			setParamPage: setPage
		},
		createRefund
	}
}