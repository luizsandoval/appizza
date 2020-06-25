export default interface Order {
    id?: number;
    user_id: number;
    total: number;
    created_at: Date;
}
