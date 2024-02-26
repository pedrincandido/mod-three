import { FiniteStateMachine } from "./FiniteStateMachine";
import { State } from "./state.type";
import { BinarySymbol } from "./symbol.type";

const modThreeTransitionFunction = (state: State, input: BinarySymbol): State => {
  const transitionTable: Record<State, Record<BinarySymbol, State>> = {
    S0: { "0": "S0", "1": "S1" },
    S1: { "0": "S2", "1": "S0" },
    S2: { "0": "S1", "1": "S2" },
  };
  return transitionTable[state][input];
};

const createModThreeFSM = (): FiniteStateMachine => {
  const states: State[] = ["S0", "S1", "S2"];
  const alphabet: BinarySymbol[] = ["0", "1"];
  const initialState: State = "S0";
  const finalStates: State[] = ["S0", "S1", "S2"];

  return new FiniteStateMachine(states, alphabet, initialState, finalStates, modThreeTransitionFunction);
};

export const modThree = (inputString: string): number => {
  const fsm = createModThreeFSM();
  const finalState = fsm.processInput(inputString);

  const outputMapping: Record<State, number> = { S0: 0, S1: 1, S2: 2 };
  return outputMapping[finalState];
};
