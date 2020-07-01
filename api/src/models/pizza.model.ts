export default interface Pizza {
    id?: number;
    createdAt?: Date;
    active?: boolean;
    description?: string;
    name: string;
    ingredients: string;
    price: number;
    image: string;
}
