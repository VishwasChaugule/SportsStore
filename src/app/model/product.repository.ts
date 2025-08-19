import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private catagories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        this.dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.catagories = data.map(p => p.catagory ?? "(None)")
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(catagory?: string) : Product[] {
        return this.products
            .filter(p => catagory == undefined || catagory == p.catagory);
    }
    
    getProduct(id: number) : Product | undefined {
        return this.products.find(p=> p.id == id);
    }

    getCatagories(): string[] {
        return this.catagories;
    }
}