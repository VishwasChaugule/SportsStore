import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    selectedCatagory: string | undefined;
    productsPerPage = 4;
    selectedPage = 1;

    constructor(private productRepository: ProductRepository) {}

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository.getProducts(this.selectedCatagory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get catagories(): string[] {
        return this.productRepository.getCatagories();
    }

    changeCatagory(newCatagory?: string) {
        this.selectedCatagory = newCatagory;
        this.selectedPage = 1;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){
        this.productsPerPage = Number(newSize);
        if (!this.pageNumbers.includes(this.selectedPage)) {
            this.selectedPage = 1;
        }
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCatagory).length/this.productsPerPage))
            .fill(0).map((x,i) => i + 1);
    }
}