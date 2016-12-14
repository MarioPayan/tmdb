import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  person = "";
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.person =  this.route.params['id'];
  }

}
