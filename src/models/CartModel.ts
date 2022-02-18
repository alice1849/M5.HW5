import { makeAutoObservable } from "mobx"
import { Product } from './Product';


export class Cart {
    products = [] as Product[] ;
    fullPrice = 0;

    constructor() {
        makeAutoObservable(this);
        
    }

    public addProduct(item: Product) {
        this.products.push(item);
        this.fullPrice += item.price
    }

    reset() {
        this.products = [];
        this.fullPrice = 0;
    }
}