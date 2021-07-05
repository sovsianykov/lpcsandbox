export interface IReportsItem {
    id: string;
    title: string;
    onClick(id: string): void;
}