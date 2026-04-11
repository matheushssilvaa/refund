import { type VariantProps, tv } from "tailwind-variants";
import React from "react";

export const containerVariants = tv({
	base: "mx-auto",
	variants: {
		size: {
			md: "max-w-[74.0625rem]",
			xl: "max-w-[62rem]"
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface ContainerProps
	extends VariantProps<typeof containerVariants>,
	React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
	as = "div",
	children,
	className,
	size,
	...props
}: ContainerProps) {
	return React.createElement(
		as,
		{
			className: containerVariants({ size, className }),
			...props,
		},
		children
	);
}