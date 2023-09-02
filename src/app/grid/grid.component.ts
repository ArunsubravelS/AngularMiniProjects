import { Component, Input,OnInit,OnChanges} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit,OnChanges {
@Input() gridDataList:any;
@Input() gridColumnList:any;
@Input() gridConfigList:any;
constructor(){}
ngOnInit():void{
}
ngOnChanges():void{
console.log(this.gridColumnList)
}
}
