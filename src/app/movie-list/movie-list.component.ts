import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit ,OnChanges{
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  columnDefs: ColDef[] = [
    { field: 'movieName' },
    { field: 'Actorname' },
    { field: 'ActerssName' },
    { field: 'Rating' }
];

public movieDataList:any=[];
@Input() public movieObj:any;
ngOnChanges(){
 
  console.log(this.movieObj);
  this.movieDataList.push(this.movieObj)
  this.movieDataList=[...this.movieDataList]

}
ngOnInit():void{
}
ngOnchanges(){
  console.log(this.movieObj);
  this.movieDataList.push(this.movieObj)

}
}
