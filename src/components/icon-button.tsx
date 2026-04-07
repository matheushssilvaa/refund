import React from "react";
import Icon from "./icon";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonIconVariants = tv({
	base: "flex justify-center cursor-pointer h-[48px] items-center font-bold text-[14px] transition text-white rounded-lg",
	variants: {
		variant: {
			default: "bg-green-100 hover:bg-green-200"
		},
		size: {
			md: "w-[48px] h-[48px]",
			sm: "w-[32px] h-[32px]"
		},
		disabled: {
			true: "opacity-50 pointer-events-none",
		},
		handling: {
			true: "pointer-events-none",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
		disabled: false,
		handling: false,
	},
});

export const buttonIconIconVariants = tv({
	base: "cursor-pointer",
	variants: {
		iconVariant: {
			primary: "fill-white",
			secondary: "fill-white",
			ghost: "fill-white",
		},
		size: {
			md: "w-[20px] h-[20px]",
			sm: "w-[18px] h-[18px]",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

interface ButtonIconProps
	extends VariantProps<typeof buttonIconVariants>,
	VariantProps<typeof buttonIconIconVariants>,
	Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	handling?: boolean;
}

export default function ButtonIcon({
	variant,
	iconVariant,
	size,
	disabled,
	className,
	icon,
	handling,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({
				variant,
				size,
				disabled,
				className,
				handling,
			})}
			{...props}
		>
			<Icon
				svg={icon}
				animate={handling}
				className={buttonIconIconVariants({ iconVariant, size })}
			/>
		</button>
	);
}