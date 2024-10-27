import { IProductItem, IOrderForm, IOrderResult } from '../types';
import { Api,  } from './base/api';


export interface ILarekAPI {
	getProductItem: () => Promise<IProductItem[]>;
	order: (order: IOrderForm) => Promise<IOrderResult>;
}

export class LarekAPI extends Api implements ILarekAPI {
	readonly cdn: string;

	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
	}

	getProductItem(): Promise<IProductItem[]> {
	}

	order(order: IOrderForm): Promise<IOrderResult> {
	}
}