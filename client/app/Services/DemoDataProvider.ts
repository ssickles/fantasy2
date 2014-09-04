/// <reference path="../../typings/lodash/lodash.d.ts" />
import FantasyTeam = require("../Models/FantasyTeam");
import Player = require("../Models/Player");

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

    static FantasyTeamPlayers(id: number): Player[] {
        var _p = ["Johnny Gomes", "Wilson Ramos", "Joe Mauer", "Marcus Semien", "Adam Duvall", "Grant Green", "Miguel Cabrera",
        "Jose Reyes", "Starling Marte", "Shin Soo Choo", "Curis Granderson", "Marcell Ozuna", "Christian Yelich", "Kole Calhoun",
        "Prince Fielder", "Mason Williams", "Clint Frazier", "Colin Moran", "Felix Hernandez", "Jose Fernandez", "Hector Santiago",
        "Kenley Jansen", "Mark Melancon", "Joe Nathan", "Jordan Walden", "Jerome Williams", "J.A. Happ", "Justin Masterson",
        "Joakim Soria", "Brett Anderson", "Josh Beckett", "Kris Medlen", "Daniel Hudson", "Andrew Heaney", "Justin Nicolino"];
        return _.map(_p, function(n, i) { return new Player(i, n); });
    }
}
export = DemoDataProvider;
