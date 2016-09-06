(function()
{
    
    var RegisterController = function($scope)
    {
       $scope.show = false;
      
       
        $scope.CheckPassword = function()
        {
            if($scope.Reg_Password!=null&&$scope.Reg_Cnfpassword!=null)
                {
                    
                      if ($scope.Reg_Password == $scope.Reg_Cnfpassword)
                {
                    $scope.show = false;
                }
            else
                {
                    $scope.show = true;
                }
                }
            
          
        }
        
        
    };
    
    RegisterController.$inject = ['$scope'];
    angular.module('SplitWise').controller('RegisterController',RegisterController);
    
}());