import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: '<p>Items: {{data.counter}}</p>',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppCounterComponent {
    @Input() data;
}
