import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  name: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', },
  { name: 'Helium', },
  { name: 'Lithium', },
  { name: 'Beryllium', },
  { name: 'Boron', },
  { name: 'Carbon', },
  { name: 'Nitrogen', },

];
@Component({
  selector: 'app-mat-check-boxes',
  templateUrl: './mat-check-boxes.component.html',
  styleUrls: ['./mat-check-boxes.component.css']
})
export class MatCheckBoxesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }




  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.name));
  }
}




