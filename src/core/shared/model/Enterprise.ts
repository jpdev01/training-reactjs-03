export default class Enterprise{
    name: string;

    constructor(options: {name: string}){
        this.name = options.name;
    }

    public getName(): string{
        return this.name;
    }
}