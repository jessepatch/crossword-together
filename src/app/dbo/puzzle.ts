export class Puzzle {
    lines: Array<Line>;
    acrossClues: Array<Clues>;
    downClues: Array<Clues>;
    size: number;
}

export class Line {
    words: Array<string>;

}

export class Clues {
    direction: string;
    clues: Array<string>;
}


// line: {"stow", "-", "-", "abba", "-", "ajar"};
