
export class MenubarUI {
    current_structure_name: string;
    constructor(structure_name: string) {
        this.current_structure_name = structure_name;
    }
}

export class SidebarPanelUI {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

export class SidebarUI {
    panels: SidebarPanelUI[];
    guide_text?: string;
    constructor() {
        this.panels = [
            new SidebarPanelUI("Node type"),
            new SidebarPanelUI("Globals"),
            new SidebarPanelUI("Algorithms")]
        this.guide_text = undefined;
    }
}

/**
 * This class is passed as a prop through the vue components that make up the UI
 * The internal structure is based on the vue component hierarchy, not the most sensible model
 * I'm not sure this is what the Vue creators intended
 */
export class GraphVizUI {
    menubar: MenubarUI;
    sidebar: SidebarUI;
    constructor() {
        this.menubar = new MenubarUI("Graphviz");
        this.sidebar = new SidebarUI();
    }
}
  