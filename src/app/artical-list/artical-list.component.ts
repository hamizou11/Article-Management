import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../article.module';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute ,Router} from '@angular/router'; 
import { filter } from 'rxjs';

@Component({
  selector: 'app-artical-list',
  templateUrl: './artical-list.component.html',
  styleUrls: ['./artical-list.component.css']
})
export class ArticalListComponent implements OnInit{
  articledata !: any;
  article: ArticleModel = new ArticleModel();
  constructor (private api :ApiService,private route :ActivatedRoute ,private router: Router){
  
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





}
