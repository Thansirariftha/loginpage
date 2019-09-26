
import { Component, OnInit } from '@angular/core';
	
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



 form: FormGroup;;
 submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
   this.form = formBuilder.group({
     name: ['', Validators.required],
  //  password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
   });
   }

  ngOnInit() {
  }
  submit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.success = true;

}
}