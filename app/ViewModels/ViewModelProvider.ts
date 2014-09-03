/// <reference path="../lib/Fayde/Fayde.d.ts" />
import FantasyTeamViewModel = require("../ViewModels/FantasyTeamViewModel");
import HomeViewModel = require("../ViewModels/HomeViewModel");

class ViewModelProvider implements Fayde.MVVM.IViewModelProvider {
    ResolveViewModel(route: Fayde.Navigation.Route): any {
        switch(route.View.toString()) {
            case "Views/FantasyTeam.fayde":
                return new FantasyTeamViewModel(+route.HashParams["id"]);
                break;
            case "Views/Home.fayde":
                return new HomeViewModel();
                break;
        }
    }
}
export = ViewModelProvider;