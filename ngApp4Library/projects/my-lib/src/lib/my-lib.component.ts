import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-my-lib',
  template: `
<form  method="post">
  <div >
    <label for = "username"> <b> Username: </b> </label>
    <input type = "text" placeholder = "Enter Username here" name = "username" style = "margin:10px;" required>
  <br/>
    <label for = "passwd"> <b> Password: </b> </label>
    <input type = "password" placeholder = "Enter Password here" name = "passwd" style = "margin:10px;" required>
  <br/>
     <button type = "submit"> Login </button>
</div>
</form>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}