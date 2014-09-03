/// <reference path="../../typings/lodash/lodash.d.ts" />
import FantasyTeam = require("../Models/FantasyTeam");

class DemoDataProvider {
    static _ft = ["Braves", "Rangers", "Athletics", "Diamondbacks", "White Sox", "Marlins", "Cardinal Nation",
        "Wadmalaw Gnats (DC)", "Twins", "Toronto Blue Jays", "RedSox", "Seattle Mariners", "Pirates",
        "Giants", "Baltimore Orioles", "CUBS", "Mets", "Evil Empire(Dodgers)", "Big Red Machine", "Tampa Rays"];
    static FantasyTeams(): FantasyTeam[] {
        return _.map(DemoDataProvider._ft, function(n, i) { return new FantasyTeam(i, n); });
    }
    static FantasyTeamById(id: number): FantasyTeam {
        return new FantasyTeam(id, DemoDataProvider._ft[id]);
    }
}
export = DemoDataProvider;
