(function(app){
	app
		.controller('detailCtrl',['$scope','$rootScope','$stateParams','myFactory',function($scope,$rootScope,$stateParams,myFactory){
			$scope.views = {
				//detail : $rootScope.detail,
				goBack : function(){
					window.history.back();
				},
//				detail : {
//					name : $stateParams.name,
//					img : $stateParams.img
//				}
				detail : myFactory.storage.getVal('detail'),
			}
		}])
})(app)
