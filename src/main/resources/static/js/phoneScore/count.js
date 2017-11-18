var updateSelected = function(action,id){
    if(action == 'add' && $scope.selected.indexOf(id) == -1){
        $scope.selected.push(id);
    }
    if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
        var idx = $scope.selected.indexOf(id);
        $scope.selected.splice(idx,1);
        $scope.selectedTags.splice(idx,1);
    }
}

$scope.updateSelection = function($event, id){
    var checkbox = $event.target;
    var action = (checkbox.checked?'add':'remove');
    updateSelected(action,id,checkbox.name);
}

$scope.isSelected = function(id){
    return $scope.selected.indexOf(id)>=0;
}