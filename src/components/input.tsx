import { useRef, useState } from "react"
import type { InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import cv from "classnames"
import ButtonIcon from "./icon-button"
import CloudArrowUp from "../assets/icons/CloudArrowUp.svg?react"

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
}

export default function Input({
	id,
	variant,
	size,
	label,
	className,
	...props
}: InputProps) {
	const isFile = props.type === "file"

	const fileRef = useRef<HTMLInputElement>(null)
	const [fileName, setFileName] = useState("Nome do arquivo.pdf")

	if (isFile) {
		const handleOpenFile = () => {
			fileRef.current?.click()
		}

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0]
			if (file) setFileName(file.name)
		}

		return (
			<div className={cv("flex gap-2 flex-col focus-within:text-green-100", className)}>
				{label && (
					<label htmlFor={id} className="text-sm transition">
						{label}
					</label>
				)}

				<div
					className={cv(
						inputVariants({ variant, size }),
						"justify-between overflow-hidden pr-0! w-full"
					)}
				>
					<span className="truncate">
						{fileName}
					</span>

					<ButtonIcon
						type="button"
						onClick={handleOpenFile}
						icon={CloudArrowUp}
						iconVariant="primary"
						className="self-stretch rounded-l-none"
					/>

					<input
						ref={fileRef}
						type="file"
						className="hidden"
						onChange={handleChange}
						{...props}
					/>
				</div>
			</div>
		)
	}

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
		</div>
	)
}