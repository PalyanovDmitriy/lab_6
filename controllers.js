angular
    .module("app", ["filtersModule", "directivesModule"])
    .controller("Contorller1", ["$scope",
        function ($scope) {

            $scope.name = "������";

            $scope.filterName = "";

            $scope.items = [];
            $scope.items2 = [];
            $scope.newItem = {
                name: "",
                priority: "",
                ispoln: ""
            };
            $scope.add = function () {
                if (($scope.newItem.name != "") && ($scope.newItem.ispoln != "") && (($scope.newItem.priority == "�������") || ($scope.newItem.priority == "�������") || ($scope.newItem.priority == "������"))) {
                    $scope.items.push({
                        name: $scope.newItem.name,
                        priority: $scope.newItem.priority,
                        ispoln: $scope.newItem.ispoln
                    });
                    $scope.newItem.name = "";
                    $scope.newItem.priority = "";
                    $scope.newItem.ispoln = "";
                } else {
                    alert("����������,��������� ��� ����!");
                }
            };


            $scope.del = function (item) {
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);

            }
            $scope.replace = function (mname, mpr, misp, i) {
                $scope.items2.push({
                    name: mname,
                    priority: mpr,
                    ispoln: misp
                });
                $scope.del(i);
            };

        }]);