import { Component } from '@angular/core';
import { MdIconModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
