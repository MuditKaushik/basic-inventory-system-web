export interface IProduct {
    name: string;
    description: string;
    price: string;
    image: string;
}

export interface IUserProduct extends IProduct {
    id: string;
    userid: string;
}
