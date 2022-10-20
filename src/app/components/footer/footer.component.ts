import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public selectedColor?: string;

  constructor(    private colorService: ColorService,
    ) {
      colorService.colorState.subscribe((res) => {
        this.selectedColor = res;
      });
    }

  ngOnInit(): void {
  }

}
