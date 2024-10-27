import { Component } from '../base/Component';
import { IEvents } from '../base/events';
import { ensureElement } from '../../utils/utils';


interface IModalData {
	content: HTMLElement;
}

export class Modal extends Component<IModalData> {
	protected _closeButton: HTMLButtonElement;
	protected _content: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);
	}

	set content(value: HTMLElement) {
		this._content.replaceChildren(value);
	}

	open() {
	}

	close() {
	}

	render(data: IModalData): HTMLElement {
	}
}