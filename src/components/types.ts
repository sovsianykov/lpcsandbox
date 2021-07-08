export interface IItem {
    id: string;
    title: string;
    foo(id: string): void;
    activeId?: string ;
}
export interface ITabItem {
    id: string;
    title: string;
    foo(id: string): void;
    activeId?: string ;
}

export interface IRepHeader {
    title: string;
    date: any;
    numberOfAccounts: number;
}