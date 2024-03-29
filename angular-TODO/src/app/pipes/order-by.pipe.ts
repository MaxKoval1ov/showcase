import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';



@Pipe({
  name: "orderBy"
 })
 export class OrderByPipe implements PipeTransform {
  transform(array: any, sortBy: string, order?: boolean): any[] {
   const sortOrder = order ? 'desc' : 'asc';
 
   return orderBy(array, [sortBy], [sortOrder]);
   }
 }
