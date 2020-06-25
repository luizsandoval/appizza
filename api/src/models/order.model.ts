export default interface Order {
    id: number;
    user_id: number;
    total: number;
    pizza_ids: number[];
    created_at: Date;
}
