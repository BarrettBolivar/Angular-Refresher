import {trigger, transition, query, style, group, animate, animateChild} from '@angular/animations';

// doesn't work
export const slideInAnimation =
	console.log('trigger');
  	trigger('routeAnimations', [
		
		transition('dashboard <=> detail', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%'
			})
		]),
		query(':enter', [
			style({ left: '-100%'})
		]),
		query(':leave', animateChild()),
		group([
			query(':leave', [
			animate('300ms ease-out', style({ left: '100%'}))
			]),
			query(':enter', [
			animate('300ms ease-out', style({ left: '0%'}))
			])
		]),
		query(':enter', animateChild()),
		]),
		transition('* <=> *', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%'
			})
		]),
		query(':enter', [
			style({ left: '-100%'})
		]),
		query(':leave', animateChild()),
		group([
			query(':leave', [
			animate('200ms ease-out', style({ left: '100%'}))
			]),
			query(':enter', [
			animate('300ms ease-out', style({ left: '0%'}))
			])
		]),
	query(':enter', animateChild()),
	])
  ]);