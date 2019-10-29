import { CanvasController } from './canvas-controller';

class State {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class GraphViz {
  private _current_state: State;
  private undo_states: State[] = [new State("Ollabolla -2"), new State("Heipådei -1")];
  private redo_states: State[] = [new State("Whaatt? Furure 2"), new State("Future 1")];

  private _executing: boolean;
  private _running_speed: number;

  canvas_controller!: CanvasController;

  constructor() {
    this._current_state = new State("Graphviz 0");
    this._executing = true;
    this._running_speed = 0;
  }

  start(canvas:HTMLDivElement) {
    this.canvas_controller = new CanvasController(canvas);
    this.update();
  }

  update() {
    requestAnimationFrame(this.update.bind(this));
  }

  stop_execution() {
    this._executing = false;
  }

  get current_state():State { return this._current_state; }
  get is_running():boolean { return this._executing; }
  get running_speed():number { return this._running_speed; }

  get can_undo():boolean { return this.undo_states.length != 0;}
  undo() {
    this.stop_execution();
    if(this.undo_states.length) {
      this.redo_states.push(this.current_state);
      this._current_state = this.undo_states.pop()!;
    }
  }

  get can_redo():boolean {return this.redo_states.length != 0;}
  redo() {
    this.stop_execution();
    if(this.redo_states.length) {
      this.undo_states.push(this.current_state);
      this._current_state = this.redo_states.pop()!;
    }
  }

  pause() {
    this._running_speed = 0;
  }

  step() {
    this.pause();
  }

  play() {
    this._running_speed = 1;
  }

  faster() {
    this._running_speed = Math.max(2, this.running_speed+1);
  }
}