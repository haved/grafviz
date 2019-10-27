import { MenubarButton, GraphVizUI } from './ui-model';

class State {
  
}

export class GraphVizController {
  // This is the data given to the vue components
  ui_model!: GraphVizUI;

  //State is the data that makes up the visualisation
  //An executing algorithm is not part of state
  //The state knows what data structure it is, which controlls what algorithms are avaliable
  //What panels are open is not controlled by state
  current_state: State = new State();
  undo_states: State[] = [];
  redo_states: State[] = [];

  executing: boolean = false;
  running_speed: number = 0; //0 is paused, 1 is playing, above is fast

  /**
   * By the time this is called, the ui_model is set up, and is using us for all events
   * This is effectivly our main entry point.
   */
  init_on_ui_model(ui_model:GraphVizUI) {
    this.ui_model = ui_model;
    this.on_state_change();
    this.update_menubar_buttons();
  }

  on_state_change() {

  }

  update_menubar_buttons() {
    const btns = this.ui_model.menubar.buttons_list;
    btns[MenubarButton.Undo].enabled = this.undo_states.length!=0;
    btns[MenubarButton.Redo].enabled = this.redo_states.length!=0; //While executing the redo stack will be emptied

    //Hide the execution specific buttons
    for(let id = MenubarButton.Pause; id <= MenubarButton.Cancel; id++)
      btns[id].hidden = !this.executing;

    //Show what speed is active
    if(this.executing) {
      //
    }
  }

  stop_execution() {
    if(!this.executing)
      return;
    this.executing = false;
  }

  undo() {
    this.stop_execution();
    if(this.undo_states.length)
      this.set_state(this.undo_states.pop())
    this.update_menubar_buttons();
  }
}