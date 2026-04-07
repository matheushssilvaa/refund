import Icon from "../../../components/icon"
import ForkKnifeIcon from "../../../assets/icons/ForkKnife.svg?react"
import WrenchIcon from "../../../assets/icons/Wrench.svg?react"
import PoliceCarIcon from "../../../assets/icons/PoliceCar.svg?react"
import BadIcon from "../../../assets/icons/Bed.svg?react"
import ReceiptIcon from "../../../assets/icons/Receipt.svg?react"

type ServiceType = "Alimentação" | "Hospedagem" | "Transporte" | "Serviços" | "Outros"

type PropsRequestList = {
	name?: string
	service?: ServiceType
	value?: string
}

interface RequestListProps {
	itens?: PropsRequestList[]
}

export default function RequestList(
	items: RequestListProps
) {

	const iconMapper: Record<ServiceType, any> = {
		Alimentação: ForkKnifeIcon,
		Hospedagem: BadIcon,
		Transporte: PoliceCarIcon,
		Serviços: WrenchIcon,
		Outros: ReceiptIcon
	}

	return (
		items.itens?.map(item => (
			<div key={item.name} className="flex justify-between mt-4 items-center hover:bg-gray-400 p-2 rounded-lg">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 bg-gray-400 rounded-full">
						<Icon className="p-1.5" svg={iconMapper[item.service ?? "Outros"]} />
					</div>
					<div className="flex flex-col">
						<span className="text-[14px] font-bold">{item.name}</span>
						<span className="text-[12px] font-regular">{item.service}</span>
					</div>
				</div>

				<div>
					<span className="text-[12px]">R$</span> <span className="text-[14px] font-semibold">{item.value}</span>
				</div>
			</div>
		))
	)
}