import Icon from "../../../components/icon"
import ForkKnifeIcon from "../../../assets/icons/ForkKnife.svg?react"
import WrenchIcon from "../../../assets/icons/Wrench.svg?react"
import PoliceCarIcon from "../../../assets/icons/PoliceCar.svg?react"
import BedIcon from "../../../assets/icons/Bed.svg?react"
import ReceiptIcon from "../../../assets/icons/Receipt.svg?react"
import { Link } from "react-router"
import { type Refund } from "../../../models/Refund"
import { formatPrice } from "../../../helpers/format-price"

type ServiceType = "food" | "hosting" | "transport" | "services" | "other"

interface Props {
	data?: Refund[]
}

export default function RequestList({ data }: Props) {

	const iconMapper: Record<ServiceType, any> = {
		food: ForkKnifeIcon,
		hosting: BedIcon,
		transport: PoliceCarIcon,
		services: WrenchIcon,
		other: ReceiptIcon
	}

	const categoryMapper = {
		food: "Alimentação",
		hosting: "Hospedagem",
		transport: "Transporte",
		services: "Serviços",
		other: "Outros"
	}

	return (
		<>
			{!data || data?.length === 0 && <p className="text-center mt-4 p-4">Nenhum dado encontrado</p>}
			{data?.map(item => (
				<Link key={item.id} to={`/single-refund/${item.id}`}>
					<div className="flex justify-between mt-4 items-center hover:bg-gray-400 p-2 rounded-lg">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-gray-400 rounded-full">
								<Icon className="p-1.5" svg={iconMapper[item.category as ServiceType ?? "Outros"]} />
							</div>
							<div className="flex flex-col">
								<span className="text-[14px] font-bold">
									{item.title}
								</span>
								<span className="text-[12px] font-regular">
									{categoryMapper[item.category as keyof typeof categoryMapper]}
								</span>
							</div>
						</div>
						<div>
							<span className="text-[12px]">R$</span>
							<span className="text-[14px] font-semibold">{formatPrice(item.value)}</span>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}