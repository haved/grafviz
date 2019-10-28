import { CanvasController } from './canvas-controller';

class State {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class GraphViz {
  current_state: State;
  undo_states: State[] = [new State("Ollabolla -2"), new State("Heipådei -1")];
  redo_states: State[] = [new State("Whaatt? Furure 2"), new State("Future 1")];

  executing: boolean;
  running_speed: number;

  canvas_controller!: CanvasController;

  constructor() {
    this.current_state = new State("Graphviz 0");
    this.executing = false;
    this.running_speed = 0;
  }

  start(canvas:HTMLDivElement) {
    this.canvas_controller = new CanvasController(canvas);
    this.update();
  }

  update() {
    requestAnimationFrame(this.update.bind(this));
  }

  stop_execution() {
    if(!this.executing)
      return;
    this.executing = false;
  }

  undo() {
    this.stop_execution();
    if(this.undo_states.length) {
      this.redo_states.push(this.current_state);
      this.current_state = this.undo_states.pop()!;
    }
  }

  redo() {
    this.stop_execution();
    if(this.redo_states.length) {
      this.undo_states.push(this.current_state);
      this.current_state = this.redo_states.pop()!;
    }
  }

  pause() {
    this.running_speed = 0;
  }

  step() {
    this.pause();
  }

  play() {
    this.running_speed = 1;
  }

  faster() {
    this.running_speed = Math.max(2, this.running_speed+1);
  }
}