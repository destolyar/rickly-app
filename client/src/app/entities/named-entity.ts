export class NamedEntity<TKey = number, TName = string> {
    public id: TKey;
    public name: TName;

    constructor(id: TKey, name: TName) {
        this.id = id;
        this.name = name;
    }
}
