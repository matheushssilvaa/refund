import type React from "react"
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";

const navLinkVariants = tv({
	base: "h-[48px] flex items-center gap-[7px] text-[14px]",
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

interface NavLinkProps extends
	VariantProps<typeof navLinkVariants> {
	link: string
	icon?: React.FC<React.ComponentProps<"svg">>;
	children: React.ReactNode
}

export default function NavLink({
	link,
	icon,
	variant,
	size,
	children
}: NavLinkProps) {
	return (
		<a href={link} className={navLinkVariants({ variant, size })}>
			{icon &&
				<Icon
					svg={icon}
				/>}
			{children}
		</a>
	)
}