import { debounceTime, delay } from 'rxjs/operators';

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IDealer } from './IDealer';
import { DealersService } from './dealers.service';
import { DealerDialogComponent } from '../../shared/components/dealer-dialog/dealer-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss'],
})
export class DealersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'name',
    'amountOfCars',
    'headquarters',
    'country',
    'foundedIn',
    'edit',
    'delete',
  ];
  dataSource: MatTableDataSource<IDealer>;
  dealers: IDealer[];

  dialogValue: IDealer;
  loaded: boolean = false;

  constructor(
    private dealerService: DealersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dealerService.getDealers().pipe(delay(1000)).subscribe((dealers) => {
      this.loaded = true;
      this.dealers = dealers;
      this.dataSource = new MatTableDataSource(this.dealers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  updateTable(): void {
    // Assign the new data to the data source for the table to render
    this.dealerService.getDealers().subscribe((dealers) => {
      this.dealers = dealers;
      this.dataSource = new MatTableDataSource(this.dealers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilter(): void {
    this.dataSource.filter = '';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(dealer: IDealer | null = null): void {
    const dialogRef = this.dialog.open(DealerDialogComponent, {
      data: { dealer },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogValue = result.data;
        result.data.newRecord
          ? this.dealerService.addDealer(this.dialogValue).subscribe()
          : this.dealerService.updateDealer(this.dialogValue).subscribe();
        this.updateTable();
      }
    });
  }

  openConfirmDialog(dealer: IDealer): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((isDelete) => {
      if (isDelete) {
        this.dealerService.deleteDealer(dealer).subscribe();
        this.updateTable();
      }
    });
  }
}
