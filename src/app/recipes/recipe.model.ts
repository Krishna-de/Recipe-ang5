export class Recipe {
    public name: string;
    public desccrption: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.desccrption = desc;
        this.imagePath = imagePath;
    }
}