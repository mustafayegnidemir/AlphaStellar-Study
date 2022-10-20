import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from '../../services/color.service';
import { Title } from '@angular/platform-browser';
import { ColorModel } from 'src/app/models/color-model';

@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.css'],
})
export class FlexPageComponent implements OnInit {

  // This source was used for color names:
  // https://chir.ag/projects/name-that-color/#FFFFF7
  public menuItems = [
    new ColorModel({ text: 'Pizazz', value: '#FB8C00' }),
    new ColorModel({ text: 'Yellow Orange', value: '#FFBD45' }),
    new ColorModel({ text: 'Rose of Sharon', value: '#C25E00' }),
    new ColorModel({ text: 'Roman Coffee', value: '#795548' }),
  ];

  form = new FormGroup({
    textFormField1: new FormControl('', [Validators.required]),
    textFormField2: new FormControl('', [Validators.required]),
    textFormField3: new FormControl('', [Validators.required]),
    textFormField4: new FormControl('', [Validators.required]),
  });

  public selectedColor?: string;




  constructor(     private router: Router,
    private colorService: ColorService,
    ) {
      colorService.colorState.subscribe((res) => {
        this.selectedColor = res;
      });
    }



  ngOnInit(): void {}

  public get isFormEmpty(): boolean {
    return Object.values(this.form.value).every((v) => v === '' || v === null);
  }

  submit(): void {
    this.router.navigate(['grid-page']).then();
  }

  reset(): void {
    this.form.reset();
  }

  selectColor(color: string): void {
    this.colorService.changeColorState(color);
  }

}
