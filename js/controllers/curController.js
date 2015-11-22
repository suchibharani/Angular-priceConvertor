app.controller('curController', ['$scope','currency', function($scope,currency) {
    currency.success(function(data){
        $scope.currency = data;
        $scope.rates = $scope.currency.rates;
        $scope.baseType= $scope.rates.USD;
        $scope.toType= $scope.rates.USD;
        $scope.baseQty= 1;
		$scope.qtyPrice ={};
		$scope.curType ={};
		  $scope.qtyPrice = function(currate){
			 $scope.basePrice = currate * $scope.baseQty;
			 return $scope.basePrice;
		 }
		  $scope.curType = function(findCurtype){
			  for(var key in $scope.rates) {
				  var value = $scope.rates[key];
				  if( value == findCurtype)
				  {
					  var mysym = key;
					  return mysym;
				  }
			}
		  }
        $scope.calcPrice = function(){
			 var ammount = 200;
			 var findCurtype = $scope.toType;
             var currate = ammount * ($scope.toType * (1 / $scope.baseType));
			 $scope.qtyPrice(currate);
			 $scope.curSymbol = $scope.curType(findCurtype); 
         };
		 $scope.calcPrice();
    })
    
    
}]);