/**
 * Created by kolesnikov-a on 15/12/2016.
 */

myApp.controller('newPreGateCtrl', ['$scope', 'PreGate', function($scope, PreGate){

	$scope.newPreGate = new PreGate();

}]);