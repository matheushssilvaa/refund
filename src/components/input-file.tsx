import React, { useCallback, useRef, useState, type InputHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import cv from "classnames"
import ButtonIcon from "./icon-button"
import CloudArrowUp from "../assets/icons/CloudArrowUp.svg?react"
import { useWatch } from "react-hook-form"

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
	form: any
	allowedExtensions: string[]
	maxFileSizeInMB: number;
}

export default function InputFIle({
	id,
	variant,
	size,
	className,
	label,
	error,
	form,
	maxFileSizeInMB,
	allowedExtensions,
	...props
}: InputProps) {

	const fileRef = useRef<HTMLInputElement>(null)
	const [fileName, setFileName] = useState("Nome do arquivo.pdf")

	const handleOpenFile = () => {
		fileRef.current?.click()
	}

	// Extrai o ref do register antes de espalhar props
	const { ref: registerRef,
		onChange: registerOnChange,
		...restProps } = props as any

	const mergedRef = useCallback(
		(node: HTMLInputElement | null) => {
			fileRef.current = node
			if (typeof registerRef === "function") {
				registerRef(node)
			} else if (registerRef) {
				registerRef.current = node
			}
		},
		[registerRef]
	)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) setFileName(file.name)
		registerOnChange?.(e)
	}

	const formValues = useWatch({ control: form.control });
	const name = props.name || "";
	const formFile: File = React.useMemo(
		() => formValues[name]?.[0],
		[formValues, name]
	);

	const { fileExtension, fileSize } = React.useMemo(
		() => ({
			fileExtension: formFile?.name?.split(".")?.pop()?.toLowerCase() || "",
			fileSize: formFile?.size || 0,
		}),
		[formFile]
	);

	function isValidExtension() {
		return allowedExtensions.includes(fileExtension);
	}

	function isValidSize() {
		return fileSize <= maxFileSizeInMB * 1024 * 1024;
	}

	function isValidFile() {
		return isValidExtension() && isValidSize();
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
					ref={mergedRef}
					type="file"
					className="hidden"
					onChange={handleChange}
					{...restProps}
				/>
			</div>

			<div className="flex flex-col gap-1 mt-1">
				{formFile && !isValidExtension() &&
					<p className="text-sm text-red-600">
						Tipo de arquivo inválido
					</p>
				}

				{formFile && !isValidSize() &&
					<p className="text-sm text-red-600">
						O tamanho do arquivo ultrapassa o máximo
					</p>
				}

				{error && (
					<p className="text-sm text-red-600">
						{error}
					</p>
				)}
			</div>
		</div>
	)
}