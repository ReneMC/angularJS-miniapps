var app = angular.module("myFirstApp", []);
app.controller("FirstController", function($scope) {
    $scope.nombre = "Amigo";
    $scope.nuevoComentario = {};
    $scope.comentarios = [{
        comentario: "Esto es un comentario",
        username: "Random user"
    }, {
        comentario: "Esto es otro comentario sin mucho sentido",
        username: "eElLizZaABbeEtThH"
    }];
    $scope.agregarComentario = function() {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});