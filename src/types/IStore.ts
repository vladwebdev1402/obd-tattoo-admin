export default interface IStore<T> {
    data: T[];
    isLoadingComplete: boolean;
    error: string;
}