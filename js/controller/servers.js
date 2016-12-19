(function(app){
	app.factory('myFactory',['$http',function($http){
		var factory = {};
		var storage = {};
		factory.getList = function(){
			return $http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php')
		},
		factory.storage = {
			setVal : function(name,value){
				if(value && name ){
					storage[name] = value;
				}
			},
			getVal : function(name){
				if( !storage[name] || !name ){
					return;
				}
				return storage[name];
			},
			removeVal : function(name){
				if(name && storage[name]){
					delete storage[name];
				}
			}
		}
		return factory;
	}])
})(app)
