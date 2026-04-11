import type React from "react"
import cv from "classnames"

interface CardProps extends React.HtmlHTMLAttributes<"div"> {
	children?: React.ReactNode
}

export default function Card({ children, className }: CardProps) {
	return (
		<div className={cv("bg-gray-500 p-10 rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]", className)}>
			{children}
		</div>
	)
}