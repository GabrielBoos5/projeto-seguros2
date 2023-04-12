angular.module('seguro').controller("ApoliceController", function ($scope, $http, $routeParams, $location) {

    if (!$routeParams.apoliceId) $location.path("/lista")



    const listaApolice = new storage("apolices")
    // $scope.apolices = listaApolice.listObjects()
    $http.get('/apolice/')
        .then((apolice) => {
            console.log(apolice)
            $scope.apolices = apolice.data
        }).catch((error) => {
            console.log(error)
        });


})