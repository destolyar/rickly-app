import { SingletonProvider } from "../../shared/services/singleton-provider";
import { ICoinsService } from "../interfaces/coins-service";

export class CoinsService implements ICoinsService {
	getAllCoins(): object {
		return { jopa: 'popa' };
	}
	getCoinById(id: string): object {
		throw new Error("Method not implemented.");
	}
}
SingletonProvider.registerInstance(CoinsService);