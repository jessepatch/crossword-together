import { Injectable } from '@angular/core';
import { Puzzle } from '../dbo/puzzle';

@Injectable({
  providedIn: 'root'
})
export class SoloCrosswordService {

  puzzle: Puzzle;

  constructor() { }

  getPuzzle() {

  }
}
