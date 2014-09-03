/// <reference path="../lib/Fayde/Fayde.d.ts" />
import FantasyTeam = require("../Models/FantasyTeam");
import DemoDataProvider = require("../Services/DemoDataProvider");

class FantasyTeamViewModel extends Fayde.MVVM.ViewModelBase {
    TeamId: number;
    Team: FantasyTeam;

    constructor(teamId: number) {
        super();
        this.Load(teamId);
    }

    Load(teamId: number) {
        this.TeamId = teamId;
        this.Team = DemoDataProvider.FantasyTeamById(teamId);
    }
}
export = FantasyTeamViewModel;