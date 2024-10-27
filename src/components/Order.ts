import { Form } from './common/Form';
import { IOrderForm } from '../types';
import { IEvents } from './base/events';
import { ensureAllElements } from '../utils/utils';


export class Order extends Form<IOrderForm> {
	protected _paymentButton: HTMLButtonElement[];

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);
	}

	set address(value: string) {
	}

	set email(value: string) {

	set phone(value: string) {
	}

	selected(name: string) {
}