var app = angular.module("evidence", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when("/", {controller: HomeCtrl, templateUrl: "/static/templates/home.html"})
	.when("/about", {templateUrl: "/static/templates/about.html"})
	.when("/issue/:slug", {controller: IssueCtrl, templateUrl: "/static/templates/issue.html"})
	.otherwise({templateUrl: "/static/templates/404.html"});
});

app.filter("fromNow", function() {
    return function(dateString) {
        return moment(new Date(dateString)).fromNow()
    };
});

function HomeCtrl($scope, $routeParams) {
	$.get("/api/issues", function(response) {
		$scope.$apply(function() {
			$scope.issues = response;
		});
	});
}

function IssueCtrl($scope, $routeParams) {
	$scope.toggleVisible = function(view) {
		view.visible = !view.visible;
	};

	$scope.brightIssue = function(issue) {
		issue.brightCounter++;
		issue.voted = true;

		$.ajax({
			url: "/api/issues/" + issue._id,
			type: "put",
			data: issue,
			success: function(response) {
				console.log(response);
			}
		});
	};

	$scope.dimIssue = function(issue) {
		issue.brightCounter--;
		issue.voted = true;

		$.ajax({
			url: "/api/issues/" + issue._id,
			type: "put",
			data: issue,
			success: function(response) {
				console.log(response);
			}
		});
	};

	//load the issue
	$.get("/api/issues?slug=" + $routeParams.slug, function(response) {
		$scope.$apply(function() {
			$scope.issue = response[0] || null;
			$scope.loaded = true;
		});
	});

	//load viewpoints for the issue
	$.get("/api/viewpoints?issueSlug=" + $routeParams.slug, function(views) {
		$scope.$apply(function() {
			$scope.views = views || null;

			//make the first two views visible
			if (views) {
				for (var i = 0; i < views.length && i < 2; i++) {
					views[i].visible = true;
				}
			}
		});
	});
}

function ViewpointCtrl($scope) {
	$.get("/api/cards?viewpointId=" + $scope.view._id, function(cards) {
		$scope.$apply(function() {
			$scope.cards = cards;
		});
	});


	$scope.brightView = function(view) {
		view.brightCounter++;
		view.voted = true;

		$.ajax({
			url: "/api/viewpoints/" + view._id,
			type: "put",
			data: view,
			success: function(response) {
				console.log(response);
			}
		});
	};

	$scope.dimView = function(view) {
		view.brightCounter--;
		view.voted = true;

		$.ajax({
			url: "/api/viewpoints/" + view._id,
			type: "put",
			data: view,
			success: function(response) {
				console.log(response);
			}
		});
	};
}
