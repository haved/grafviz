import { CanvasController } from './canvas-controller';

export class GraphType {
  index: number;
  title: string;
  constructor(index:number, title: string) {
    this.index = index;
    this.title = title;
  }
}

let i = 0;
const BLANK_GRAPH_TYPE = new GraphType(i++, "Graphviz");
const TREEP = new GraphType(i++, "Treep");
const MAXFLOW = new GraphType(i++, "Maxflow");
const BINTREE = new GraphType(i++, "Binary search tree");
const RBTREE = new GraphType(i++, "Red black tree");

const graph_types = [TREEP, MAXFLOW, BINTREE, RBTREE];

export class State {
  type: GraphType;
  executing: boolean=false;
  running_speed: number=0;

  constructor(type: GraphType) {
    this.type = type;
  }
}

export class GraphViz {
  private _state: State;
  private undo_states: State[] = [];
  private redo_states: State[] = [];

  canvas_controller!: CanvasController;

  constructor() {
    this._state = new State(BLANK_GRAPH_TYPE);
  }

  start(canvas:HTMLDivElement) {
    this.canvas_controller = new CanvasController(canvas);
    this.update();
  }

  update() {
    requestAnimationFrame(this.update.bind(this));
  }

  get state():State { return this._state; }
  set state(state:State) {
    this._state = state;
  }
  get type():GraphType { return this.state.type; }
  get types():GraphType[] { return graph_types; }

  set_graph_type(type:GraphType) {
    this.undo_states.push(this.state);
    this.state = new State(type);
  }

  get is_executing():boolean { return this.state.executing; }
  get running_speed():number { return this.state.running_speed; }

  get can_undo():boolean { return this.undo_states.length != 0;}
  undo() {
    if(this.undo_states.length) {
      this.redo_states.push(this.state);
      this.state = this.undo_states.pop()!;
    }
  }

  get can_redo():boolean {return this.redo_states.length != 0;}
  redo() {
    if(this.redo_states.length) {
      this.undo_states.push(this.state);
      this.state = this.redo_states.pop()!;
    }
  }

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