import { Component, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styles: [],
})
export class TestComponentComponent implements OnInit {
  sections: any[] = Array(5)

  openPanel: BehaviorSubject<number[]>

  constructor() {
    this.openPanel = new BehaviorSubject<number[]>([0])
  }

  ngOnInit() {}

  toggle(index: number) {
    if (this.openPanel.value.includes(index)) {
      this.openPanel.next(this.openPanel.value.filter(i => i != index))
    } else {
      const newOpenPages = this.openPanel.value
      newOpenPages.push(index)
      this.openPanel.next(newOpenPages)
    }
  }
}
