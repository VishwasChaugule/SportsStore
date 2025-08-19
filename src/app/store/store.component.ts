import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    constructor(private productRepository: ProductRepository) {}

    getProducts(): Product[] {
        return this.productRepository.getProducts();
    }

    getCatagories(): string[] {
        return this.productRepository.getCatagories();
    }
}