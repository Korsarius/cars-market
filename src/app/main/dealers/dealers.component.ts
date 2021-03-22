import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IDealer } from './IDealer';
import { DealersService } from './dealers.service';
import { AddDealerDialogComponent } from '../../shared/components/add-dealer-dialog/add-dealer-dialog.component';

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

  constructor(
    private dealerService: DealersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dealerService.getDealers().subscribe((dealers) => {
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

  openDialog(): void {
    this.dialog.open(AddDealerDialogComponent);
  }

  deleteDealer(dealer: IDealer): void {
    this.dealerService.deleteDealer(dealer).subscribe();
    this.updateTable();
  }
}
