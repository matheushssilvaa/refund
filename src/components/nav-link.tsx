import type React from "react"
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";

const navLinkVariants = tv({
	base: "h-[48px] flex items-center gap-[7px] text-[14px] cursor-pointer",
	variants: {
		variant: {
			default: "text-gray-200 hover:text-green-100 active:text-green-100 font-semibold"
		},
		size: {
			sm: "p-4",
			md: "p-6"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "sm"
	}
})

const navLinkIconVariant = tv({
	base: "",
	variants: {
		iconVariant: {
			primary: "stroke-green-100",
			secundary: "stroke-white"
		}
	}
})

interface NavLinkProps extends
	VariantProps<typeof navLinkVariants>,
	VariantProps<typeof navLinkIconVariant>,
	React.ComponentProps<"button"> {
	link?: string
	icon?: React.FC<React.ComponentProps<"svg">>;
	children: React.ReactNode
}

export default function NavLink({
	link,
	icon,
	variant,
	iconVariant,
	size,
	className,
	children,
	...props
}: NavLinkProps) {
	return (
		<button className={navLinkVariants({ variant, size, className })} {...props}>
			{icon &&
				<Icon
					svg={icon}
					className={navLinkIconVariant({ iconVariant })}
				/>}
			{children}
		</button>
	)
}