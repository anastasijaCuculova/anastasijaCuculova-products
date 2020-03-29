import { SafeStyle } from '@angular/platform-browser';

export class ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: SafeStyle;
    quantity: number;

    constructor() { }

    public createProductObject(product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
        this.quantity = product.quantity;
        return this;
    }
}