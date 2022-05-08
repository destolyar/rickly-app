type Constructor = new (...args: unknown[]) => {};

export class SingletonProvider {
	public static registerInstance<T extends Constructor>(ctor: T): void {
		ctor.prototype.getInstance = () => {
			if (!ctor.prototype.instance) {
				ctor.prototype.instance = new ctor();
			}
			return ctor.prototype.instance;
		};
	}

	public static getInstance<T extends Constructor>(ctor: T) {
		if (ctor.prototype.getInstance) {
			return ctor.prototype.getInstance();
		} else {
			throw new Error('Such class is not provided. Use SingletonProvider.registerInstance(Constructor) to provide');
		}
	}
}