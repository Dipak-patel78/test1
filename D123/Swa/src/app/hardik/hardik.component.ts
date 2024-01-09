import { Component, Input } from '@angular/core';

@Component({
  selector: 'hardik',
  templateUrl: './hardik.component.html',
  styleUrls: ['./hardik.component.css']
})
export class HardikComponent {
 @Input()text!: string;
  @Input() wordLimit!: number;
  showMore: boolean;

  constructor() {
    this.showMore = false;
  }
  ngOnInit(): void {

  }

}
