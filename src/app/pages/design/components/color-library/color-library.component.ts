import { COLORS_LIST } from './../../constants/COLORS_LIST';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DOMAIN_LIST } from '../../constants/DOMAIN_LIST';

@Component({
  selector: 'app-color-library',
  templateUrl: './color-library.component.html',
  styleUrls: ['./color-library.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorLibraryComponent implements OnInit {

   // City Names
   City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
   public domainList: any = DOMAIN_LIST;
   public colorsList: any = COLORS_LIST;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
