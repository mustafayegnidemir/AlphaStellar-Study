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
    new ColorModel({ text: 'Alpine', value: '#AF8F2C' }),
    new ColorModel({ text: 'Affair', value: '#714693' }),
    new ColorModel({ text: 'Amazon', value: '#3B7A57' }),
    new ColorModel({ text: 'Amaranth', value: '#E52B50' }),
  ];


  //public menuItems = ['blue', 'red', 'green', 'whitesmoke', 'black', 'purple', 'yellow', 'brown', 'cyan', 'gray', 'orange'];
  form = new FormGroup({
    textFormField1: new FormControl('', [Validators.required]),
    textFormField2: new FormControl('', [Validators.required]),
    textFormField3: new FormControl('', [Validators.required]),
    textFormField4: new FormControl('', [Validators.required]),
  });
  public selectedColor?: string;

  constructor(
    private router: Router,
    private colorService: ColorService,
    private titleService: Title
  ) {
    // titleService.setTitle('One');
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
