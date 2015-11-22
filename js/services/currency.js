app.factory('currency',['$http',function($http){
     var url = "http://api.fixer.io/latest?base=ZAR" + "&callback=JSON_CALLBACK";
    return $http.jsonp(url)
    .success(function(data){
        return data;
    })
    .error(function(error){
        return error;
    });
}]);