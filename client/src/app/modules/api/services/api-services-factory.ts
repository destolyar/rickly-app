import { SingletonProvider } from "../../shared/services/singleton-provider";
import { ICoinsService } from "../interfaces/coins-service";
import { CoinsService } from "./coins-service";

export class ApiServicesFactory {
	public static getCoinsService(): ICoinsService {
		return SingletonProvider.getInstance(CoinsService);
	}
}