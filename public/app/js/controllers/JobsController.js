(function  () {
  angular.module('jobs')
    .controller('JobsController', JobsController);

  JobsController.$inject = ['JobService', '$state'];

  function JobsController (JobService, $state) {
    var vm = this;

    if(!$state.params.id) {
      return redirect();
    }

    JobService.get({_id : $state.params.id}).$promise
      .then(function  (response) {
        if(!response || response.err) return redirect();

        vm.job = response;
      });

    function redirect () {
      $state.go('home');
    }
  }
})();
