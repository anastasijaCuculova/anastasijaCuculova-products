import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchText: string, searchKey: string = 'name'): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it[searchKey].toLowerCase().includes(searchText);
        });
    }
}