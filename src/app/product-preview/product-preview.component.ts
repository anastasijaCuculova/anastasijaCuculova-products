import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { SanitizerService } from '../services/sanitizer.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent {

  @Input() product: ProductModel;

  constructor(private sanitizerService: SanitizerService) { }

  getSafeStyleImageUrl(imageUrl) {
    return this.sanitizerService.getSafeStyleImageUrl(imageUrl);
  }
}
