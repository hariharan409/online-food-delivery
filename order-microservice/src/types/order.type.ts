

export interface OrderType {
    order_id: string;
    customer_id: string;
    restaurant_id: string;
    address_id: string;
    order_status: 'CREATED' | 'CONFIRMED' | 'CANCELLED' | 'FAILED' | 'DELIVERED';
    order_total: number;
    tax_amount: number;
    delivery_fee: number;
    payment_status?: string;
}