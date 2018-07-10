import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styles: [],
})
export class AddressFormComponent implements OnInit {
  @Input() addressFormGroup: FormGroup

  constructor() {}

  ngOnInit() {}
}
