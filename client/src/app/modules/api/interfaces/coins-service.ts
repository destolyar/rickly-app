export interface ICoinsService {
	getAllCoins(): object;
	getCoinById(id: string): object;
}