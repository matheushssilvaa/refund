import React from "react"
import type { InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import cv from "classnames"

const inputVariants = tv({
	base: "rounded-lg border px-4 border-gray-300 outline-0 text-[14px] flex items-center",
	variants: {
		variant: {
			default: "focus-within:border-green-100"
		},
		size: {
			md: "h-[48px]"
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
	error?: React.ReactNode
}

export default function Input({
	id,
	variant,
	size,
	label,
	error,
	className,
	...props
}: InputProps) {
	return (
		<div className={cv("flex gap-2 flex-col focus-within:text-green-100", className)}>
			{label && (
				<label htmlFor={id} className="text-sm transition">
					{label}
				</label>
			)}

			<input
				type={props.type ?? "text"}
				className={inputVariants({ variant, size })}
				{...props}
			/>

			{error && (
				<p className="text-sm text-red-600">
					{error}
				</p>
			)}
		</div>
	)
}