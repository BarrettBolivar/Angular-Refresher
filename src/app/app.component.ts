import { Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	// ...
} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('openClose', [
			// ...
			state('open', style({
				backgroundColor: 'yellow',
				padding: '15px'
			})),
			state('closed', style({
				backgroundColor: 'green'
			})),
			transition('open => closed', [
				animate('1s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
		]),
	],
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Playground';
	isOpen = false;
	toggle() {
		this.isOpen = !this.isOpen;
	}
}
