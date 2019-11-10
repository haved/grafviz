import GraphType from './graphtypes/graphtype';

export default class State {
  type: GraphType;
  executing: boolean=false;
  running_speed: number=0;

  globals: object;
  nodes: object[];

  private constructor(type: GraphType, copy?: State) {
    this.type = type;
    if(copy) {
      this.executing = copy.executing;
      this.running_speed = copy.running_speed;
      this.globals = JSON.parse(JSON.stringify(copy.globals));
      this.nodes = JSON.parse(JSON.stringify(copy.nodes));
    } else {
      const {globals, nodes} = type.make_defaults();
      this.globals = globals;
      this.nodes = nodes;
    }
  }

  deepcopy():State {
    return new State(this.type, this);
  }

  static default_for_type(type:GraphType):State {
    return new State(type);
  }
}
