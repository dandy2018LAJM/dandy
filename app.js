angular.module('BeardApp', [])
.controller('UploadController', ['#scope', '$http'
	function($scope, $http) {
		$scope.upload = function() {
			$http.post('upload.ashx', $scope.files,
			{
				headers:{'Content-Type' : 'multipart/form-data'}
			}
			.success(function(d)) {
				console.log(d)
			})
		}
	}
	]);
