export type CharacterStructure = {
    isAlive: boolean;
    serie: string;
    name: string;
    family: string;
    age: number;
    imageSource: string;
    message: string;
    emoji: string;
    id: string;
    isSpeak: boolean;
};

export class Character implements CharacterStructure {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    public id: string;
    public isSpeak: boolean;

    constructor(
        public name: string,
        public family: string,
        public age: number,
        public isAlive: boolean = true,
        public message: string = '',
        public imageSource: string,
        public serie: string = 'Game of Thrones',
        public emoji: string = ''
    ) {
        this.id = Character.generateId();
        this.isSpeak = false;
    }
}
