import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

@NgModule({
  declarations: [DataTableComponent, TableFilterComponent],
  imports: [CommonModule, DataTableRoutingModule, SharedModule],
})
export class DataTableModule {}
