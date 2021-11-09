import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {
  AbstractControl,
  AbstractControlOptions,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
  } from '@angular/forms';

  // function priceCompare(c: AbstractControl): ValidationErrors | null{
  //   let low = c.get('low');
  //   let high = c.get('high');

  //   if(low.value > high.value) {
  //     return { 'match': true};
  //   }

  //   return null;
  // }
function minLessThanMaxValidator(
  group: AbstractControl
): ValidationErrors | null {
  const minPrice = group.get('minPrice');
  const maxPrice = group.get('maxPrice');

  if (minPrice && maxPrice) {
    return minPrice <= maxPrice ? null : { minLessThanMax: true };
  } else {
    return null;
  }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  filterForm: FormGroup;
  categoryCheckbox: FormGroup;
  priceForm: FormGroup;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      categories: ['', [Validators.required]],
      price: this.fb.group({
        low: [null, Validators.min(0), Validators.maxLength(3) ],
        high:  [null, Validators.max(9999), Validators.maxLength(4)]
      }, {validators: this.priceCompare}),
      rating: ['', null]
    })


    // this.categoryCheckbox = this.fb.group({
    //   priceRange: ['', Validators.]
    // })

    // this.priceForm = this.fb.group({
    //   lowPrice: [null, Validators.min(0), Validators.maxLength(3) ],
    //   highPrice: [null, Validators.max(9999), Validators.maxLength(4)]
    // })
  }
  priceCompare(c: AbstractControl): ValidationErrors | null{
    let low = c.get('low');
    let high = c.get('high');

    if(low.value > high.value) {
      return { 'match': true};
    }

    return null;
  }
}
