import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private SERVER_URL = "http://localhost:3000";
	constructor(private httpClient: HttpClient) { }

	public getAllProducts() {
		return this.httpClient.get(`${this.SERVER_URL}/products`);
	}

	public getProductById(id: number) {
		return this.httpClient.get(`${this.SERVER_URL}/products/${id}`);
	}
}