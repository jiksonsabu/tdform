import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data:any;
  submit(data:any){
    console.log(data);
}

}
