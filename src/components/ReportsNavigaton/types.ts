export interface IItem {
    id: string;
    title: string;
    onClick(id: string): void;
    activeId?: string ;
}