import { CanvasController } from './canvas-controller';
import { GraphType, GRAPH_TYPES, DEFAULT_GRAPH_TYPE } from './graphtype';
import { State } from './state';

const MAX_UNDO_HISTORY = 100;

export class GraphViz {
  private _state: State;
  private _undo_states: State[] = [];
  private _redo_states: State[] = [];

  canvas_controller!: CanvasController;

  constructor() {
    this._state = State.default_for_type(DEFAULT_GRAPH_TYPE);
  }

  start(canvas:HTMLDivElement) {
    this.canvas_controller = new CanvasController(canvas, this);
    this.update();
  }

  update() {
    this.canvas_controller.update();
    requestAnimationFrame(this.update.bind(this));
  }

  get state() { return this._state; }
  set state(state: State) { this._state = state; }
  push_state_to_undo() {
    this._undo_states.push(this.state.deepcopy());
    while(this._undo_states.length > MAX_UNDO_HISTORY)
      this._undo_states.shift();
    this._redo_states = [];
  }

  get type():GraphType { return this.state.type; }
  get types():GraphType[] { return GRAPH_TYPES; }
  set_graph_type(type:GraphType) {
    this.push_state_to_undo();
    this.state = State.default_for_type(type);
  }

  get can_undo():boolean { return this._undo_states.length != 0;}
  undo() {
    if(this._undo_states.length) {
      this._redo_states.push(this.state);
      this.state = this._undo_states.pop()!;
    }
  }

  get can_redo():boolean {return this._redo_states.length != 0;}
  redo() {
    if(this._redo_states.length) {
      this._undo_states.push(this.state);
      this.state = this._redo_states.pop()!;
    }
  }

  get is_executing():boolean { return this.state.executing; }
  get running_speed():number { return this.state.running_speed; }

  pause() {
    this.state.running_speed = 0;
  }

  step() {
    this.pause();
  }

  play() {
    this.state.running_speed = 1;
  }

  faster() {
    this.state.running_speed = Math.max(2, this.running_speed+1);
  }
}