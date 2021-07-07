export interface IItem {
    id: string;
    title: string;
    foo(id: string): void;
    activeId?: string ;
}