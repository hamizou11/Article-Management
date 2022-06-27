import { Component ,OnInit,EventEmitter} from '@angular/core';
import { FormGroup ,FormBuilder, FormControl} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArticleModel } from './article.module';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dev-test';
  articledata !: any;
  article: ArticleModel = new ArticleModel ();
  formValue !: FormGroup;
  LoadedFeature = 'add';
 

  
  constructor( private formBuilder : FormBuilder,private api :ApiService  ) {}
  

  

  registerForm= new FormGroup({
    
    
  });
  ngOnInit():void {
    this.formValue = this.formBuilder.group({
      title :[''],
      author :[''],
      category :[''],
      date :['']
    
    
    })
    this.getAllArtical();
  
    }
    onNavigate(feature :string){
      this.LoadedFeature = feature;

     }

    onSubmit (){
      this.article.title = this.formValue.value.title;
      this.article.author = this.formValue.value.author;
      this.article.category = this.formValue.value.category;
      this.article.date = this.formValue.value.date;
      this.api.post(this.article).subscribe(res=> {console.log(res); alert("Article added")});
      this.getAllArtical();
      



     
      
      }
   getAllArtical(){

this.api.get().subscribe(res=>{
   this.articledata =res;
})
 
  }

   
    }
 

 
 

