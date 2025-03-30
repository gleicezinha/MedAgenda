export interface ICrudForm<T> {
    registro: T;
    save(): void;
}