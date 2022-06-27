import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup ,FormBuilder, FormControl} from '@angular/forms';
import { ArticleModel } from '../article.module';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-artical-add',
  templateUrl: './artical-add.component.html',
  styleUrls: ['./artical-add.component.css']
})
export class ArticalAddComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>; 
  articledata !: any;
  article: ArticleModel = new ArticleModel ();
  formValue !: FormGroup;
  constructor( private formBuilder : FormBuilder ,private api :ApiService){  };
  

  

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title :[''],
      author :[''],
      category :[''],
      date :['']
    
    
    })
    }

  onSubmit (){
    this.article.title = this.formValue.value.title;
    this.article.author = this.formValue.value.author;
    this.article.category = this.formValue.value.category;
    this.article.date = this.formValue.value.date;
    this.api.post(this.article).subscribe(res=> {console.log(res); alert("Article added")});
    }
    
   onSelect(feature :string) {
  this.featureSelected.emit(feature);
}

}
