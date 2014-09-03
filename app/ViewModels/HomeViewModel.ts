/// <reference path="../lib/Fayde/Fayde.d.ts" />

import FantasyTeam = require("../Models/FantasyTeam");
import DemoDataProvider = require("../Services/DemoDataProvider");

class HomeViewModel extends Fayde.MVVM.ViewModelBase {
    FantasyTeams: FantasyTeam[];

    constructor() {
        super();
        this.Load();
    }
    Load() {
        this.FantasyTeams = DemoDataProvider.FantasyTeams();
    }
}
export = HomeViewModel;