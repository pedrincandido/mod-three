import { State } from "./state.type";
import { BinarySymbol } from "./symbol.type";

type TransitionFunction = (currentState: State, symbol: BinarySymbol) => State;

export class FiniteStateMachine {
  states: State[];
  alphabet: BinarySymbol[];
  currentState: State;
  finalStates: State[];
  transitionFunction: TransitionFunction;

  constructor(
    states: State[],
    alphabet: BinarySymbol[],
    initialState: State,
    finalStates: State[],
    transitionFunction: TransitionFunction
  ) {
    this.states = states;
    this.alphabet = alphabet;
    this.currentState = initialState;
    this.finalStates = finalStates;
    this.transitionFunction = transitionFunction;
  }

  transition(symbol: BinarySymbol) {
    if (!this.alphabet.includes(symbol)) {
      throw new Error(`Symbol '${symbol}' not in the alphabet.`);
    }
    this.currentState = this.transitionFunction(this.currentState, symbol);
  }

  processInput(inputString: string) {
    for (const symbol of inputString) {
      const inputSymbol = symbol as BinarySymbol;
      if (!this.alphabet.includes(inputSymbol)) {
        throw new Error(`Invalid symbol '${symbol}' in input string.`);
      }
      this.transition(inputSymbol);
    }
    return this.currentState;
  }
}
