import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
