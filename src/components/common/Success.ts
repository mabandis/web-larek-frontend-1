import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';


interface ISuccess {
	total: number;
}

interface ISuccessActions {
	onClick: () => void;
}

export class Success extends Component<ISuccess> {
	protected _total: HTMLElement;
	protected _close: HTMLElement;

	constructor(container: HTMLElement, actions: ISuccessActions) {
		super(container);
	}

	set total(total: string) {
	}
}