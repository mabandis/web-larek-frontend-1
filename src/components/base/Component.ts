export abstract class Component<T> {
	protected constructor(protected readonly container: HTMLElement) {}

    // Переклатель класса
	toggleClass(element: HTMLElement, className: string, force?: boolean) {
	}

    // Установить текстовое содержимое
	protected setText(element: HTMLElement, value: unknown) {
	}

    // Сменить статус блокировки
	setDisabled(element: HTMLElement, state: boolean) {
	}

    // Скрыть
	protected setHidden(element: HTMLElement) {
	}

	// Показать
	protected setVisible(element: HTMLElement) {
	}

	// Установить изображение с алтернативным текстом
	protected setImage(element: HTMLImageElement, src: string, alt?: string) {
	}

	// Вернуть корневой DOM-элемент
	render(data?: Partial<T>): HTMLElement {
    }
}