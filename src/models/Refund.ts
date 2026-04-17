import type { Receipt } from "./Receipt";

export interface Refund {
	id: string;
	title: string;
	category: string;
	value: number;
	deletedAt: string | null;
	createdAt: string;
	updatedAt: string;
	receipt: Receipt;
}