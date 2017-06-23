import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projtypfilter'
})
export class ProjtypfilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.category.indexOf(filter.category) !== -1);
  }

}
