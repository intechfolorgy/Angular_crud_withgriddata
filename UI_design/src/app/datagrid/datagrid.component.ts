import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AgentService } from '../agent.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogboxeditComponent } from '../dialogboxedit/dialogboxedit.component';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'action'];
  public dataSource: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: AgentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.GridData();
  }
  GridData() {
    this.service.fetchAllemp().subscribe((result: any) => {
      if (result) {
        this.dataSource = new MatTableDataSource<any>(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogboxeditComponent, {
      data: data
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

//   delete(data: any) {
//   if (data && data._id) {
//     this.service.delete(data._id).subscribe(
//       () => {
//         // Success: No need to use the result parameter here
//         alert("Deleted successfully");
//         this.GridData();
//       },
//       (error) => {
//         console.error("Error deleting:", error);
//         alert("An error occurred while deleting");
//       }
//     );
//   } else {
//     console.log("Invalid data or ID");
//     alert("Invalid data or ID");
//   }
// }


  delete(data: any) {
    console.log(data.id);
    this.service.delete(data.id).subscribe((result) => {
      console.log(result);
      if (result) {
        alert("deleted successfull");
        this.GridData();
      } else {
        alert("cant deleted")
      }
    })
  }



}
