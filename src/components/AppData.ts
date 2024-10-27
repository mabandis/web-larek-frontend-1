import { ICard } from './Card';
import { Model } from './base/Model';
import { IAppState, IOrderForm, FormErrors } from '../types';


export type CatalogChangeEvent = {
	catalog: ICard[];
};

export class AppState extends Model<IAppState> {
	basket: ICard[] = [];
	catalog: ICard[];
	loading: boolean;
	order: IOrderForm = {
		payment: '',
		address: '',
		email: '',
		phone: '',
		total: 0,
		items: [],
	};
	preview: string | null;
	formErrors: FormErrors = {};

	addToBasket(item: ICard) {
	}

	removeFromBasket(item: ICard) {
	}

	clearBasket() {
	}

	getTotal() {
	}

	setCatalog(items: ICard[]) {
	}

	setPreview(item: ICard) {
	}

	validateOrderForm() {
	}

	setOrderField(field: keyof IOrderForm, value: string | number) {
	}
}