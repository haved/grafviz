import { MenubarButton, toggle, GraphVizUI } from './ui-model';
import { CanvasController } from './canvas-controller';

class State {
  
}

export class GraphVizController {
  // This is the data given to the vue components
  ui_model!: GraphVizUI;

  //State is the data that makes up the visualisation
  //An executing algorithm is not part of state, but operates on current_state
  //The state knows what data structure it is, which controlls what algorithms are avaliable etc.
  //What panels are open is not controlled by state
  current_state: State = new State();
  undo_states: State[] = [];
  redo_states: State[] = [];

  executing: boolean = false;
  running_speed: number = 0; //0 is paused, 1 is playing, above is faster

  canvas_controller!: CanvasController;

  //The ui_model is given as data to Vue, and is how we update the view
  init_on_ui_model(ui_model:GraphVizUI) {
    this.ui_model = ui_model;
    this.executing = true;
    this.show_state_change();
    this.update_menubar_buttons();
  }

  init_canvas(canvas:HTMLDivElement) {
    this.canvas_controller = new CanvasController(canvas);
    this.update();
  }

  update() {
    requestAnimationFrame(this.update.bind(this));
  }

  show_state_change() {

  }

  update_menubar_buttons() {
    const btns = this.ui_model.menubar.buttons_list;
    btns[MenubarButton.Undo].enabled = this.undo_states.length!=0;
    btns[MenubarButton.Redo].enabled = this.redo_states.length!=0;

    //Hide the execution specific buttons
    for(let id = MenubarButton.Pause; id <= MenubarButton.Faster; id++)
      btns[id].hidden = !this.executing;

    //Show what speed is active
    if(this.executing) {
      btns[MenubarButton.Pause].toggled = toggle(this.running_speed == 0);
      btns[MenubarButton.StepForward].toggled = toggle(false);
      btns[MenubarButton.Play].toggled = toggle(this.running_speed == 1);
      btns[MenubarButton.Faster].toggled = toggle(this.running_speed > 1);
    }
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
      this.show_state_change();
    }
    this.update_menubar_buttons();
  }

  redo() {
    this.stop_execution();
    if(this.redo_states.length) {
      this.undo_states.push(this.current_state);
      this.current_state = this.redo_states.pop()!;
      this.show_state_change();
    }
    this.update_menubar_buttons();
  }

  pause() {
    this.running_speed = 0;
    this.update_menubar_buttons();
  }

  step() {
    this.pause();
  }

  play() {
    this.running_speed = 1;
    this.update_menubar_buttons();
  }

  faster() {
    this.running_speed = Math.max(2, this.running_speed+1);
    this.update_menubar_buttons();
  }

  on_menubutton_clicked(id:MenubarButton) {
    switch(id){
      case MenubarButton.Undo: this.undo(); break;
      case MenubarButton.Redo: this.redo(); break;
      case MenubarButton.Pause: this.pause(); break;
      case MenubarButton.StepForward: this.step(); break;
      case MenubarButton.Play: this.play(); break;
      case MenubarButton.Faster: this.faster(); break;
      default: break;
    }
  }
}