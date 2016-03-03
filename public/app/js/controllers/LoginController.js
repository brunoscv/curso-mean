(function  () {
  angular.module('jobs')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['AuthService', '$state', '$location'];

  function LoginController (AuthService, $state, $location) {
    var vm = this;

    vm.loginAction = function () {
      AuthService.login(vm.login)
      .then(function  (data) {
        if ($location.search().redirect) {
          return $state.go($location.search().redirect);
        }

        $state.go('home');
      })
      .catch(function (err) {
        console.error(err)
      });
    }

  }
})();
