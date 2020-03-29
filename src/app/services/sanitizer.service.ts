import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class SanitizerService {

    constructor(private sanitize: DomSanitizer) { }

     getSafeStyleImageUrl(imageUrl) {
        return this.sanitize.bypassSecurityTrustStyle(
            'url(' + imageUrl + ')'
        );
    }
}