(function()
{
    var LoginController = function($scope,$location)
    {
       
        
        
       $scope.ValidateUser  =  function()
        {
        if($scope.Email == "Admin" && $scope.Password == "Password")
            {
               
                $location.path('/Home')
                
            }
        else
            {
               
                alert("Please enter the login credentials")
                
            }
    
        };

        
        $scope.go = function(strPath)
        {
            $location.path(strPath);
        };
        
                       
    }
    LoginController.$inject = ['$scope','$location'];
    angular.module('SplitWise').controller('LoginController',LoginController);
}());