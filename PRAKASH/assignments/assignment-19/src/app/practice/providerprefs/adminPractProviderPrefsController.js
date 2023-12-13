/*************************************************************************
 * Opargo: Admin Practice Provider Optimizer Prefs View Controller
 * Version: 2.0.0
 *************************************************************************/
(function() {
  "use strict";
  angular.module("opargoApp").controller("AdminPractProviderPrefsCtrl", AdminPractProviderPrefsCtrl);

  AdminPractProviderPrefsCtrl.$inject = ["$filter", "$scope", "$timeout", "$q", "$uibModal", "AdminServices", "SessionServices", "UserServices", "Utils"];

  function AdminPractProviderPrefsCtrl($filter, $scope, $timeout, $q, $uibModal, AdminServices, SessionServices, UserServices, Utils) {

    var vm = this; /* Assign ViewModel */
    vm.errormsg = ""; /* Generic error message in view to empty */

    /* Slider options */
    vm.provWeightSliderOpt = {options: {id: "", floor: 0, ceil: 5, step: 0.1, precision: 1, onEnd: function(id){updateProviderWeights();}}};
    vm.provPrefSliderOpt = {options: {floor: -50, ceil: 50, step: 1, onChange: function(sliderId, value){vm.onChange({$value: value});}}};

    vm.editProviderPrefsErrorMsg = ""; /* Edit provider error message */
    vm.practiceName = SessionServices.getCurrentPractice().practice_name;
    vm.filteredPaginationList = [];
    vm.currentPage = 1;
    vm.numPerPage = 25;
    vm.maxSize = 0;

    /*****************************************************************
     * View Functions
     *****************************************************************/
    vm.closeModal = closeModal;
    vm.calcInventoryTotals = calcInventoryTotals;
    vm.calcSpoilTotals = calcSpoilTotals;
    vm.changeProvPrefLocInvAllocation = changeProvPrefLocInvAllocation;
    vm.changeProvPrefLocTimeSlots = changeProvPrefLocTimeSlots;
    vm.firstPage = firstPage;
    vm.initialize = initializePracticeProviderPrefsView;
    vm.lastPage = lastPage;
    vm.nextPage = nextPage;
    vm.openProviderApptsModal = openProviderApptsModal;
    vm.openProviderLocationTimesModal = openProviderLocationTimesModal;
    vm.openProviderNewPatientModal = openProviderNewPatientModal;
    vm.openProviderPayerGroupsModal = openProviderPayerGroupsModal;
    vm.openProviderPrefProviderModal = openProviderPrefProviderModal;
    vm.openProviderPrefSummaryModal = openProviderPrefSummaryModal;
    vm.openProviderRefProvidersModal = openProviderRefProvidersModal;
    vm.openProviderInvAllocationModal = openProviderInvAllocationModal;
    vm.openProviderSpoilInvModal = openProviderSpoilInvModal;
    vm.previousPage = previousPage;
    vm.updateProviderActivityPref = updateProviderActivityPref;
    vm.updateProviderPayerPref = updateProviderPayerPref;
    vm.updateProviderRefProvPref = updateProviderRefProvPref;
    vm.updateProviderLocPref = updateProviderLocPref;
    vm.updateProviderLocTimeSlotPref = updateProviderLocTimeSlotPref;
    vm.updateProviderSegmentWindowPrefs = updateProviderSegmentWindowPrefs;
    vm.updateProviderSpoiledInvPrefs = updateProviderSpoiledInvPrefs;
    vm.updateProviderWeights = updateProviderWeights;


    function closeModal() {
      vm.editProviderPrefsErrorMsg = ""; /* Reset edit provider error message */
      vm.provWeightsForm = {}; /* Clear all modification objs */
      vm.providerPayerPref = {};
      vm.providerActivityPref = {};
      vm.providerRefProviderPref = {};
      vm.practProviderSegWinPrefs = {};
      vm.practProvidersInvAllocationPrefs = {};
      vm.practProviderSpoilInvPrefs = {};
      vm.providerInvTotals = {};
      vm.percentageError = false; /* Clear error */
      vm.modal.close();
    }


    // function calcInventoryTotals() {
    //   vm.providerInvTotals = { window_1: 0, window_2: 0, window_3: 0 };
    //   angular.forEach(vm.practProviderInvAllocationPrefs, function(setting) {
    //     vm.providerInvTotals.window_1 += (!isNaN(parseInt(setting.window_1)) ? setting.window_1 : 0);
    //     vm.providerInvTotals.window_2 += (!isNaN(parseInt(setting.window_2)) ? setting.window_2 : 0);
    //     vm.providerInvTotals.window_3 += (!isNaN(parseInt(setting.window_3)) ? setting.window_3 : 0);
    //     if(vm.providerInvTotals.window_1 > 100 || vm.providerInvTotals.window_1 < 100 ||
    //       vm.providerInvTotals.window_2 > 100 || vm.providerInvTotals.window_2 < 100 ||
    //       vm.providerInvTotals.window_3 > 100 || vm.providerInvTotals.window_3 < 100) {
    //        vm.percentageError = true;
    //     } else { vm.percentageError = false; }
    //   });
    // }

    
    function calcSpoilTotals() {
      vm.providerSpoilTotals = { nonopargo_total: 0, opargo_total: 0 };
      angular.forEach(vm.practProviderSpoilInvPrefs, function(setting) {
        vm.providerSpoilTotals.nonopargo_total += (!isNaN(parseInt(setting.nonopargo_bkng_per)) ? setting.nonopargo_bkng_per : 0);
        vm.providerSpoilTotals.opargo_total += (!isNaN(parseInt(setting.opargo_bkng_per)) ? setting.opargo_bkng_per : 0);
        if(vm.providerSpoilTotals.nonopargo_total > 100 || vm.providerSpoilTotals.nonopargo_total < 100 ||
          vm.providerSpoilTotals.opargo_total > 100 || vm.providerSpoilTotals.opargo_total < 100) {
            vm.percentageError = true;
        } else { vm.percentageError = false; }
      });
    }

    // function changeProvPrefLocInvAllocation(locPrefObj) {
    //   if (!Utils.isUndefinedOrNull(locPrefObj)) {
    //     openLoadingModal();
    //     getProviderSegmentWindowPref(locPrefObj.provider_id, locPrefObj.location_id)
    //       .then(function successCallback() {
    //         getProviderInvAllocationPref(locPrefObj.provider_id, locPrefObj.location_id)
    //           .then(function successCallback() {
    //             calcInventoryTotals();
    //             vm.loadingModal.close();
    //           }, function errorCallback() {  vm.loadingModal.close();  });
    //     }, function errorCallback() { vm.loadingModal.close(); });
    //   }
    // }

    function changeProvPrefLocTimeSlots(locPrefObj) {
      if (!Utils.isUndefinedOrNull(locPrefObj)) {
        getProviderLocationTimesPref(locPrefObj.provider_id, locPrefObj.location_id)
          .then(function successCallback() {
            refreshSliders();
        }, function errorCallback() { /* Do Nothing */ });
      }
    }

    function initializePracticeProviderPrefsView() { /* Initialization method */
      openLoadingModal();
      getPracticeProviders()
      .then(function successCallback() {
        getProvidersWeights()
        .then(function successCallback() {
          vm.loadingModal.close();
        }, function erroCallback() {
          vm.loadingModal.close();
        });
      }, function errorCallback() {
        vm.loadingModal.close();
      });
    }

    function openProviderApptsModal(provider) {
      getProviderActivityPref(provider)
        .then(function successCallback() {
          vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
          vm.modal = $uibModal.open({
            animation: true,
            backdrop: "static",
            scope: $scope,
            templateUrl: "components/shared/modals/providerapptoptsettingsmodal.html",
            size: "lg"
          });
          vm.modal.opened.then(function() {
            refreshSliders();
          });
        }, function errorCallback() { /* Do nothing */ });
    }

    function openProviderLocationTimesModal(provider) {
      vm.providerOptLocations = [];
      vm.providerLocTimes = [];
      getProviderOptLocations(provider)
        .then(function successCallback() {
          if (vm.providerOptLocations.length > 0) {
            vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
            vm.modal = $uibModal.open({
              animation: true,
              backdrop: "static",
              scope: $scope,
              templateUrl: "components/shared/modals/providerlocationoptsettingsmodal.html",
              size: "lg"
            });
            vm.modal.opened.then(function() {
              refreshSliders();
            });
          } else {
            vm.editProviderPrefsErrorMsg = "No locations currently loaded. Please prepopulate locations.";
          }
        }, function errorCallback() { /* Do nothing */ });
    }

    function openProviderNewPatientModal(provider) {
      vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
      vm.modal = $uibModal.open({
        animation: true,
        backdrop: "static",
        scope: $scope,
        templateUrl: "components/shared/modals/providernewpatoptsettingsmodal.html",
        size: "lg"
      });
      vm.modal.opened.then(function() {
        refreshSliders();
      });
    }



    function openProviderPayerGroupsModal(provider) {
      getProviderPayerPref(provider)
        .then(function successCallback() {
          vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
          vm.modal = $uibModal.open({
            animation: true,
            backdrop: "static",
            scope: $scope,
            templateUrl: "components/shared/modals/providerpayeroptsettingsmodal.html",
            size: "lg"
          });
          vm.modal.opened.then(function() {
            refreshSliders();
          });
        }, function errorCallback() { /* Do nothing */ });}



    function openProviderPrefProviderModal(provider) {
      vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
      vm.modal = $uibModal.open({
        animation: true,
        backdrop: "static",
        scope: $scope,
        templateUrl: "components/shared/modals/providerprefprovoptsettingsmodal.html",
        size: "lg"
      });
      vm.modal.opened.then(function() {
        refreshSliders();
      });}



    function openProviderPrefSummaryModal() {
      vm.modal = $uibModal.open({
            animation: true,
            backdrop: "static",
            scope: $scope,
            templateUrl: "components/shared/modals/providerprefsummarymodal.html",
            size: "lg"
          });}




    function openProviderRefProvidersModal(provider) {
      getProviderRefProviderPref(provider)
      .then(function successCallback() {
        vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
        vm.modal = $uibModal.open({
          animation: true,
          backdrop: "static",
          scope: $scope,
          templateUrl: "components/shared/modals/providerrefprovideroptsettingsmodal.html",
          size: "lg"
        });
        vm.modal.opened.then(function() {
          refreshSliders();
        });
      }, function errorCallback() { /* Do nothing */ });
    }



    function openProviderInvAllocationModal(provider) {
      vm.providerOptLocations = [];
      vm.providerLocTimes = [];
      getProviderOptLocations(provider)
        .then(function successCallback() {
          if (vm.providerOptLocations.length > 0) {
            vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
            vm.modal = $uibModal.open({
              animation: true,
              backdrop: "static",
              scope: $scope,
              templateUrl: "components/shared/modals/providerinvallocationoptsettingsmodal.html",
              size: "lg"
            });
            vm.modal.opened.then(function() {
            });
          } else {
            vm.editProviderPrefsErrorMsg = "No locations currently associated for the provider.";
          }
        }, function errorCallback() { /* Do nothing */ });}




    function openProviderSpoilInvModal(provider) {
      getProviderSpoilInvPref(provider)
      .then(function successCallback() {
        vm.provWeightsForm = $filter("wgtByProvId")(vm.practProvidersWeights, provider.id);
        calcSpoilTotals();
        vm.modal = $uibModal.open({
          animation: true,
          backdrop: "static",
          scope: $scope,
          templateUrl: "components/shared/modals/providerspoilinvoptsettingsmodal.html",
          size: "lg"
        });
      }, function errorCallback() { /* Do nothing */ });
    }

    function updateProviderActivityPref(provActivityPrefObj) {
      AdminServices.updateProviderActivityPref(provActivityPrefObj.provider_id, provActivityPrefObj.activity_id, provActivityPrefObj.desirability)
        .then(function successCallback() {
        /* Do Nothing */
        }, function errorCallback(updateProviderActivityPrefResult) {
          vm.editProviderPrefsErrorMsg = updateProviderActivityPrefResult;
        });
    }

    function updateProviderPayerPref(provPayerPrefObj) {
      AdminServices.updateProviderPayerPref(provPayerPrefObj.provider_id, provPayerPrefObj.payer_id, provPayerPrefObj.desirability)
        .then(function successCallback() {
        /* Do Nothing */
        }, function errorCallback(updateProviderPayerPrefResult) {
          vm.editProviderPrefsErrorMsg = updateProviderPayerPrefResult;
        });
    }

    function updateProviderRefProvPref(refProvPrefObj) {
      AdminServices.updateProviderRefProvPref(refProvPrefObj.provider_id, refProvPrefObj.refProv_id, refProvPrefObj.desirability)
        .then(function successCallback() {
        /* Do Nothing */
        }, function errorCallback(updateProviderRefProvPrefResult) {
          vm.editProviderPrefsErrorMsg = updateProviderRefProvPrefResult;
        });
    }

    function updateProviderLocPref(locPrefObj) {
      AdminServices.updateProviderLocationPref(locPrefObj.provider_id, locPrefObj.location_id, locPrefObj.desirability, locPrefObj.proximity)
        .then(function successCallback() {
        /* Do Nothing */
        }, function errorCallback(updateProviderLocPrefResult) {
          vm.editProviderPrefsErrorMsg = updateProviderLocPrefResult;
        });
    }

    function updateProviderLocTimeSlotPref(locPrefObj, timeSlotObj) {
      AdminServices.updateProviderLocationTimePref(locPrefObj.provider_id, locPrefObj.location_id, timeSlotObj.id, timeSlotObj.start_time, timeSlotObj.end_time, timeSlotObj.desirability)
        .then(function successCallback() {
        /* Do Nothing */
        }, function errorCallback(updateProviderLocTimeSlotPrefResult) {
          vm.editProviderPrefsErrorMsg = updateProviderLocTimeSlotPrefResult;
        });
    }

    function updateProviderSegmentWindowPrefs() {
      vm.editProviderPrefsErrorMsg = "";
      if(vm.editProvSegWinForm.$valid && !vm.percentageError) { /* Form validation and percentage validation */
        openLoadingModal();
        if(vm.practProviderSegWinPrefs.window_1 < vm.practProviderSegWinPrefs.window_2) {
          AdminServices.updateProviderSegmentRangePrefs(vm.practProviderSegWinPrefs)
            .then(function successCallback() {
              AdminServices.updateProviderSegmentPercPrefs(vm.provWeightsForm.provider_id, vm.practProviderSegWinPrefs.location_id, vm.practProviderInvAllocationPrefs)
                .then(function successCallback() {
                  vm.loadingModal.close();
                }, function errorCallback(updateProviderSegmentPercPrefsResult) {
                  vm.editProviderPrefsErrorMsg = updateProviderSegmentPercPrefsResult;
                  vm.loadingModal.close();
                });
            }, function errorCallback(updateProviderSegmentRangePrefsResult) {
              vm.editProviderPrefsErrorMsg = updateProviderSegmentRangePrefsResult;
              vm.loadingModal.close();
            });
        } else {
          vm.editProviderPrefsErrorMsg = "Error: the value of Range 1 must be less than the value of Range 2";
          vm.loadingModal.close();
        }
      }
    }

    function updateProviderSpoiledInvPrefs() {
      vm.editProviderPrefsErrorMsg = "";
      if(vm.editProvSpoilPerForm.$valid && !vm.percentageError) { /* Form validation and percentage validation */
        AdminServices.updateProviderSpoiledPercPrefs(vm.provWeightsForm.provider_id, vm.practProviderSpoilInvPrefs)
          .then(function successCallback() {
            closeModal();
          }, function errorCallback(updateProviderSegmentRangePrefsResult) {
            vm.editProviderPrefsErrorMsg = updateProviderSegmentRangePrefsResult;
          });}}

    function updateProviderWeights() {
      AdminServices.updateProviderWeights(vm.provWeightsForm)
      .then(function successCallback() {
        /* Do Nothing */
      }, function errorCallback(updateProviderWeightsResult) {
        vm.editProviderPrefsErrorMsg = updateProviderWeightsResult;
      });
    }

    /*****************************************************************
     * Controller Functions
     *****************************************************************/

    function getProviderOptLocations(provider) {
      var getProviderOptLocationsPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderOptLocations(provider.id)
        .then(
          function(getProviderOptLocationsResult) { /* Promise Success */
            vm.providerOptLocations = getProviderOptLocationsResult;
            getProviderOptLocationsPromise.resolve();
          }, function(getProviderOptLocationsResult) { /* Promise Failure */
            getProviderOptLocationsPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderOptLocationsResult;
          });
      return getProviderOptLocationsPromise.promise;}


      

    function getProviderLocationTimesPref(provider, location) {
      var getProviderLocationTimesPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderLocationTimePref(provider, location)
        .then(
          function(getProviderLocationTimesPrefResult) { /* Promise Success */
            vm.providerLocTimes = getProviderLocationTimesPrefResult;
            getProviderLocationTimesPrefPromise.resolve();
          }, function(getProviderLocationTimesPrefResult) { /* Promise Failure */
            getProviderLocationTimesPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderLocationTimesPrefResult;
          });
      return getProviderLocationTimesPrefPromise.promise;
    }

    function getPracticeProviders() {
      var getPracticeProvidersPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      UserServices.getPracticeProviders()
        .then(
          function(getPracticeProvidersResult) { /* Promise Success */
            vm.practProviders = getPracticeProvidersResult;
            getPracticeProvidersPromise.resolve();
          }, function(getPracticeProvidersResult) { /* Promise Failure */
            getPracticeProvidersPromise.reject();
            vm.editProviderPrefsErrorMsg = getPracticeProvidersResult;
          });
      return getPracticeProvidersPromise.promise;
    }


    function getProviderActivityPref(provider) {
      var getProviderActivityPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderActivityPref(provider.id)
        .then(
          function(getProviderActivityPrefResult) { /* Promise Success */
            providerActivityPrefPaginationList(getProviderActivityPrefResult);
            getProviderActivityPrefPromise.resolve();
          }, function(getProviderActivityPrefResult) { /* Promise Failure */
            getProviderActivityPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderActivityPrefResult;
          });
      return getProviderActivityPrefPromise.promise;
    }


    function providerActivityPrefPaginationList(getProviderActivityPrefResult) {
      vm.providerActivityPref = [];
      angular.forEach(getProviderActivityPrefResult, function(activityPref) {
        vm.providerActivityPref.push(activityPref);
      });
      createPaginationList(vm.providerActivityPref);
    }


    function getProviderPayerPref(provider) {
      var getProviderPayerPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderPayerPref(provider.id)
        .then(function(getProviderPayerPrefResult) { /* Promise Success */
            vm.providerPayerPref = getProviderPayerPrefResult;
            getProviderPayerPrefPromise.resolve();
          },function(getProviderPayerPrefResult) { /* Promise Failure */
            getProviderPayerPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderPayerPrefResult;
          });
      return getProviderPayerPrefPromise.promise;
    }


    function getProviderRefProviderPref(provider) {
      var getProviderRefProviderPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderRefProvPref(provider.id)
        .then(
          function(getProviderRefProviderPrefResult) { /* Promise Success */
            providerRefProviderPrefPaginationList(getProviderRefProviderPrefResult);
            getProviderRefProviderPrefPromise.resolve();
          }, function(getProviderRefProviderPrefResult) { /* Promise Failure */
            getProviderRefProviderPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderRefProviderPrefResult;
          });
      return getProviderRefProviderPrefPromise.promise;
    }


    function providerRefProviderPrefPaginationList(getProviderRefProviderPrefResult) {
      vm.providerRefProviderPref = [];
      angular.forEach(getProviderRefProviderPrefResult, function(refProviderPref) {
        vm.providerRefProviderPref.push(refProviderPref);
      });
      createPaginationList(vm.providerRefProviderPref);
    }


    // function createPaginationList(providerPreferences) {
    //     vm.currentPage = 1;
    //     vm.filteredPaginationList = [];
    //     if (providerPreferences.length > 0) {
    //       vm.filteredPaginationList =  providerPreferences.slice(0, vm.numPerPage);
    //       vm.maxSize = Math.ceil(providerPreferences.length/vm.numPerPage);
    //   }
    // }

    // function previousPage(currentPage, providerPrefs) {
    //   if (!Utils.isUndefinedOrNull(providerPrefs) && providerPrefs.length > 0 && currentPage >= 2) {
    //     var begin = ((vm.currentPage - 2) * vm.numPerPage), end = begin + vm.numPerPage;
    //     vm.filteredPaginationList =  providerPrefs.slice(begin, end);
    //     vm.currentPage = currentPage - 1;
    //   }
    // }

    // function firstPage(providerPrefs) {
    //   if (!Utils.isUndefinedOrNull(providerPrefs) && providerPrefs.length > 0) {
    //     vm.filteredPaginationList =  providerPrefs.slice(0, vm.numPerPage);
    //     vm.currentPage = 1;
    //   }
    // }

    // function lastPage(providerPrefs) {
    //   if (!Utils.isUndefinedOrNull(providerPrefs) && providerPrefs.length > 0) {
    //     var begin = ((vm.maxSize - 1) * vm.numPerPage), end = begin + vm.numPerPage;
    //     vm.filteredPaginationList =  providerPrefs.slice(begin, end);
    //     vm.currentPage = vm.maxSize;
    //   }
    // }

    // function nextPage(currentPage, providerPrefs) {
    //   if (!Utils.isUndefinedOrNull(providerPrefs) && providerPrefs.length > 0 && currentPage < vm.maxSize) {
    //     var begin = ((vm.currentPage) * vm.numPerPage), end = begin + vm.numPerPage;
    //     vm.filteredPaginationList =  providerPrefs.slice(begin, end);
    //     vm.currentPage = currentPage + 1;
    //   }
    // }

    // function getProvidersWeights() {
    //   var getProvidersWeightsPromise = $q.defer(); /* Create promise object */
    //   vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
    //   AdminServices.getProvidersWeights()
    //     .then(
    //       function(getProvidersWeightsResult) { /* Promise Success */
    //         vm.practProvidersWeights = getProvidersWeightsResult;
    //         getProvidersWeightsPromise.resolve();
    //       }, function(getProvidersWeightsResult) { /* Promise Failure */
    //         getProvidersWeightsPromise.reject();
    //         vm.editProviderPrefsErrorMsg = getProvidersWeightsResult;
    //       });
    //   return getProvidersWeightsPromise.promise;
    // }

    function getProviderSegmentWindowPref(providerId, locationId) {
      var getProviderWindowPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderSegmentWindowPref(providerId, locationId)
        .then(
          function(getProviderSegmentWindowPrefResult) { /* Promise Success */
            vm.practProviderSegWinPrefs = getProviderSegmentWindowPrefResult;
            getProviderWindowPrefPromise.resolve();
          }, function(getProviderSegmentWindowPrefResult) { /* Promise Failure */
            getProviderWindowPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderSegmentWindowPrefResult;
          });
      return getProviderWindowPrefPromise.promise;
    }

    function getProviderInvAllocationPref(providerId, locationId) {
      var getProviderInvAllocationPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderInventoryAllocationPref(providerId, locationId)
        .then(
          function(getProviderInvAllocationPrefResult) { /* Promise Success */
            vm.practProviderInvAllocationPrefs = getProviderInvAllocationPrefResult;
            getProviderInvAllocationPrefPromise.resolve();
          }, function(getProviderInvAllocationPrefResult) { /* Promise Failure */
            getProviderInvAllocationPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderInvAllocationPrefResult;
          });
      return getProviderInvAllocationPrefPromise.promise;
    }


    function getProviderSpoilInvPref(provider) {
      var getProviderSpoilInvPrefPromise = $q.defer(); /* Create promise object */
      vm.editProviderPrefsErrorMsg = ""; /* Reset error message */
      AdminServices.getProviderSpoiledInventoryPref(provider.id)
        .then(
          function(getProviderSpoilInvPrefResult) { /* Promise Success */
            vm.practProviderSpoilInvPrefs = getProviderSpoilInvPrefResult;
            getProviderSpoilInvPrefPromise.resolve();
          }, function(getProviderSpoilInvPrefResult) { /* Promise Failure */
            getProviderSpoilInvPrefPromise.reject();
            vm.editProviderPrefsErrorMsg = getProviderSpoilInvPrefResult;
          });
      return getProviderSpoilInvPrefPromise.promise;
    }


    function openLoadingModal() {
      vm.loadingModal = $uibModal.open({
        animation: true,
        backdrop: "static",
        keyboard: false,
        template: "<img src='../assets/img/misc/loading.gif' width='32' height='32'> Please wait...",
        size: "sm"
      });
    }

    function refreshSliders() {
      $timeout(function () {
        $scope.$broadcast('rzSliderForceRender');
      }, 25);
    }
  }

  /*****************************************************************
   * Ng-repeat slider compatability directive (requires rzsliders)
   * Used only in this controller
   *****************************************************************/
  angular.module("opargoApp").directive("ngRepeatSlider", [function() {
    return {
      restrict: "E",
      template: "<rzslider rz-slider-model='vm.model' rz-slider-options='vm.provPrefSliderOpt.options'></rzslider>",
      scope: {},
      controller: AdminPractProviderPrefsCtrl,
      controllerAs: "vm",
      bindToController: {
        model: "=valModel",
        onChange: "&onChange"
      }
    };
  }])

  /*****************************************************************
   * Search Weights by Provider Id Filter: Used to return obj that contains id of arg
   *****************************************************************/


//   .filter("wgtByProvId", function() {
//     return function(input, id) {
//       var i = 0, len=input.length;
//       for(; i<len; i++) {
//         if(+input[i].provider_id == +id) {
//           return input[i];
//         }
//       }
//       return null;
//     };
//   });
})();
