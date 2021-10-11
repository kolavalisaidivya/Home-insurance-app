import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  prev()
  {
    this.router.navigate(['prev']);
  }
  next()
  {
    this.router.navigate(['next']);

  }

}
