import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchPipe } from 'src/pipes/search.pipe';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { SanitizerService } from '../services/sanitizer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [SearchPipe],
})
export class ProductsComponent implements OnInit {

  products$: Observable<any> = new Observable();
  products: Array<ProductModel> = new Array<ProductModel>();
  filteredProducts: Array<ProductModel> = new Array<ProductModel>();
  searchTerm: string = '';

  constructor(private productService: ProductService, private searchPipe: SearchPipe, private sanitizerService: SanitizerService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
    this.products$.subscribe(products => {
      products.forEach(product => {
        let productModel = new ProductModel();
        this.products.push(productModel.createProductObject(product));
      });
      this.filteredProducts = this.products;
    })
  }

  onSearch() {
    this.filteredProducts = this.searchPipe.transform(
      this.products,
      this.searchTerm,
      'name'
    );
  }

  getSafeStyleImageUrl(imageUrl) {
    return this.sanitizerService.getSafeStyleImageUrl(imageUrl);
  }
}
