import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formValue !: FormGroup;
  actionBtn :string ="Edit";

  constructor(private dialog : MatDialog,private api :ApiService,private formbuilder:FormBuilder,
    private dialogRef :MatDialogRef<DialogComponent>
       ,@Inject (MAT_DIALOG_DATA) public editData :any 
      ) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
     
      width :'30%'
    })
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      title :[''],
      author :[''],
      category :[''],
      date :['']
    
    
    })
    if(this.editData)  {
      this.actionBtn="Update";
      this.formValue.controls['title'].setValue(this.editData.title);
      this.formValue.controls['author'].setValue(this.editData.author);
      this.formValue.controls['category'].setValue(this.editData.category);
      this.formValue.controls['date'].setValue(this.editData.date);
    }
  }
addArtical(){ 
  if(!this.editData){if(this.formValue.valid){ } 
}else{this.updateArtical() }
}
updateArtical(){
  this.api.put(this.formValue.value,this.editData.id)
  .subscribe({
    next:(res)=>{alert("Artical updated");
    this.formValue.reset();
    this.dialogRef.close('Updated');
  } })
}



}
