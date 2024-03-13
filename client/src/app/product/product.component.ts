import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CoreService } from '../core/core.service';
import { DtoService } from '../core/dto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productsList: Product[] = [];
  newProduct: Product = {} as Product;
  isRequired: boolean = false;

  constructor(private core: CoreService, private dto: DtoService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.dto
      .getProducts(this.core.company?.companyId!)
      .subscribe((products) => {
        this.products = products;
        this.productsList = products;
      });
  }

  search($event: any) {
    console.log($event);
    const term = $event.target.value;
    console.log(term);
    this.products = this.productsList.filter((product) =>
      product.productName.includes(term)
    );
  }

  addNewProduct() {
    console.log('clicked');
    if (!!this.newProduct.productName && !!this.newProduct.price) {
      const productDto = {
        ...this.newProduct,
        companyId: this.core.company?.companyId!,
      };
      console.log(productDto);
      this.dto.createProduct(productDto).subscribe(() => {
        this.fetchProducts();
        this.newProduct = {} as Product;
      });
    } else {
      this.isRequired = true;
    }
  }
}
