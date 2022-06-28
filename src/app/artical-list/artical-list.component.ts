import { Component, OnInit,Inject } from '@angular/core';
import { ArticleModel } from '../article.module';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute ,Router} from '@angular/router'; 
import { filter } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
 

@Component({
  selector: 'app-artical-list',
  templateUrl: './artical-list.component.html',
  styleUrls: ['./artical-list.component.css']
})
export class ArticalListComponent implements OnInit{
  articledata !: any;
  article: ArticleModel = new ArticleModel();
  constructor (private api :ApiService,private route :ActivatedRoute ,private router: Router,private dialog : MatDialog){}
  
 
  openDialog() {
    this.dialog.open(DialogComponent, {
     
      width :'30%'
    });
  }

  ngOnInit(): void {

    
  
    this.getAllArtical();

  
    
  }
  getAllArtical(){

    this.api.get().subscribe(res=>{
      this.articledata =res;
   })
    
  
}

deleteArtical(row :any){
  this.api.delete(row.id).subscribe(res=>{
    alert("Article Deleted");
    this.getAllArtical();
  })
  
   
    }
   
  
  searchText :string='';
  onSearchTextEntered(searchValue:string){
    this.searchText= searchValue;
    console.log(this.searchText);
  
  }
  editArtical(row :any){
   this.dialog.open(DialogComponent, {
     
    width :'30%',
    data :row
  })
   
  }





}
