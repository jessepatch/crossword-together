import { Component, OnInit } from '@angular/core';
import { Line, Puzzle } from '../dbo/puzzle';

@Component({
  selector: 'app-solo-crossword',
  templateUrl: './solo-crossword.component.html',
  styleUrls: ['./solo-crossword.component.css']
})
export class SoloCrosswordComponent implements OnInit {

  puzzle: Puzzle;

  constructor() {

   }

  ngOnInit() {
    let puzzle = new Puzzle();
    let lines = new Array<Line>();
    let line1 = new Line();
    let line2 = new Line();
    let line3 = new Line();
    let line4 = new Line();
    let line5 = new Line();
    let words1 = ['-', '-', 'moo'];
    let words2 = ['-', '-', 'amp'];
    let words3 = ['aegis'];
    let words4 = ['flit', '-'];
    let words5 = ['tic', '-', '-'];
    line1.words = words1;
    line2.words = words2;
    line3.words = words3;
    line4.words = words4;
    line5.words = words5;
    lines = [line1, line2, line3, line4, line5];
    puzzle.lines = lines;
  }

  checkWord() {

  }

  solveWord() {

  }

  checkPuzzle() {

  }

  solvePuzzle() {

  }

  setPuzzle(puzzle: Puzzle) {
    this.puzzle = puzzle;
  }
}
