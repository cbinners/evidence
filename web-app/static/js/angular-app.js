var app = angular.module("evidence", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/", {controller: HomeCtrl, templateUrl: "/static/templates/home.html"})
    .when("/about", {templateUrl: "/static/templates/about.html"})
    .when("/issue/:slug", {controller: IssueCtrl, templateUrl: "/static/templates/issue.html"})
    .otherwise({redirectTo: "/"});
});

function HomeCtrl($scope, $routeParams) {
    $scope.doThing = function() {
        $scope.data = "Data changed";
    };
    
    $scope.data = "Some data";

    $.get("/api/example", function(response) {
    	$scope.$apply(function() {
    		$scope.dataFromApi = null;
    	});
    });
}

function IssueCtrl($scope, $routeParams) {
    $.get("/api/issues?slug=" + $routeParams.slug, function(response) {
        $scope.$apply(function() {
            $scope.issue = response[0] || null;

            if ($scope.issue) {
                $.get("/api/viewpoints", function(views) {
                    $scope.$apply(function(){
                        $scope.views = views || null;
                        if ($scope.views) {
                            $.get("/api/cards", function(cards){
                                $scope.$apply(function(){
                                    $scope.cards = cards;
                                });
                            });
                        }
                    });
                });
            }
        });
    });
}
