import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public selectedColor?: string;

  constructor(
    private colorService: ColorService,
  ) {
      colorService.colorState.subscribe((res) => {
        this.selectedColor = res;
      });

    }

  ngOnInit(): void {
  }

  selectColor(color: string): void {
    this.colorService.changeColorState(color);
  }


}
