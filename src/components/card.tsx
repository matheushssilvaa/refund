import type React from "react"

interface CardProps extends React.HtmlHTMLAttributes<"div"> {
	children?: React.ReactNode
}

export default function Card({ children }: CardProps) {
	return (
		<div className="bg-gray-500 p-10 rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
			{children}
		</div>
	)
}