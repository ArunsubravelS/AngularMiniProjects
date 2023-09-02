import { Component,OnInit,EventEmitter,OnChanges} from '@angular/core';

@Component({
  selector: 'app-movie-generic-form',
  templateUrl: './movie-generic-form.component.html',
  styleUrls: ['./movie-generic-form.component.css']
})
export class MovieGenericFormComponent implements OnInit,OnChanges {

movieFromEvent:any=new EventEmitter();
constructor(){}
ngOnInit():void{
}
ngOnChanges():void{

}
public formSubmit(movieForm:any){
  console.log(movieForm);
  this.movieFromEvent.emit(this.movieFromEvent.value);
}
}
