import type { InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const inputVariants = tv({
	base: "rounded-lg border border-gray-300 outline-0 text-[14px]",
	variants: {
		variant: {
			default: "focus:border focus:border-green-100 focus:text-gray-200"
		},
		size: {
			md: "p-4 h-[48px]"
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	}
})

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
	VariantProps<typeof inputVariants> {
	label?: string
}

export default function Input({
	id,
	variant,
	size,
	label,
	...props
}: InputProps) {
	return (
		<div className="flex gap-2 flex-col focus-within:text-green-100">
			{label && (
				<label htmlFor={id} className="text-sm transition">
					{label}
				</label>
			)}
			<input
				type="text"
				className={inputVariants({ variant, size })}
				{...props}
			/>
		</div>
	)
}