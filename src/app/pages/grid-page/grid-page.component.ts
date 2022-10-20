import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ColorService} from '../../services/color.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css']
})
export class GridPageComponent implements OnInit {
  public menuItems = ['blue', 'red', 'green', 'whitesmoke', 'black', 'purple', 'yellow', 'brown', 'cyan', 'gray', 'orange'];
  form = new FormGroup({
    textFormField1: new FormControl('', [Validators.required]),
    textFormField2: new FormControl('', [Validators.required]),
    textFormField3: new FormControl('', [Validators.required]),
    textFormField4: new FormControl('', [Validators.required])
  });
  public selectedColor?: string;

  constructor(private router: Router, private colorService: ColorService, private titleService: Title) {
    // titleService.setTitle('Twoooo');
    colorService.colorState.subscribe(res => {
      this.selectedColor = res;
    });
  }

  ngOnInit(): void {
  }

  public get isFormEmpty(): boolean {
    return Object.values(this.form.value).every(v => v === '' || v === null);
  }

  submit(): void {
    this.router.navigate(['page-one']).then();
  }

  reset(): void {
    this.form.reset();
  }

  selectColor(color: string): void {
    this.colorService.changeColorState(color);
  }

}
