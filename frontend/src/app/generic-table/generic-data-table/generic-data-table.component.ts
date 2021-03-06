import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

// export interface ITableColumn {
//   title: string;
//   key: string;
// }

@Component({
  selector: 'generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss']
})
export class GenericDataTableComponent<T extends {[x: string]: any}> implements OnInit {

  @Input() list: T[] = [];
  @Input() columns: ITableColumn[] = [];
  @Input() entity: string = '';
  @Input() filterKeys: string[][] = [];
  @Input() filterKey: string = '';

  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteOne: EventEmitter<T> = new EventEmitter<T>();

  phrase: string = '';

  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;

  columnHead: string = '';
  direction: boolean = false;
  sortColumn: string = '';

  get pageList(): number[] {
    const pageSize = Math.ceil( this.list.length / this.pageSize );
    return new Array(pageSize).fill(1).map( (item, index) => index + 1 );
  }

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }

  onDelete(entity: T): void {
    this.deleteOne.emit(entity);
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }

  onColumnSelect(columnHead: string): void {
    this.sortColumn = columnHead;
    this.direction = !this.direction;
  }
}
