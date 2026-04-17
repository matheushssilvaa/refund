import Card from "../../components/card";
import ButtonIcon from "../../components/icon-button";
import Input from "../../components/input";
import RequestList from "./components/request-list";
import SearchIcon from "../../assets/icons/MagnifyingGlass.svg?react"
import ClaretLeftIcon from "../../assets/icons/CaretLeft.svg?react"
import ClaretRightIcon from "../../assets/icons/CaretRight.svg?react"
import useRefund from "../../hooks/use-refund";
import React, { useState } from "react";
import { debounce } from "../../helpers/utils";

export default function HomePage() {
	const {
		refound,
		search,
		searchPage,
		paginationData,
		isLoadingRefound } = useRefund()
	const [inputValue, setInputValue] = useState("")

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSetValue = React.useCallback(
		debounce((value: string) => search.setQ(value), 1000),
		[search.setQ]
	);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value

		setInputValue(value)
		debouncedSetValue(value)
	}

	return (
		<div className="flex justify-center">
			<Card className="w-270.5">
				<h1 className="text-xl font-bold">Solicitações</h1>
				<div className="flex mt-6 gap-3">
					<div className="w-full">
						<Input
							type="text"
							placeholder="Pesquisar pelo nome"
							value={inputValue}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<ButtonIcon
							iconVariant="primary"
							icon={SearchIcon}
							onClick={() => search.setQ(inputValue)}
						/>
					</div>
				</div>

				{isLoadingRefound ? "Carregando" : <RequestList data={refound} />}

				<div className="w-full flex items-center justify-center gap-2.5 mt-7.5">
					<ButtonIcon
						icon={ClaretLeftIcon}
						iconVariant="primary"
						size="sm"
						onClick={() =>
							searchPage.setParamPage((prev) => Math.max((prev ?? 1) - 1, 1))
						}
					/>
					<span>
						{paginationData?.currentPage}/{paginationData?.lastPage}
					</span>
					<ButtonIcon
						icon={ClaretRightIcon}
						iconVariant="primary"
						size="sm"
						onClick={() =>
							searchPage.setParamPage((prev) =>
								Math.min((prev ?? 1) + 1, paginationData?.lastPage ?? 1)
							)
						}
					/>
				</div>
			</Card>
		</div>
	)
}