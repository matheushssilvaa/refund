// use-refund.ts
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetcher } from "../helpers/api";
import { createSerializer, parseAsInteger, parseAsString, useQueryState } from "nuqs";

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

	return {
		refound: data?.data,
		isLoadingRefound: isLoading,
		paginationData: data?.meta,
		search: { q, setQ },
		searchPage: {
			page,
			setParamPage: setPage
		}
	}
}