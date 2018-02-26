import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: '<p>Items: {{data.counter}}</p>'
})

export class AppCounterComponent {
    @Input() data;
}
