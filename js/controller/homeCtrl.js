(function(app){
	app
		.controller('homeCtrl',[
			'$scope',
			'myFactory',
			'$state',
			'$rootScope',
			function($scope,myFactory,$state,$rootScope){
				$scope.views = {
					slideData : [
						{
							img	: './img/img05.png'
						},
						{
							img	: './img/img02.png'
						},
						{
							img	: './img/img04.png'
						}
					],
					listData : [],
					getList : function(){
						myFactory.getList().then(function(res){
							console.log(res);
							if(res.status === 200 && res.data){
								$scope.views.listData = res.data.data.menu;
								console.log($scope.views.listData)
							}
						},function(res){
							/* 接口请求失败或者网络差延迟超时 */
						});
					},
					goDetail : function(item){
						console.log(item);
						$state.go('detail',item);
						//$rootScope.detail = item;
						myFactory.storage.setVal('detail',item)
					}
				}
				$scope.views.getList();
		}])
})(app);
