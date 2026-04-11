import type React from "react"
import { tv, type VariantProps } from "tailwind-variants"

const variantsButton = tv({
	base: "flex items-center cursor-pointer font-bold text-[14px] h-[48px] transition text-white rounded-lg text-white",
	variants: {
		variant: {
			default: "bg-green-100 hover:bg-green-200"
		},
		size: {
			md: "p-5"
		},
		disabled: {
			true: "bg-green-100 opacity-50 pointer-events-none"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md",
		disabled: false
	}
})

interface ButtonProps extends
	VariantProps<typeof variantsButton>,
	React.ComponentProps<"button"> {
	children: React.ReactNode
}

export default function Button({
	children,
	variant,
	size,
	disabled,
	className,
	...props
}: ButtonProps) {
	return (
		<button className={variantsButton({ variant, size, className, disabled })} {...props}>
			{children}
		</button>
	)
}