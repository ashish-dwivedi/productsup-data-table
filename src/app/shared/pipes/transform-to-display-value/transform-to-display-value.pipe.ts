import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformToDisplayValue',
})
export class TransformToDisplayValuePipe implements PipeTransform {
  transform(value: string = '', charactersToReplace: string[] = ['_']): string {
    const regex = new RegExp(`[${charactersToReplace.join('')}]`, 'gim');
    return value?.replace(regex, ' ') || value;
  }
}
