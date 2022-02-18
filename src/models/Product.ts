
export class Product{
    id: number;
    name: string;
    price: number;
    picture: string;

    constructor(id: number, name: string, price: number, picture: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.picture = picture;
  }
}