import { z } from "zod"

export const formRefundSchema = z.object({
	title: z.string().min(1, { message: "O nome da solicitação é obrigatório" }),
	category: z.enum(["food", "hosting", "transport", "services", "other"],
		{ message: "A categoria é obrigatória" }),
	value: z.string().min(1, { message: "O valor é obrigatório" }),
	receiptFile: z.instanceof(FileList)
		.refine((file) => file.length > 0, { message: "O campo de comprovante é obrigatório" })
})

export type FormRefundSchema = z.infer<typeof formRefundSchema>