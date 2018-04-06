import { Component, OnInit } from '@angular/core';
import { UserRegistration, GeoPoint } from '../user-registration';
import { UserRegistrationService } from '../user-registration.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  geoPoint = new GeoPoint(0, 0);
  user = new UserRegistration('', '', '', '', false, this.geoPoint);

  constructor(
    private userRegistrationService: UserRegistrationService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userRegistrationService.addUser(this.user)
      .subscribe(user => {
        console.log(user);
        this.toastr.success(`User registered successfully with id: ${user.id}`, `Success`);
      }, error => {
        console.info(error);
        this.toastr.error(`${error.error.message}`, `Failure`)
      });
  }

}
