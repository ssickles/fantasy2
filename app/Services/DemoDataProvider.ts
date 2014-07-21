/// <reference path="../lib/lodash/dist/lodash.d.ts" />
import FantasyTeam = require("../Models/FantasyTeam");

class DemoDataProvider {
    static FantasyTeams(): FantasyTeam[]{
        var ft = ["Braves", "Rangers", "Athletics", "Diamondbacks", "White Sox", "Marlins", "Cardinal Nation",
            "Wadmalaw Gnats (DC)", "Twins", "Toronto Blue Jays", "RedSox", "Seattle Mariners", "Pirates",
            "Giants", "Baltimore Orioles", "CUBS", "Mets", "Evil Empire(Dodgers)", "Big Red Machine", "Tampa Rays"];
        return _.map(ft, function(n) { return new FantasyTeam(n); });
    }
}
export = DemoDataProvider;
