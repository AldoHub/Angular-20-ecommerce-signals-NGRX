import { CartItem } from "./cartItem";

export type Order = {
    id: string;
    user: string | null;
    items: CartItem[];
    total: number;
    paymentStatus: 'success' | 'pending' | 'failed';
}