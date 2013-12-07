var app = angular.module("evidence", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/", {controller: HomeCtrl, templateUrl: "/static/templates/home.html"})
    .when("/about", {templateUrl: "/static/templates/about.html"})
    .otherwise({controller: "NotFoundCtrl", templateUrl: "/static/html/notfound.html"});
});

function HomeCtrl($scope) {
    $scope.doThing = function() {
        $scope.data = "Data changed";
    };
    
    $scope.data = "Some data";

    $.get("/api/example", function(response) {
    	$scope.$apply(function() {
    		$scope.dataFromApi = response;
    	});
    });
}
