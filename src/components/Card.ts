import { IProductItem } from '../types';
import { Component } from './base/Component';


interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export interface ICard extends IProductItem {
	basketId?: string;
	button: string;
}

export class Card extends Component<ICard> {
	protected _basketId: HTMLElement;
	protected _category: HTMLElement;
	protected _title: HTMLElement;
	protected _image: HTMLImageElement;
	protected _description: HTMLElement;
	protected _button: HTMLButtonElement;
	protected _price: HTMLElement;

	constructor(container: HTMLElement, actions?: ICardActions) {
		super(container);

		this._basketId = container.querySelector('.basket__item-index');
		this._category = container.querySelector('.card__category');
		this._title = container.querySelector('.card__title');
		this._image = container.querySelector('.card__image');
		this._description = container.querySelector(`.card__text`);
		this._button = container.querySelector(`.card__button`);
		this._price = container.querySelector('.card__price');

		if (actions.onClick) {
			if (this._button) this._button.addEventListener('click', actions.onClick);
			else container.addEventListener('click', actions.onClick);
		}
	}

	set id(value: string) {
		this.container.dataset.id = value;
	}

	get id(): string {
		return this.container.dataset.id || '';
	}

	set basketId(value: string) {
		this._basketId.textContent = value;
	}

	get basketId(): string {
		return this._basketId.textContent || '';
	}

	categoryColor(value: string): string {
	}

	set category(value: string) {
	}

	get category(): string {
	}

	set title(value: string) {
	}

	get title(): string {
	}

	set image(value: string) {
	}

	set description(value: string | string[]) {
	}

	set button(value: string) {
	}

	set price(value: number | null) {
	}

	get price(): number {
	}
}