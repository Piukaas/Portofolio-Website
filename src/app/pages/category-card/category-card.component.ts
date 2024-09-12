import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
  @Input() title!: string;
  @Input() images!: string[];
  @Input() projectCount!: number;
  @Input() icon!: string;
}
