import { tv, type VariantProps } from "tailwind-variants"

const selectInputVariants = tv({
	base: "flex justify-between items-center rounded-lg border border-gray-300 outline-0 text-[14px]",
	variants: {
		variant: {
			default: "focus:border focus:border-green-100 focus:text-gray-200"
		},
		size: {
			md: "pl-4 pr-4 h-[48px]"
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	}
})

type SelectOption = {
	option: string | number,
	value: string | number
}

interface SelectInputProps
	extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
	VariantProps<typeof selectInputVariants> {
	optionsData: SelectOption[]
	label?: string
}

export default function SelectInput({
	id,
	variant,
	size,
	label,
	optionsData
}: SelectInputProps) {
	return (
		<div
			className="flex gap-2 flex-col focus-within:text-green-100">
			{label && (
				<label htmlFor={id} className="text-sm transition">
					{label}
				</label>
			)}
			<select className={selectInputVariants({ variant, size })}>
				<option value="">Selecione</option>
				{optionsData.map(e => (
					<option key={e.value} value={e.value}>{e.option}</option>
				))}
			</select>
		</div>
	)
}