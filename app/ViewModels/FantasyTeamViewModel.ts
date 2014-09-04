/// <reference path="../lib/Fayde/Fayde.d.ts" />
import FantasyTeam = require("../Models/FantasyTeam");
import DemoDataProvider = require("../Services/DemoDataProvider");
import Player = require("../Models/Player");

class FantasyTeamViewModel extends Fayde.MVVM.ViewModelBase {
    TeamId: number;
    Team: FantasyTeam;
    Players: Player[];

    constructor(teamId: number) {
        super();
        this.Load(teamId);
    }

    Load(teamId: number) {
        this.TeamId = teamId;
        this.Team = DemoDataProvider.FantasyTeamById(teamId);
        this.Players = DemoDataProvider.FantasyTeamPlayers(teamId);
    }
}
export = FantasyTeamViewModel;