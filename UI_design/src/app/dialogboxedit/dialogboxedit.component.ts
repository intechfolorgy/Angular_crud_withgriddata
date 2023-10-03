import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgentService } from '../agent.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dialogboxedit',
  templateUrl: './dialogboxedit.component.html',
  styleUrls: ['./dialogboxedit.component.scss']
})
export class DialogboxeditComponent implements OnInit {
  formGroup!:NgForm;
  result: any;
  params: any;
  ngForm: any;
  // constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }
  // editData: any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service:AgentService){
    // console.log(this.data);

    this.ngForm = this.data;
    console.log(this.ngForm);

  }


  // Update() {
  //   if (this.ngForm && this.ngForm._id) {
  //     const updatedData = { ...this.ngForm }; // Clone the form data
  //     delete updatedData._id; // Remove _id property if present (assuming you don't want to update the ID)
  
  //     // Make an HTTP PUT request to update data in the server
  //     this.service.update(`http://localhost:3000/users/${this.ngForm._id}`, updatedData).subscribe(
  //       (res: any) => {
  //         if (res) {
  //           alert("Successfully updated");
  //         } else {
  //           console.log("Update failed");
  //         }
  //       },
  //       // (error) => {
  //       //   console.error("Error updating:", error);
  //       //   alert("An error occurred while updating");
  //       // }
  //     );
  //   } else {
  //     console.log("Invalid form data or ID");
  //     alert("Invalid form data or ID");
  //   }
  // }

  

  Update() {
    if(this.ngForm){
      console.log(this.ngForm ,this.ngForm.id);
      this.service.update(this.ngForm.id, this.ngForm).subscribe((res: any)=>{
        console.log(res);
        if (res) {
          alert("successfully update")
        }else{
          console.log("Can't deleted");
        }
       
      })
    }
    }



    

  // Updated() {
  //   console.log(this.editData._id , this.editData);
  //   this.service.update(this.editData._id, this.editData).subscribe((data: any) => {
  //     console.log(data);
  //     alert("succesfully")
  //   })
  // }

}
