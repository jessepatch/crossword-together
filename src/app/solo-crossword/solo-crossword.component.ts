import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../dbo/puzzle';

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
  }

  checkWord() {

  }

  solveWord() {
    
  }

  checkPuzzle() {

  }

  solvePuzzle() {

  }
}
