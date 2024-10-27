import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement, createElement, formatNumber } from '../../utils/utils';
import { ICard } from '../Card';


interface IBasketView {
	items: HTMLElement[];
	total: number;
	selected: string[];
}

export class Basket extends Component<IBasketView> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLElement;

	constructor(container: HTMLElement, protected events: EventEmitter) {
		super(container);

		this._list = ensureElement<HTMLElement>('.basket__list', this.container);
		this._total = this.container.querySelector('.basket__price');
		this._button = this.container.querySelector('.basket__button');

		if (this._button)
			this._button.addEventListener('click', () => events.emit('order:open'));

		this.items = [];
	}

	set items(items: HTMLElement[]) {
	}

	set selected(items: ICard[]) {
	}

	set total(total: number) {
	}
}