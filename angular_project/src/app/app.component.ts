import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  indices: number[] = Array.from(Array(16).keys());
  hoverRow: number | null = null;
  hoverCol: number | null = null;

  hover(row: number, col: number) {
    this.hoverRow = row;
    this.hoverCol = col;
  }

  leave(row: number, col: number) {
    if (this.hoverRow == row && this.hoverCol == col) {
      this.hoverRow = this.hoverCol = null;
    }
  }

  distClassToHover(row: number, col: number): string[] {
    if (this.hoverRow == null || this.hoverCol == null) return [];
    let dist = Math.abs(this.hoverCol - col) + Math.abs(this.hoverRow - row);
    if (dist > 4) return [];
    return [`dist-${dist}`];
  }
}
