export interface IStockInformationData {
    symbol: string;
    lastRefreshed: Date;
    lastData: IStockData;
    previousData: IStockData;
}

export interface IStockData {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}