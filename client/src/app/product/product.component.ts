import { Component } from '@angular/core';
import { Product } from '../model/product';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [
    {
      productId: 1,
      companyId: 2,
      productName: 'string',
      price: 123,
      category: 'string',
      description: 'string',
      productImage: 'string',
    },
  ];
  newProduct: Product = {} as Product;
  isRequired: boolean = false;
  constructor(private core: CoreService) {}
  fetchProducts() {}
  addNewProduct() {
    if (!!this.newProduct.productName && !!this.newProduct.price) {
      const productDto = {
        ...this.newProduct,
        companyId: this.core.company?.companyId!,
      };
      console.log('dto', productDto);
    } else {
      this.isRequired = true;
    }
  }
}
