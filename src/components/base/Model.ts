import { IEvents } from './events';


// Проверка на модель //
export const isModel = (obj: unknown): obj is Model<any> => {
	return obj instanceof Model;
};

// Начальная модель, чтобы можно было отличить её от простых объектов с данными //
export abstract class Model<T> {
	constructor(data: Partial<T>, protected events: IEvents) {
		Object.assign(this, data);
	}

	// Сообщение о смене модели //
	emitChanges(event: string, payload?: object) {
		this.events.emit(event, payload ?? {});
	}
}