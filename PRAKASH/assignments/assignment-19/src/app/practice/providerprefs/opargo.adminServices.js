/*************************************************************************
 * Opargo: AngularJS App Admin Services
 * Version: 2.0.0
 *****************************************************************************/
(function() {
  "use strict";
  angular.module("opargoApp").service("AdminServices", AdminServices);

  AdminServices.$inject = ["$window","$http", "$log", "$q", "FileSaver", "AuthenticationServices", "SessionServices", "Utils", "MESSAGES", "USASTATESLIST"];

  function AdminServices($window,$http, $log, $q, FileSaver, AuthenticationServices, SessionServices, Utils, MESSAGES, USASTATESLIST) {

    var adminServicesFunctions = {
      /*********************************************************************
       * Admin Service Calls
       *********************************************************************/
      generatePracticeToken: generatePracticeToken,
      getPracticeToken: getPracticeToken,
      addAcceptedInsurancesByLocation: addAcceptedInsurancesByLocation,
      addAcceptedInsurancesByProvider: addAcceptedInsurancesByProvider,
      addOpargoPractice: addOpargoPractice,
      addPracticeActivity: addPracticeActivity,
      addPracticeBodyPart: addPracticeBodyPart,
      addPracticeCPT: addPracticeCPT,
      addPracticeGroup: addPracticeGroup,
      addPracticeGroupSite: addPracticeGroupSite,
      addPracticeNetworkOptProvider: addPracticeNetworkOptProvider,
      addPracticeNetworkOptProviderAppt: addPracticeNetworkOptProviderAppt,
      addPracticeNetworkOptProviderRefProv: addPracticeNetworkOptProviderRefProv,
      addPracticeNPUGroup: addPracticeNPUGroup,
      addPracticeNPUGroupActivity: addPracticeNPUGroupActivity,
      addPracticeNPUGroupProvider: addPracticeNPUGroupProvider,
      addPracticeNpuWaitTimeReason: addPracticeNpuWaitTimeReason,
      addPracticeOverrideApptType: addPracticeOverrideApptType,
      addPracticeOverrideReason: addPracticeOverrideReason,
      addPracticeProviderActivity: addPracticeProviderActivity,
      addPracticeProviderActivityLocation: addPracticeProviderActivityLocation,
      addPracticeProviderBodyPart: addPracticeProviderBodyPart,
      addPracticeProviderReferringProvider: addPracticeProviderReferringProvider,
      addPracticeReferringProvider: addPracticeReferringProvider,
      addPracticeUser: addPracticeUser,
      addGroupPracticeUser: addGroupPracticeUser,
      checkForUsername: checkForUsername,
      deletePracticeActivity: deletePracticeActivity,
      deletePracticeAdmin: deletePracticeAdmin,
      deletePracticeManager: deletePracticeManager,
      deletePracticeBodyPart: deletePracticeBodyPart,
      deletePracticeCancelReason: deletePracticeCancelReason,
      deletePracticeChangeReason: deletePracticeChangeReason,
      deletePracticeCPT: deletePracticeCPT,
      deletePracticeEthnicity: deletePracticeEthnicity,
      deletePracticeGroupSite: deletePracticeGroupSite,
      deletePracticeLocation: deletePracticeLocation,
      deletePracticeNetworkOptProvider: deletePracticeNetworkOptProvider,
      deletePracticeNetworkOptProviderActivity: deletePracticeNetworkOptProviderActivity,
      deletePracticeNetworkOptProviderRefProvider: deletePracticeNetworkOptProviderRefProvider,
      deletePracticeNPUGroup: deletePracticeNPUGroup,
      deletePracticeNPUGroupActivity: deletePracticeNPUGroupActivity,
      deletePracticeNPUGroupProvider: deletePracticeNPUGroupProvider,
      deletePracticeNpuWaitTimeReason: deletePracticeNpuWaitTimeReason,
      deletePracticeOverrideApptType: deletePracticeOverrideApptType,
      deletePracticeOverrideReason: deletePracticeOverrideReason,
      deletePracticeProvider: deletePracticeProvider,
      deletePracticeProviderActivity: deletePracticeProviderActivity,
      deletePracticeProviderActivityLocation: deletePracticeProviderActivityLocation,
      deletePracticeProviderBodyPart: deletePracticeProviderBodyPart,
      deletePracticeProviderReferringProvider: deletePracticeProviderReferringProvider,
      deletePracticeRace: deletePracticeRace,
      deletePracticeReferringProvider: deletePracticeReferringProvider,
      deletePracticeUser: deletePracticeUser,
      deleteGroupPracticeUser: deleteGroupPracticeUser,
      downloadPracticeProviderInsuranceDetails: downloadPracticeProviderInsuranceDetails,
      editPracticeCPT: editPracticeCPT,
      editProvLocCPT: editProvLocCPT,
      editPracticePayer: editPracticePayer,
      editPracticeUser: editPracticeUser,
      editGroupPracticeUser: editGroupPracticeUser,
      getAcceptedInsurancesByLocation: getAcceptedInsurancesByLocation,
      getAcceptedInsurancesByProvider: getAcceptedInsurancesByProvider,
      getAcceptedInsurancesForAllProviders: getAcceptedInsurancesForAllProviders,
      getAvailableInsurancesByLocation: getAvailableInsurancesByLocation,
      getAvailableInsurancesByProvider: getAvailableInsurancesByProvider,
      getClientIpAddress: getClientIpAddress,
      getMultiPracticeUsers: getMultiPracticeUsers,
      getNonPracticeGroupsPractices: getNonPracticeGroupsPractices,
      getOpargoPractices: getOpargoPractices,
      getOpargoPracticeSegmentSettings: getOpargoPracticeSegmentSettings,
      getOpargoPracticeSettings: getOpargoPracticeSettings,
      getPmsEnv: getPmsEnv,
      getPracticeAdmins: getPracticeAdmins,
      getPracticeManagers: getPracticeManagers,
      getPracticeAvailableNetworkProviders: getPracticeAvailableNetworkProviders,
      getPracticeAvailableNetworkProviderActivities: getPracticeAvailableNetworkProviderActivities,
      getPracticeAvailableNetworkProviderRefProviders: getPracticeAvailableNetworkProviderRefProviders,
      getPracticeCptDetailsByProviderAndLocation: getPracticeCptDetailsByProviderAndLocation,
      getPracticeGroupAvailPractices: getPracticeGroupAvailPractices,
      getPracticeGroupDetails: getPracticeGroupDetails,
      getPracticeGroups: getPracticeGroups,
      getPracticeGroupSettings: getPracticeGroupSettings,
      getPracticeInputDetails: getPracticeInputDetails,
      getPracticeInputDetailsOpargoAdmin: getPracticeInputDetailsOpargoAdmin,
      getPracticeLocationsTravelTimes: getPracticeLocationsTravelTimes,
      getPracticeSelfConfigAbbreviations: getPracticeSelfConfigAbbreviations,
      getPracticeNetworkOptActivities: getPracticeNetworkOptActivities,
      getPracticeNetworkOptProviderActivities: getPracticeNetworkOptProviderActivities,
      getPracticeNetworkOptProviderRefProviders: getPracticeNetworkOptProviderRefProviders,
      getPracticeNetworkOptProviders: getPracticeNetworkOptProviders,
      getPracticeNetworkOptSettings: getPracticeNetworkOptSettings,
      getPracticeNPUActivities: getPracticeNPUActivities,
      getPracticeNPUGroups: getPracticeNPUGroups,
      getPracticeNPUGroupActivities: getPracticeNPUGroupActivities,
      getPracticeNPUGroupAvailableActivities: getPracticeNPUGroupAvailableActivities,
      getPracticeNPUGroupAvailableProviders: getPracticeNPUGroupAvailableProviders,
      getPracticeNPUGroupProviders: getPracticeNPUGroupProviders,
      getPracticeOfficeTypes: getPracticeOfficeTypes,
      getPracticeOptimizerActivities: getPracticeOptimizerActivities,
      getPracticeOverrideActivities: getPracticeOverrideActivities,
      getPracticePayerMultipleCPTModifiers: getPracticePayerMultipleCPTModifiers,
      getPracticeProviderAvailableActivities: getPracticeProviderAvailableActivities,
      getPracticeProviderAvailableBodyParts: getPracticeProviderAvailableBodyParts,
      getPracticeProviderAvailableLocationActivities: getPracticeProviderAvailableLocationActivities,
      getPracticeProviderAvailableRefProviders: getPracticeProviderAvailableRefProviders,
      getPmsTypes: getPmsTypes,
      getPracticeUsers: getPracticeUsers,
      getProviderActivityPref: getProviderActivityPref,
      getProviderInventoryAllocationPref: getProviderInventoryAllocationPref,
      getProviderLocationPref: getProviderLocationPref,
      getProviderLocationTimePref: getProviderLocationTimePref,
      getProviderOptLocations: getProviderOptLocations,
      getProviderPayerPref: getProviderPayerPref,
      getProviderPayerModifiers: getProviderPayerModifiers,
      getProviderRefProvPref: getProviderRefProvPref,
      getProviderSegmentWindowPref: getProviderSegmentWindowPref,
      getProviderSpoiledInventoryPref:getProviderSpoiledInventoryPref,
      getProvidersWeights: getProvidersWeights,
      isGSClientEnabled: isGSClientEnabled,
      prepopulatePracticeCancelReasons: prepopulatePracticeCancelReasons,
      prepopulatePracticeChangeReasons: prepopulatePracticeChangeReasons,
      prepopulatePracticeLocations: prepopulatePracticeLocations,
      prepopulatePracticeProviders: prepopulatePracticeProviders,
      prepopulatePracticeReferringProviders: prepopulatePracticeReferringProviders,
      prepopulatePracticeReferralSources: prepopulatePracticeReferralSources,
      prepopulatePracticeSpecificEthnicities: prepopulatePracticeSpecificEthnicities,
      prepopulatePracticeSpecificInsurances: prepopulatePracticeSpecificInsurances,
      removeAcceptedInsurancesByLocation: removeAcceptedInsurancesByLocation,
      removeAcceptedInsurancesByProvider: removeAcceptedInsurancesByProvider,
      prepopulatePracticeSpecificRaces: prepopulatePracticeSpecificRaces,
      sendPracticeAdminEmail: sendPracticeAdminEmail,
      startPracticeBatchProcess: startPracticeBatchProcess,
      sendVerifyEmail: sendVerifyEmail,
      updateDSUserStatus: updateDSUserStatus,
      updateInsurancePlanDetails: updateInsurancePlanDetails,
      updateProviderActivityPref: updateProviderActivityPref,
      updateProviderLocationPref: updateProviderLocationPref,
      updateProviderLocationTimePref: updateProviderLocationTimePref,
      updateProviderPayerPref: updateProviderPayerPref,
      updateProviderRefProvPref: updateProviderRefProvPref,
      updateProviderSegmentPercPrefs: updateProviderSegmentPercPrefs,
      updateProviderSegmentRangePrefs: updateProviderSegmentRangePrefs,
      updateProviderSpoiledPercPrefs: updateProviderSpoiledPercPrefs,
      updateProviderWeights: updateProviderWeights,
      updatePracticeActivity: updatePracticeActivity,
      updatePracticeBlockTime: updatePracticeBlockTime,
      updatePracticeBookingCommentsSettings: updatePracticeBookingCommentsSettings,
      updatePracticeChangeCancelSettings: updatePracticeChangeCancelSettings,
      updatePracticeClientInfo: updatePracticeClientInfo,
      updatePracticeLocation: updatePracticeLocation,
      updatePracticeLocationsTravelTimes: updatePracticeLocationsTravelTimes,
      updatePracticePayerMultipleCPTModifiers: updatePracticePayerMultipleCPTModifiers,
      updatePracticeNetworkOptSettings: updatePracticeNetworkOptSettings,
      updatePracticeNPUGroupName: updatePracticeNPUGroupName,
      updatePracticeNPUGroupQuotas: updatePracticeNPUGroupQuotas,
      updatePracticeNumberofSegments: updatePracticeNumberofSegments,
      updatePracticeBestAvailableRange: updatePracticeBestAvailableRange,
      updatePracticeBestAvailOptions: updatePracticeBestAvailOptions,
      updatePracticeBodyPartFiltering: updatePracticeBodyPartFiltering,
      updatePracticeRefProviderReq: updatePracticeRefProviderReq,
      updatePracticeLocationDistanceSort: updatePracticeLocationDistanceSort,
      updatePracticeLocationDistanceOpt: updatePracticeLocationDistanceOpt,
      updatePracticeSpecificDateLookBack: updatePracticeSpecificDateLookBack,
      updatePracticeSpecificDateOptions: updatePracticeSpecificDateOptions,
      updatePracticeSpecificDateOrigin: updatePracticeSpecificDateOrigin,
      updatePracticeSpecificDateRange: updatePracticeSpecificDateRange,
      updatePracticeOverrideApptType: updatePracticeOverrideApptType,
      updatePracticeOverrideSetting: updatePracticeOverrideSetting,
      updatePracticeProviderModifier: updatePracticeProviderModifier,
      updatePracticeDirectScheduling: updatePracticeDirectScheduling,
      updatePracticeWeightsOptPreferences: updatePracticeWeightsOptPreferences,
      validatePracticeCPT: validatePracticeCPT,
      updatePracticePatientFacingSettings: updatePracticePatientFacingSettings,
      getPracticeAdminPatientFacingSettings: getPracticeAdminPatientFacingSettings,
      prepopulateGaurantors: prepopulateGaurantors,
      doDeletePracticeGaurantor: doDeletePracticeGaurantor,
      docheckPracticeDisplayName: docheckPracticeDisplayName,
      checkPracticeDirectSchedulingAccess:checkPracticeDirectSchedulingAccess,
      getPracticeProactiveCoordinators:getPracticeProactiveCoordinators
    };
    return adminServicesFunctions;

    /*************************************************************************
     * Admin Service Functions
     *************************************************************************/
     function checkPracticeDirectSchedulingAccess(){
      var directSchedulingAccessPromise = $q.defer(); /* Create service promise */
      $http({ method : 'GET', url : 'opargoapp/admin/isDirectSchedulingPractice',
              headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(directSchedulingAccessResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(directSchedulingAccessResponse, true));
            if(directSchedulingAccessResponse.data.response.status === "success") {
                directSchedulingAccessPromise.resolve(directSchedulingAccessResponse.data.response);
            } else {
                directSchedulingAccessPromise.resolve(false);

            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Check Direct Scheduling Access for Practice Service: Opargoapp Connection Error");
            directSchedulingAccessPromise.reject(MESSAGES.ERROR);
          });
      return directSchedulingAccessPromise.promise;

    }
     function doDeletePracticeGaurantor(gaurantor) {
      var deletePracticeGaurantorsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeGaurantor");
      $http({ method : 'POST', url : 'opargoapp/admin/deletePracticeGaurantor',
        data: {
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'gaurantor' : gaurantor
        }})
        .then(function successCallback(deletePracticeGaurantorResponse) { /*Promise Successful */

            if(deletePracticeGaurantorResponse.data.response.status === "success") {
              deletePracticeGaurantorsPromise.resolve();
            } else { deletePracticeGaurantorsPromise.reject(deletePracticeGaurantorResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Body Part Service: Opargoapp Connection Error");
            deletePracticeGaurantorsPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeGaurantorsPromise.promise;
    }


    function docheckPracticeDisplayName(practicePatientFacingSettingsObj) {
      var checkPracticeDisplayNamePromise = $q.defer(); /* Create service promise */
      $http({ method : 'GET', url : 'opargoapp/admin/checkPracticeDisplayName',
              headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_displayName' : practicePatientFacingSettingsObj.practicedisplayname,
              'session' : SessionServices.getSessionId(),
              'practice_id' : SessionServices.getCurrentPractice().practice_id
        }}).then(function successCallback(checkPracticeDisplayNameResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(checkPracticeDisplayNameResponse, true));
            if(checkPracticeDisplayNameResponse.data.response.status === "success") {
              checkPracticeDisplayNamePromise.resolve(checkPracticeDisplayNameResponse.data.response);
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Admin Service for check the practice display name for direct scheduling : Opargoapp Connection Error");
            checkPracticeDisplayNamePromise.reject(MESSAGES.ERROR);
          });
      return checkPracticeDisplayNamePromise.promise;
    }


     function prepopulateGaurantors() {
      var prepopulateGaurantorsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulateGaurantors");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateGaurantors',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulateGaurantorsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulateGaurantorsResponse, true));
            if(prepopulateGaurantorsResponse.data.response.status === "success") {
              prepopulateGaurantorsPromise.resolve();
            } else { prepopulateGaurantorsPromise.reject(prepopulateGaurantorsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Referring Providers Service: Opargoapp Connection Error");
            prepopulateGaurantorsPromise.reject(MESSAGES.ERROR);
          });
      return prepopulateGaurantorsPromise.promise;
    }

     function generatePracticeToken() {
      var getPracticePromise = $q.defer(); /* Create service promise */
      $http({ method : 'GET', url : 'opargoapp/admin/generatePracticeToken',
              headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(getPracticeDetailsResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeDetailsResponse, true));
            if(getPracticeDetailsResponse.data.response.status === "success") {
              getPracticePromise.resolve(getPracticeDetailsResponse.data.response);
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Admin Service to generate the practice token for direct scheduling : Opargoapp Connection Error");
            getPracticePromise.reject(MESSAGES.ERROR);
          });
      return getPracticePromise.promise;
    }


    function getPracticeToken() {
      var getPracticePromise = $q.defer(); /* Create service promise */
      $http({ method : 'GET', url : 'opargoapp/admin/getPracticeToken',
              headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(getPracticeDetailsResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeDetailsResponse, true));
            if(getPracticeDetailsResponse.data.response.status === "success") {
              getPracticePromise.resolve(getPracticeDetailsResponse.data.response);
            } else {
              if(getPracticeDetailsResponse.data.response.message == "practice_not_found") {
                getPracticePromise.resolve(false);
              }
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Admin Service to get the practice token for DS : Opargoapp Connection Error");
            getPracticePromise.reject(MESSAGES.ERROR);
          });
      return getPracticePromise.promise;
    }

    function addAcceptedInsurancesByLocation(locationId, insuranceList) {
      var addAcceptedInsurancesByLocationPromise = $q.defer(); /* Create service promise */
      var insuranceIdList = []; /* CPTs to add to activity */
      angular.forEach(insuranceList, function(insurance) {
        insuranceIdList.push(insurance.id);
      });
      $log.debug("SERVICE CALLED: app.userService.addAcceptedInsurancesByLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/addLocationAcceptedInsurances',
        data : { 'location_id': locationId,
             'loc_ins_list': insuranceIdList},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addAcceptedInsurancesByLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addAcceptedInsurancesByLocationResponse, true));
            if(addAcceptedInsurancesByLocationResponse.data.response.status === "success") {
              addAcceptedInsurancesByLocationPromise.resolve();
            } else { addAcceptedInsurancesByLocationPromise.reject(addAcceptedInsurancesByLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add accepted practice insurances by location service: Opargoapp Connection Error");
            addAcceptedInsurancesByLocationPromise.reject(MESSAGES.ERROR);
          });
      return addAcceptedInsurancesByLocationPromise.promise;
    }

    function addAcceptedInsurancesByProvider(providerId, insuranceList) {
      var addAcceptedInsurancesByProviderPromise = $q.defer(); /* Create service promise */
      var insuranceIdList = []; /* CPTs to add to activity */
      angular.forEach(insuranceList, function(insurance) {
        insuranceIdList.push(insurance.id);
      });
      $log.debug("SERVICE CALLED: app.userService.addAcceptedInsurancesByProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/addProviderAcceptedInsurances',
        data : { 'provider_id': providerId,
             'prov_ins_list': insuranceIdList},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addAcceptedInsurancesByProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addAcceptedInsurancesByProviderResponse, true));
            if(addAcceptedInsurancesByProviderResponse.data.response.status === "success") {
               addAcceptedInsurancesByProviderPromise.resolve();
            } else { addAcceptedInsurancesByProviderPromise.reject(addAcceptedInsurancesByProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add accepted practice insurances by provider service: Opargoapp Connection Error");
            addAcceptedInsurancesByProviderPromise.reject(MESSAGES.ERROR);
          });
      return addAcceptedInsurancesByProviderPromise.promise;
    }

    function addOpargoPractice(addPracticeFormObj) {
      var addOpargoPracticePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addOpargoPractice");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/addPractice',
        data : { 'addPracticeObj': addPracticeFormObj },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addOpargoPracticeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addOpargoPracticeResponse, true));
            if(addOpargoPracticeResponse.data.response.status === "success") {
              addOpargoPracticePromise.resolve(MESSAGES.SUCCESS);
            } else { addOpargoPracticePromise.reject(addOpargoPracticeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Opargo Practice Service: Opargoapp Connection Error");
            addOpargoPracticePromise.reject(MESSAGES.ERROR);
          });
      return addOpargoPracticePromise.promise;
    }

    function addPracticeActivity(practiceActivityObj) {
      var cptToAddArr = []; /* CPTs to add to activity */
      angular.forEach(practiceActivityObj.practice_cpts, function(cpt) {
        cptToAddArr.push(cpt.id);
      });
      var addPracticeActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/addPracticeActivity',
        data: {
          "activity_name": practiceActivityObj.name,
          "display_name": practiceActivityObj.display_name,
          "pms_activity_name": practiceActivityObj.pms_activity_name,
          "best_avail_range": practiceActivityObj.best_avail_range,
          "min_book_waittime": practiceActivityObj.min_book_waittime,
          "pms_override_name_id": practiceActivityObj.pms_override_name_id,
          "activity_type_id": practiceActivityObj.cpt_type_id,
          "total_block": practiceActivityObj.num_blocks,
          "network_optimizer_enabled": (!Utils.isUndefinedOrNull(practiceActivityObj.network_optimizer_enabled) ? practiceActivityObj.network_optimizer_enabled : false),
          "activity_prac_cpt_ids": cptToAddArr
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeActivityResponse, true));
            if(addPracticeActivityResponse.data.response.status === "success") {
              addPracticeActivityPromise.resolve(MESSAGES.SUCCESS);
            } else { addPracticeActivityPromise.reject(addPracticeActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Activity Service: Opargoapp Connection Error");
            addPracticeActivityPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeActivityPromise.promise;
    }

    function addPracticeBodyPart(practiceBodyPart) {
      var addPracticeBodyPartPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeBodyPart");
      $http({ method : 'POST', url : 'opargoapp/admin/addBodyPart',
        data : { 'bodypart' : practiceBodyPart },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeBodyPartResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeBodyPartResponse, true));
            if(addPracticeBodyPartResponse.data.response.status === "success") {
              addPracticeBodyPartPromise.resolve();
            } else { addPracticeBodyPartPromise.reject(addPracticeBodyPartResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Body Part Service: Opargoapp Connection Error");
            addPracticeBodyPartPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeBodyPartPromise.promise;
    }

    function addPracticeCPT(addPracticeCPTObj) {
      var addPracticeCPTPromise = $q.defer(); /* Create service promise */
      var insurance_revenue_array = [];
      angular.forEach(addPracticeCPTObj.ins_revs, function(ins_rev) {
        insurance_revenue_array.push({
                        "practiceInsuranceProviderId": ins_rev.id,
                        "expectedRevenuePerVisit": ins_rev.expected_revenue_per_visit
                      });
      });
      $log.debug("SERVICE CALLED: app.adminService.addPracticeCPT");
      $http({ method : 'POST', url : 'opargoapp/admin/addCpt',
        data : { 'cpt_code' : addPracticeCPTObj.cpt_code,
             'cpt_type_id' : addPracticeCPTObj.cpt_type_id,
             'patient_percentage' : addPracticeCPTObj.patient_percentage,
             'practice_cpt_insurances' : insurance_revenue_array },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeCPTResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeCPTResponse, true));
            if(addPracticeCPTResponse.data.response.status === "success") {
              addPracticeCPTPromise.resolve();
            } else { addPracticeCPTPromise.reject(addPracticeCPTResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice CPT Service: Opargoapp Connection Error");
            addPracticeCPTPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeCPTPromise.promise;
    }

    function addPracticeGroup(practiceGroupName, practiceId) {
      var requestBody = { 'practice_group_name' : practiceGroupName,
          'practice_id' : practiceId };
      return postResults("opargoapp/opargoAdmin/addPracticeGroup", requestBody);
    }

    function addPracticeGroupSite(practiceGroupId, practiceId) {
      var requestBody = { 'practice_group_id' : practiceGroupId,
          'practice_id' : practiceId };
      return postResults("opargoapp/opargoAdmin/addPracticeGroupPractice", requestBody);
    }

    function addPracticeNetworkOptProvider(providerId) {
      var addPracticeNetworkOptProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNetworkOptProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/addNetworkOptProvider',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNetworkOptProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNetworkOptProviderResponse, true));
            if(addPracticeNetworkOptProviderResponse.data.response.status === "success") {
              addPracticeNetworkOptProviderPromise.resolve();
            } else { addPracticeNetworkOptProviderPromise.reject(addPracticeNetworkOptProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice NPU Group Service: Opargoapp Connection Error");
            addPracticeNetworkOptProviderPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNetworkOptProviderPromise.promise;
    }

    function addPracticeNetworkOptProviderAppt(providerId, activityId) {
      var addPracticeNetworkOptProviderApptPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNetworkOptProviderAppt");
      $http({ method : 'POST', url : 'opargoapp/admin/addNetworkOptProviderAppointment',
        data : { 'provider_id' : providerId,
             'activity_id' : activityId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNetworkOptProviderApptResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNetworkOptProviderApptResponse, true));
            if(addPracticeNetworkOptProviderApptResponse.data.response.status === "success") {
              addPracticeNetworkOptProviderApptPromise.resolve();
            } else { addPracticeNetworkOptProviderApptPromise.reject(addPracticeNetworkOptProviderApptResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Network Opt Provider Appt Service: Opargoapp Connection Error");
            addPracticeNetworkOptProviderApptPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNetworkOptProviderApptPromise.promise;
    }

    function addPracticeNetworkOptProviderRefProv(providerId, refProvId) {
      var addPracticeNetworkOptProviderRefProvPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNetworkOptProviderRefProv");
      $http({ method : 'POST', url : 'opargoapp/admin/addNetworkOptProviderRefProvider',
        data : { 'provider_id' : providerId,
             'referring_provider_id' : refProvId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNetworkOptProviderRefProvResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNetworkOptProviderRefProvResponse, true));
            if(addPracticeNetworkOptProviderRefProvResponse.data.response.status === "success") {
              addPracticeNetworkOptProviderRefProvPromise.resolve();
            } else { addPracticeNetworkOptProviderRefProvPromise.reject(addPracticeNetworkOptProviderRefProvResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Network Opt Provider Ref Prov Service: Opargoapp Connection Error");
            addPracticeNetworkOptProviderRefProvPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNetworkOptProviderRefProvPromise.promise;
    }

    function addPracticeNPUGroup(practiceNpuGroupName, practiceNpuGroupQuota, practiceNpuSafetyValve) {
      var addPracticeNPUGroupPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNPUGroup");
      $http({ method : 'POST', url : 'opargoapp/admin/addNpuGroup',
        data : { 'group_name' : practiceNpuGroupName,
             'group_quota' : practiceNpuGroupQuota,
             'group_safety_valve' : practiceNpuSafetyValve},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNPUGroupResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNPUGroupResponse, true));
            if(addPracticeNPUGroupResponse.data.response.status === "success") {
              addPracticeNPUGroupPromise.resolve();
            } else { addPracticeNPUGroupPromise.reject(addPracticeNPUGroupResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice NPU Group Service: Opargoapp Connection Error");
            addPracticeNPUGroupPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNPUGroupPromise.promise;
    }

    function addPracticeNPUGroupActivity(practiceNpuGroupId, practiceActivityId) {
      var addPracticeNPUGroupActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNPUGroupActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/addNpuGroupActivity',
        data : { 'activity_id': practiceActivityId,
             'group_id': practiceNpuGroupId},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNPUGroupActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNPUGroupActivityResponse, true));
            if(addPracticeNPUGroupActivityResponse.data.response.status === "success") {
              addPracticeNPUGroupActivityPromise.resolve();
            } else { addPracticeNPUGroupActivityPromise.reject(addPracticeNPUGroupActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice NPU Group Activity Service: Opargoapp Connection Error");
            addPracticeNPUGroupActivityPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNPUGroupActivityPromise.promise;
    }

    function addPracticeNPUGroupProvider(practiceNpuGroupId, practiceProviderId) {
      var addPracticeNPUGroupProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNPUGroupProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/addNpuGroupProvider',
        data : { 'provider_id': practiceProviderId,
             'group_id': practiceNpuGroupId},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNPUGroupProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNPUGroupProviderResponse, true));
            if(addPracticeNPUGroupProviderResponse.data.response.status === "success") {
              addPracticeNPUGroupProviderPromise.resolve();
            } else { addPracticeNPUGroupProviderPromise.reject(addPracticeNPUGroupProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice NPU Group Provider Service: Opargoapp Connection Error");
            addPracticeNPUGroupProviderPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNPUGroupProviderPromise.promise;
    }

    function addPracticeNpuWaitTimeReason(practiceNpuWaitTimeReason) {
      var addPracticeNpuWaitTimeReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeNpuWaitTimeReason");
      $http({ method : 'POST', url : 'opargoapp/admin/addNpuWaitTimeReason',
        data : { 'reason' : practiceNpuWaitTimeReason },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeNpuWaitTimeReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeNpuWaitTimeReasonResponse, true));
            if(addPracticeNpuWaitTimeReasonResponse.data.response.status === "success") {
              addPracticeNpuWaitTimeReasonPromise.resolve();
            } else { addPracticeNpuWaitTimeReasonPromise.reject(addPracticeNpuWaitTimeReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice NpuWaitTime Reason Service: Opargoapp Connection Error");
            addPracticeNpuWaitTimeReasonPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeNpuWaitTimeReasonPromise.promise;
    }

    function addPracticeOverrideApptType(practiceOverrideApptTypeObj) {
      var addPracticeOverrideApptTypePromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.addPracticeOverrideApptType");
      $http({ method : 'POST', url : 'opargoapp/admin/addOverrideAppointmentType',
        data : { 'pms_override_appt_type' : practiceOverrideApptTypeObj.pms_override_appt_type,
             'pms_override_appt_type_duration' : practiceOverrideApptTypeObj.pms_override_appt_type_duration,
             'enabled' : practiceOverrideApptTypeObj.enabled },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeOverrideApptTypeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeOverrideApptTypeResponse, true));
            if(addPracticeOverrideApptTypeResponse.data.response.status === "success") {
              addPracticeOverrideApptTypePromise.resolve(MESSAGES.SUCCESS);
            } else { addPracticeOverrideApptTypePromise.reject(addPracticeOverrideApptTypeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Override Settings Service: Opargoapp Connection Error");
            addPracticeOverrideApptTypePromise.reject(MESSAGES.ERROR);
          });
      return addPracticeOverrideApptTypePromise.promise;
    }

    function addPracticeOverrideReason(practiceOverrideReason) {
      var addPracticeOverrideReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeOverrideReason");
      $http({ method : 'POST', url : 'opargoapp/admin/addOverrideReason',
        data : { 'reason' : practiceOverrideReason },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeOverrideReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeOverrideReasonResponse, true));
            if(addPracticeOverrideReasonResponse.data.response.status === "success") {
              addPracticeOverrideReasonPromise.resolve();
            } else { addPracticeOverrideReasonPromise.reject(addPracticeOverrideReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Override Reason Service: Opargoapp Connection Error");
            addPracticeOverrideReasonPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeOverrideReasonPromise.promise;
    }

    function addPracticeProviderActivity(practiceProviderId, practiceActivityId) {
      var addPracticeProviderActivityPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.addPracticeProviderActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/addProviderActivity',
        data : { 'practice_provider_id': practiceProviderId,
             'practice_activity_id': practiceActivityId},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeProviderActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeProviderActivityResponse, true));
            if(addPracticeProviderActivityResponse.data.response.status === "success") {
              addPracticeProviderActivityPromise.resolve();
            } else { addPracticeProviderActivityPromise.reject(addPracticeProviderActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Provider Activity Service: Opargoapp Connection Error");
            addPracticeProviderActivityPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeProviderActivityPromise.promise;
    }

    function addPracticeProviderActivityLocation(practiceProviderActivityId, practiceLocationId) {
      var addPracticeProviderActivityLocationPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.addPracticeProviderActivityLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/addProviderActivityByLocation',
        data : { 'provider_activity_id': practiceProviderActivityId,
             'location_id': practiceLocationId},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeProviderActivityLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeProviderActivityLocationResponse, true));
            if(addPracticeProviderActivityLocationResponse.data.response.status === "success") {
              addPracticeProviderActivityLocationPromise.resolve();
            } else { addPracticeProviderActivityLocationPromise.reject(addPracticeProviderActivityLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Provider Activity Location Service: Opargoapp Connection Error");
            addPracticeProviderActivityLocationPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeProviderActivityLocationPromise.promise;
    }

    function addPracticeProviderBodyPart(practiceProviderId, practiceBodyPartId) {
      var addPracticeProviderBodyPartPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.addPracticeProviderBodyPart");
      $http({ method : 'POST', url : 'opargoapp/admin/addProviderBodyPart',
        data : { 'provider_id': practiceProviderId,
             'bodypart_id': practiceBodyPartId},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeProviderBodyPartResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeProviderBodyPartResponse, true));
            if(addPracticeProviderBodyPartResponse.data.response.status === "success") {
              addPracticeProviderBodyPartPromise.resolve();
            } else { addPracticeProviderBodyPartPromise.reject(addPracticeProviderBodyPartResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Provider Body Part Service: Opargoapp Connection Error");
            addPracticeProviderBodyPartPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeProviderBodyPartPromise.promise;
    }

    function addPracticeProviderReferringProvider(practiceProviderId, practiceReferringProviderId) {
      var addPracticeProviderReferringProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeProviderReferringProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/addProviderReferringProvider',
        data : { 'provider_id' : practiceProviderId,
             'referring_provider_id' : practiceReferringProviderId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeProviderReferringProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeProviderReferringProviderResponse, true));
            if(addPracticeProviderReferringProviderResponse.data.response.status === "success") {
              addPracticeProviderReferringProviderPromise.resolve();
            } else { addPracticeProviderReferringProviderPromise.reject(addPracticeProviderReferringProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Provider Referring Provider Service: Opargoapp Connection Error");
            addPracticeProviderReferringProviderPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeProviderReferringProviderPromise.promise;
    }

    function addPracticeReferringProvider(refProviderObj) {
      var addPracticeReferringProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.addPracticeReferringProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/addReferringProvider',
        data : { 'name' : refProviderObj.md_name },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(addPracticeReferringProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeReferringProviderResponse, true));
            if(addPracticeReferringProviderResponse.data.response.status === "success") {
              addPracticeReferringProviderPromise.resolve();
            } else { addPracticeReferringProviderPromise.reject(addPracticeReferringProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Add Practice Referring Provider Service: Opargoapp Connection Error");
            addPracticeReferringProviderPromise.reject(MESSAGES.ERROR);
          });
      return addPracticeReferringProviderPromise.promise;
    }

    function addPracticeUser(addPracticeUserObj) {
      var addPracticeUserPromise = $q.defer(); /* Create service promise */
      AuthenticationServices.passwordRegexCheck(addPracticeUserObj.password)
        .then(function successCallback() {
          if (Utils.isUndefinedOrNull(addPracticeUserObj.practice_id)) {
            addPracticeUserObj.practice_id = SessionServices.getCurrentPractice().practice_id;
          }
          $log.debug("SERVICE CALLED: app.adminService.addPracticeUser");
          $http({ method : 'POST', url : 'opargoapp/auth/addUser',
            data : { 'user_info' : addPracticeUserObj },
            headers : { 'username' : SessionServices.getCurrentUser().username,
                  'practice_id' : SessionServices.getCurrentPractice().practice_id,
                  'practice' : SessionServices.getCurrentPractice().practice_name,
                  'session' : SessionServices.getSessionId(),
                  'user_practice_id' : addPracticeUserObj.practice_id
            }})
            .then(function successCallback(addPracticeUserResponse) { /*Promise Successful */
                //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeUserResponse, true));
                if(addPracticeUserResponse.data.response.status === "success") {
                  addPracticeUserPromise.resolve();
                } else { /* Add practice user error */
                  if(addPracticeUserResponse.data.response.message === "User Already Present") {
                    addPracticeUserPromise.reject(MESSAGES.ADMINUSERNAMEEXISTS); /* Duplicate email */
                  } else if(addPracticeUserResponse.data.response.message === "Email already exists") {
                    addPracticeUserPromise.reject(MESSAGES.ADMINUSEREMAILEXISTS); /* Duplicate email */
                  } else { addPracticeUserPromise.reject(addPracticeUserResponse.data.response.message); }
                }
              }, function errorCallback() { /* Promise Failed */
                $log.warn("Add Practice User Service: Opargoapp Connection Error");
                addPracticeUserPromise.reject(MESSAGES.ERROR);
              });
        }, function(passwordRegexCheckResponse) {
          addPracticeUserPromise.reject(passwordRegexCheckResponse);
        });
      return addPracticeUserPromise.promise;
    }

    function addGroupPracticeUser(addGroupPracticeUserObj) {
      var requestBody = { 'user_info' : addGroupPracticeUserObj };
      return postResults("opargoapp/auth/addGroupUser", requestBody);
    }

    function checkForUsername(usernameToCheck) {
      var checkForUsernamePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.checkForUsername");
      $http({ method : 'POST', url : 'opargoapp/admin/user',
        data: {
          'user_name': usernameToCheck },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(checkForUsernameResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(checkForUsernameResponse, true));
            if(checkForUsernameResponse.data.response.status === "success") {
              checkForUsernamePromise.resolve(true);
            } else { checkForUsernamePromise.resolve(false); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Check For Username Service: Opargoapp Connection Error");
            checkForUsernamePromise.reject();
          });
      return checkForUsernamePromise.promise;
    }

    function deletePracticeActivity(practiceActivityId) {
      var deletePracticeActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/deletePracticeActivity',
        data: {
          "practice_id": SessionServices.getCurrentPractice().practice_id,
          "activity_id": practiceActivityId
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeActivityResponse, true));
            if(deletePracticeActivityResponse.data.response.status === "success") {
              deletePracticeActivityPromise.resolve();
            } else { deletePracticeActivityPromise.reject(deletePracticeActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Body Part Service: Opargoapp Connection Error");
            deletePracticeActivityPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeActivityPromise.promise;
    }

    function deletePracticeAdmin(practiceAdminId, adminPracticeId) {
      var deletePracticeAdminPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeAdmin");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/deleteAdmin',
        data: { 'admin_id' : practiceAdminId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : adminPracticeId
        }})
        .then(function successCallback(deletePracticeAdminResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeAdminResponse, true));
            if(deletePracticeAdminResponse.data.response.status === "success") {
              deletePracticeAdminPromise.resolve();
            } else { deletePracticeAdminPromise.reject(deletePracticeAdminResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Admin Service: Opargoapp Connection Error");
            deletePracticeAdminPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeAdminPromise.promise;
    }

    function deletePracticeManager(practiceManagerId, managerPracticeId) {
      var deletePracticeManagerPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeManager");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/deleteManager',
      data : {
           'practice_users_id' : practiceManagerId,
           'user_practice_id' : managerPracticeId },
      headers : { 'username' : SessionServices.getCurrentUser().username,
            'practice_id' : SessionServices.getCurrentPractice().practice_id,
            'session' : SessionServices.getSessionId(),
            'practice' : SessionServices.getCurrentPractice().practice_name
      }})
        .then(function successCallback(deletePracticeManagerResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeManagerResponse, true));
            if(deletePracticeManagerResponse.data.response.status === "success") {
              deletePracticeManagerPromise.resolve();
            } else { deletePracticeManagerPromise.reject(deletePracticeManagerResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Manager Service: Opargoapp Connection Error");
            deletePracticeManagerPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeManagerPromise.promise;
    }

    function deletePracticeBodyPart(practiceBodyPartId) {
      var deletePracticeBodyPartPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeBodyPart");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteBodyPart',
        data : { 'bodypart_id' : practiceBodyPartId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeBodyPartResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeBodyPartResponse, true));
            if(deletePracticeBodyPartResponse.data.response.status === "success") {
              deletePracticeBodyPartPromise.resolve();
            } else { deletePracticeBodyPartPromise.reject(deletePracticeBodyPartResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Body Part Service: Opargoapp Connection Error");
            deletePracticeBodyPartPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeBodyPartPromise.promise;
    }

    function deletePracticeCancelReason(practiceCancelReasonId) {
      var deletePracticeCancelReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeCancelReason");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteCancelReason',
        data: {
          'reason_id' : practiceCancelReasonId
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeCancelReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeCancelReasonResponse, true));
            if(deletePracticeCancelReasonResponse.data.response.status === "success") {
              deletePracticeCancelReasonPromise.resolve();
            } else { deletePracticeCancelReasonPromise.reject(deletePracticeCancelReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Cancel Reason Service: Opargoapp Connection Error");
            deletePracticeCancelReasonPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeCancelReasonPromise.promise;
    }

    function deletePracticeChangeReason(practiceChangeReasonId) {
      var deletePracticeChangeReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeChangeReason");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteChangeReason',
        data: {
          'reason_id' : practiceChangeReasonId
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeChangeReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeChangeReasonResponse, true));
            if(deletePracticeChangeReasonResponse.data.response.status === "success") {
              deletePracticeChangeReasonPromise.resolve();
            } else { deletePracticeChangeReasonPromise.reject(deletePracticeChangeReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Change Reason Service: Opargoapp Connection Error");
            deletePracticeChangeReasonPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeChangeReasonPromise.promise;
    }

    function deletePracticeCPT(practiceCPTId) {
      var deletePracticeCPTPromise = $q.defer(); /* Create service promise */
      var deletePracticeCPTData = {
                      "function": "delete_practice_cpt", /* Create post object */
                      "data": {
                        "practice_id": SessionServices.getCurrentPractice().practice_id,
                        "session": SessionServices.getSessionId(),
                        "practice_cpt_id": practiceCPTId
                      }
                    };
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeCPT");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteCpt',
        data: {
          'cpt_id' : practiceCPTId
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeCPTResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeCPTResponse, true));
            if(deletePracticeCPTResponse.data.response.status === "success") {
              deletePracticeCPTPromise.resolve();
            } else { deletePracticeCPTPromise.reject(deletePracticeCPTResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice CPT Service: Opargoapp Connection Error");
            deletePracticeCPTPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeCPTPromise.promise;
    }

    function deletePracticeEthnicity(practiceEthnicityId) {
      var deletePracticeEthnicityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeEthnicity");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteEthnicity',
        data: { 'ethnicity_id' : practiceEthnicityId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeEthnicityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeEthnicityResponse, true));
            if(deletePracticeEthnicityResponse.data.response.status === "success") {
              deletePracticeEthnicityPromise.resolve();
            } else { deletePracticeEthnicityPromise.reject(deletePracticeEthnicityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Ethnicity Service: Opargoapp Connection Error");
            deletePracticeEthnicityPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeEthnicityPromise.promise;
    }

    function deletePracticeGroupSite(practiceGroupId, practiceId) {
      var requestBody = { 'practice_group_id' : practiceGroupId,
          'practice_id' : practiceId };
      return postResults("opargoapp/opargoAdmin/removePracticeGroupPractice", requestBody);

    }

    function deletePracticeLocation(practiceLocation) {
      var deletePracticeLocationPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteLocation',
        data: { 'location_id' : practiceLocation.id,
            'address_id' : practiceLocation.address_id },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeLocationResponse, true));
            if(deletePracticeLocationResponse.data.response.status === "success") {
              deletePracticeLocationPromise.resolve();
            } else { deletePracticeLocationPromise.reject(deletePracticeLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Location Service: Opargoapp Connection Error");
            deletePracticeLocationPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeLocationPromise.promise;
    }

    function deletePracticeNetworkOptProvider(practiceProviderId) {
      var deletePracticeNetworkOptProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNetworkOptProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNetworkOptProvider',
        data : { 'provider_id': practiceProviderId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNetworkOptProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNetworkOptProviderResponse, true));
            if(deletePracticeNetworkOptProviderResponse.data.response.status === "success") {
              deletePracticeNetworkOptProviderPromise.resolve();
            } else { deletePracticeNetworkOptProviderPromise.reject(deletePracticeNetworkOptProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Network Provider Service: Opargoapp Connection Error");
            deletePracticeNetworkOptProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNetworkOptProviderPromise.promise;
    }

    function deletePracticeNetworkOptProviderActivity(providerId, activityId) {
      var deletePracticeNetworkOptProviderActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNetworkOptProviderActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNetworkOptProviderActivity',
        data : { 'provider_id': providerId,
             'activity_id' : activityId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNetworkOptProviderActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNetworkOptProviderActivityResponse, true));
            if(deletePracticeNetworkOptProviderActivityResponse.data.response.status === "success") {
              deletePracticeNetworkOptProviderActivityPromise.resolve();
            } else { deletePracticeNetworkOptProviderActivityPromise.reject(deletePracticeNetworkOptProviderActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Network Provider Activity Service: Opargoapp Connection Error");
            deletePracticeNetworkOptProviderActivityPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNetworkOptProviderActivityPromise.promise;
    }

    function deletePracticeNetworkOptProviderRefProvider(providerId, refProvId) {
      var deletePracticeNetworkOptProviderRefProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNetworkOptProviderRefProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNetworkOptProviderRefProvider',
        data : { 'provider_id': providerId,
             'referring_provider_id' : refProvId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNetworkOptProviderRefProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNetworkOptProviderRefProviderResponse, true));
            if(deletePracticeNetworkOptProviderRefProviderResponse.data.response.status === "success") {
              deletePracticeNetworkOptProviderRefProviderPromise.resolve();
            } else { deletePracticeNetworkOptProviderRefProviderPromise.reject(deletePracticeNetworkOptProviderRefProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Network Provider Ref Provider Service: Opargoapp Connection Error");
            deletePracticeNetworkOptProviderRefProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNetworkOptProviderRefProviderPromise.promise;
    }

    function deletePracticeNPUGroup(practiceNpuGroupId) {
      var deletePracticeNPUGroupPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNPUGroup");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNpuGroup',
        data : { 'group_id': practiceNpuGroupId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNPUGroupResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNPUGroupResponse, true));
            if(deletePracticeNPUGroupResponse.data.response.status === "success") {
              deletePracticeNPUGroupPromise.resolve();
            } else { deletePracticeNPUGroupPromise.reject(deletePracticeNPUGroupResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice NPU Group Service: Opargoapp Connection Error");
            deletePracticeNPUGroupPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNPUGroupPromise.promise;
    }

    function deletePracticeNPUGroupActivity(practiceNpuGroupActivityId) {
      var deletePracticeNPUGroupActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNPUGroupActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNpuGroupActivity',
        data : { 'activity_id': practiceNpuGroupActivityId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNPUGroupActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNPUGroupActivityResponse, true));
            if(deletePracticeNPUGroupActivityResponse.data.response.status === "success") {
              deletePracticeNPUGroupActivityPromise.resolve();
            } else { deletePracticeNPUGroupActivityPromise.reject(deletePracticeNPUGroupActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice NPU Group Activity Service: Opargoapp Connection Error");
            deletePracticeNPUGroupActivityPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNPUGroupActivityPromise.promise;
    }

    function deletePracticeNPUGroupProvider(practiceNpuGroupProviderId, providerId) {
      var deletePracticeNPUGroupProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNPUGroupProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNpuGroupProvider',
        data : { 'id': practiceNpuGroupProviderId,
             'provider_id': providerId
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNPUGroupProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNPUGroupProviderResponse, true));
            if(deletePracticeNPUGroupProviderResponse.data.response.status === "success") {
              deletePracticeNPUGroupProviderPromise.resolve();
            } else { deletePracticeNPUGroupProviderPromise.reject(deletePracticeNPUGroupProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice NPU Group Provider Service: Opargoapp Connection Error");
            deletePracticeNPUGroupProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNPUGroupProviderPromise.promise;
    }

    function deletePracticeNpuWaitTimeReason(practiceNpuWaitTimeReasonId) {
      var deletePracticeNpuWaitTimeReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeNpuWaitTimeReason");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteNpuWaitTimeReason',
        data : { 'reason_id' : practiceNpuWaitTimeReasonId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeNpuWaitTimeReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeNpuWaitTimeReasonResponse, true));
            if(deletePracticeNpuWaitTimeReasonResponse.data.response.status === "success") {
              deletePracticeNpuWaitTimeReasonPromise.resolve();
            } else { deletePracticeNpuWaitTimeReasonPromise.reject(deletePracticeNpuWaitTimeReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice NpuWaitTime Reason Service: Opargoapp Connection Error");
            deletePracticeNpuWaitTimeReasonPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeNpuWaitTimeReasonPromise.promise;
    }

    function deletePracticeOverrideApptType(practiceOverrideApptTypeObj) {
      var deletePracticeOverrideApptTypePromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/deleteOverrideAppointmentType',
        data : { 'id' : practiceOverrideApptTypeObj.id },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeOverrideApptTypeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeOverrideApptTypeResponse, true));
            if(deletePracticeOverrideApptTypeResponse.data.response.status === "success") {
              deletePracticeOverrideApptTypePromise.resolve(MESSAGES.SUCCESS);
            } else { deletePracticeOverrideApptTypePromise.reject(deletePracticeOverrideApptTypeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Override Settings Service: Opargoapp Connection Error");
            deletePracticeOverrideApptTypePromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeOverrideApptTypePromise.promise;
    }

    function deletePracticeOverrideReason(practiceOverrideReasonId) {
      var deletePracticeOverrideReasonPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeOverrideReason");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteOverrideReason',
        data : { 'reason_id' : practiceOverrideReasonId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeOverrideReasonResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeOverrideReasonResponse, true));
            if(deletePracticeOverrideReasonResponse.data.response.status === "success") {
              deletePracticeOverrideReasonPromise.resolve();
            } else { deletePracticeOverrideReasonPromise.reject(deletePracticeOverrideReasonResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Override Reason Service: Opargoapp Connection Error");
            deletePracticeOverrideReasonPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeOverrideReasonPromise.promise;
    }

    function deletePracticeProvider(practiceProviderId) {
      var deletePracticeProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProvider',
        data : { 'provider_id' : practiceProviderId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeProviderResponse, true));
            if(deletePracticeProviderResponse.data.response.status === "success") {
              deletePracticeProviderPromise.resolve();
            } else { deletePracticeProviderPromise.reject(deletePracticeProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Provider Service: Opargoapp Connection Error");
            deletePracticeProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeProviderPromise.promise;
    }

    function deletePracticeProviderActivity(practiceProviderActivityId) {
      var deletePracticeProviderActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeProviderActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProviderActivity',
        data : { 'practice_provider_activity_id': practiceProviderActivityId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeProviderActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeProviderActivityResponse, true));
            if(deletePracticeProviderActivityResponse.data.response.status === "success") {
              deletePracticeProviderActivityPromise.resolve();
            } else { deletePracticeProviderActivityPromise.reject(deletePracticeProviderActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Provider Activity Service: Opargoapp Connection Error");
            deletePracticeProviderActivityPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeProviderActivityPromise.promise;
    }

    function deletePracticeProviderActivityLocation(practiceProviderActivityLocationId) {
      var deletePracticeProviderActivityLocationPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeProviderActivityLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProviderActivityByLocation',
        data : { 'provider_activity_loc_id' :practiceProviderActivityLocationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeProviderActivityLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeProviderActivityLocationResponse, true));
            if(deletePracticeProviderActivityLocationResponse.data.response.status === "success") {
              deletePracticeProviderActivityLocationPromise.resolve();
            } else { deletePracticeProviderActivityLocationPromise.reject(deletePracticeProviderActivityLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Provider Activity Location Service: Opargoapp Connection Error");
            deletePracticeProviderActivityLocationPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeProviderActivityLocationPromise.promise;
    }

    function deletePracticeProviderBodyPart(practiceProviderBodyPartId) {
      var deletePracticeProviderBodyPartPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeProviderBodyPart");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProviderBodyPart',
        data : { 'provider_bodypart_id' :practiceProviderBodyPartId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeProviderBodyPartResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeProviderBodyPartResponse, true));
            if(deletePracticeProviderBodyPartResponse.data.response.status === "success") {
              deletePracticeProviderBodyPartPromise.resolve();
            } else { deletePracticeProviderBodyPartPromise.reject(deletePracticeProviderBodyPartResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Provider Body Part Service: Opargoapp Connection Error");
            deletePracticeProviderBodyPartPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeProviderBodyPartPromise.promise;
    }

    function deletePracticeProviderReferringProvider(practiceProviderReferringProviderId) {
      var deletePracticeProviderReferringProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeProviderReferringProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProviderReferringProvider',
        data : { 'referring_provider_id' :practiceProviderReferringProviderId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeProviderReferringProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeProviderReferringProviderResponse, true));
            if(deletePracticeProviderReferringProviderResponse.data.response.status === "success") {
              deletePracticeProviderReferringProviderPromise.resolve();
            } else { deletePracticeProviderReferringProviderPromise.reject(deletePracticeProviderReferringProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Provider Referring Provider Service: Opargoapp Connection Error");
            deletePracticeProviderReferringProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeProviderReferringProviderPromise.promise;
    }

    function deletePracticeRace(practiceRaceId) {
      var deletePracticeRacePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeRace");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteRace',
        data: { 'race_id' : practiceRaceId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeRaceResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeRaceResponse, true));
            if(deletePracticeRaceResponse.data.response.status === "success") {
              deletePracticeRacePromise.resolve();
            } else { deletePracticeRacePromise.reject(deletePracticeRaceResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Race Service: Opargoapp Connection Error");
            deletePracticeRacePromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeRacePromise.promise;
    }

    function deletePracticeReferringProvider(practiceReferringProviderId) {
      var deletePracticeReferringProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeReferringProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteReferringProvider',
        data : { 'referring_provider_id' :practiceReferringProviderId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(deletePracticeReferringProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeReferringProviderResponse, true));
            if(deletePracticeReferringProviderResponse.data.response.status === "success") {
              deletePracticeReferringProviderPromise.resolve();
            } else { deletePracticeReferringProviderPromise.reject(deletePracticeReferringProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice Referring Provider Service: Opargoapp Connection Error");
            deletePracticeReferringProviderPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeReferringProviderPromise.promise;
    }

    function deletePracticeUser(practiceUserId, userName, isSSOUser) {
      var deletePracticeUserPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.deletePracticeUser");
      $http({ method : 'delete', url : 'opargoapp/admin/practiceUser',
        data : { 'sso_indicator' : isSSOUser,
             'practice_users_id' : practiceUserId,
             'username' : userName },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'practice' : SessionServices.getCurrentPractice().practice_name
        }})
        .then(function successCallback(deletePracticeUserResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(deletePracticeUserResponse, true));
            if(deletePracticeUserResponse.data.response.status === "success") {
              deletePracticeUserPromise.resolve();
            } else { deletePracticeUserPromise.reject(deletePracticeUserResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Delete Practice User Service: Opargoapp Connection Error");
            deletePracticeUserPromise.reject(MESSAGES.ERROR);
          });
      return deletePracticeUserPromise.promise;
    }

    function deleteGroupPracticeUser(practiceUserId, userName) {
      var requestBody = { 'practice_users_id' : practiceUserId,
          'username' : userName };
      return postResults("opargoapp/admin/deleteGroupPracticeUser", requestBody);
    }

    function downloadPracticeProviderInsuranceDetails() {
      var downloadPracticeProviderInsurancePromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/downloadPracticeProvidersInsuranceDetails',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        },
        responseType: 'arraybuffer'
      }).then(function successCallback(downloadPractProvInsResponse) { /*Promise Successful */
        var type = downloadPractProvInsResponse.headers('Content-Type');
        var disposition = downloadPractProvInsResponse.headers('Content-Disposition');
        var defaultFileName = "";
        if (disposition) {
          var match = disposition.match(/.*filename=\"?([^;\"]+)\"?.*/);
          if (match[1])
            defaultFileName = match[1];
        }
        defaultFileName = defaultFileName.replace(/[<>:"\/\\|?*]+/g, '_');
        var blob = new Blob([downloadPractProvInsResponse.data], { type: type });
        FileSaver.saveAs(blob, defaultFileName);
        return downloadPracticeProviderInsurancePromise.resolve();
      }, function errorCallback() { /* Promise Failed */
        $log.warn("Get Practice Provider Insurance Service: Opargoapp Connection Error");
        return downloadPracticeProviderInsurancePromise.reject(MESSAGE.ERROR);
      });
    }

    function editPracticeCPT(editPracticeCPTObj) {
      var editPracticeCPTPromise = $q.defer(); /* Create service promise */
      var insurance_revenue_array = [];
      angular.forEach(editPracticeCPTObj.ins_revs, function(ins_rev) {
        insurance_revenue_array.push({
                        "practiceInsuranceProviderId": ins_rev.id,
                        "id": ins_rev.practice_cpt_insurance_revenue_id,
                        "expectedRevenuePerVisit": ins_rev.expected_revenue_per_visit
                      });
      });
      $log.debug("SERVICE CALLED: app.adminService.editPracticeCPT");
      $http({ method : 'POST', url : 'opargoapp/admin/updateCpt',
        data : { 'id' : editPracticeCPTObj.id,
             'cpt_id' : editPracticeCPTObj.cpt_id,
             'cpt_type_id' : editPracticeCPTObj.cpt_type_id,
             'patient_percentage' : editPracticeCPTObj.patient_percentage,
             'practice_cpt_insurances' : insurance_revenue_array },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(editPracticeCPTResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(editPracticeCPTResponse, true));
            if(editPracticeCPTResponse.data.response.status === "success") {
              editPracticeCPTPromise.resolve();
            } else { editPracticeCPTPromise.reject(editPracticeCPTResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Edit Practice CPT Service: Opargoapp Connection Error");
            editPracticeCPTPromise.reject(MESSAGES.ERROR);
          });
      return editPracticeCPTPromise.promise;
    }

    function editProvLocCPT(editPracticeCPTObj) {
      var editProvLocCPTPromise = $q.defer(); /* Create service promise */
      var insurance_revenue_array = [];
      angular.forEach(editPracticeCPTObj.ins_providers, function(ins_rev) {
        insurance_revenue_array.push({
                        "providerId": editPracticeCPTObj.provider_id,
                        "locationId": editPracticeCPTObj.location_id,
                        "cptId": editPracticeCPTObj.cpt_id,
                        "occPercentage": ins_rev.occ_percentage,
                        "insProviderId": ins_rev.insurance_provider_id
                      });
      });
      $log.debug("SERVICE CALLED: app.adminService.editProvLocCPT");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProvLocCpt',
        data : { 'prov_loc_cpt_insurances' : insurance_revenue_array },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(editProvLocCPTResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(editProvLocCPTResponse, true));
            if(editProvLocCPTResponse.data.response.status === "success") {
              editProvLocCPTPromise.resolve();
            } else { editProvLocCPTPromise.reject(editProvLocCPTResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Edit Provider Location CPT Service: Opargoapp Connection Error");
            editProvLocCPTPromise.reject(MESSAGES.ERROR);
          });
      return editProvLocCPTPromise.promise;
    }

    function editPracticePayer(editPracticePayerObj) {
      var editPracticePayerPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.editPracticePayer");
      $http({ method : 'POST', url : 'opargoapp/admin/updatePayer',
        data : { 'practice_payer_id' : editPracticePayerObj.id,
             'payer_id' : editPracticePayerObj.insurance_provider_id,
             'reimbursement_days' : editPracticePayerObj.reimbursement_days,
             'patient_percentage' : editPracticePayerObj.patient_percentage,
             'reimbursement_percentage' : editPracticePayerObj.reimbursement_percentage },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(editPracticePayerResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(editPracticePayerResponse, true));
            if(editPracticePayerResponse.data.response.status === "success") {
              editPracticePayerPromise.resolve();
            } else { editPracticePayerPromise.reject(editPracticePayerResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Edit Practice Payer Service: Opargoapp Connection Error");
            editPracticePayerPromise.reject(MESSAGES.ERROR);
          });
      return editPracticePayerPromise.promise;
    }

    function editPracticeUser(editPracticeUserObj) {
      var editPracticeUserPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.editPracticeUser");
      getClientIpAddress()
        .then(function successCallback(getClientIpAddressResults) {
      $http({ method : 'POST', url : 'opargoapp/admin/updatePracticeUser',
        data : { 'id' : editPracticeUserObj.id,
             'email' : editPracticeUserObj.email,
             'override_permission' : editPracticeUserObj.override_permission,
             'is_sso' : editPracticeUserObj.is_sso,
             'firstname' : editPracticeUserObj.firstname,
             'lastname' : editPracticeUserObj.lastname,
             'username' : editPracticeUserObj.username,
             'patientNumber' : !Utils.isUndefinedOrNull(editPracticeUserObj.patientNumber) ?
                 editPracticeUserObj.patientNumber : "",
             'userrole' : editPracticeUserObj.userrole,
             'reCaptchaResponse' : editPracticeUserObj.reCaptchaResponse,
             'ip_address' : getClientIpAddressResults},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'user_practice_id' : !Utils.isUndefinedOrNull(editPracticeUserObj.practice) ? editPracticeUserObj.practice.id : editPracticeUserObj.practice,
              'practice' : SessionServices.getCurrentPractice().practice_name,
              'user_practice' : !Utils.isUndefinedOrNull(editPracticeUserObj.practice) ? editPracticeUserObj.practice.practice_name : editPracticeUserObj.practice,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(editPracticeUserResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(editPracticeUserResponse, true));
            if(editPracticeUserResponse.data.response.status === "success") {
              editPracticeUserPromise.resolve();
            } else {
              if(editPracticeUserResponse.data.response.message === "recaptcha_failed") {
                editPracticeUserResponse.reject("Please complete the reCaptcha.");
              } else if(editPracticeUserResponse.data.response.message === "User with email already exists") {
                editPracticeUserPromise.reject(MESSAGES.ADMINUSEREMAILEXISTS);
              } else { editPracticeUserPromise.reject(editPracticeUserResponse.data.response.message); }
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Edit Practice User Service: Opargoapp Connection Error");
            editPracticeUserPromise.reject(MESSAGES.ERROR);
          });
      }, function errorCallback() {
        /* Should not happen */
      });
      return editPracticeUserPromise.promise;
    }

    function editGroupPracticeUser(editGroupPracticeUserObj) {
      var requestBody = { 'id' : editGroupPracticeUserObj.user_id,
           'email' : editGroupPracticeUserObj.email,
           'override_permission' : editGroupPracticeUserObj.override_permission,
           'username' : editGroupPracticeUserObj.username };
      return postResults("opargoapp/admin/updateGroupPracticeUser", requestBody);
    }

    function getAcceptedInsurancesByLocation(locationId) {
      var getAcceptedInsurancesByLocationPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.getAcceptedInsurancesByLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/acceptedInsurancesByLocation',
        data : { 'location_id': locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getAcceptedInsurancesByLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getAcceptedInsurancesByLocationResponse, true));
            if(getAcceptedInsurancesByLocationResponse.data.response.status === "success") {
              if(angular.isArray(getAcceptedInsurancesByLocationResponse.data.response.accepted_insurances)) {
                getAcceptedInsurancesByLocationPromise.resolve(getAcceptedInsurancesByLocationResponse.data.response.accepted_insurances);
              } else { getAcceptedInsurancesByLocationPromise.resolve([]); }
            } else { getAcceptedInsurancesByLocationPromise.reject(getAcceptedInsurancesByLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get accepted practice insurances by location service: Opargoapp Connection Error");
            getAcceptedInsurancesByLocationPromise.reject(MESSAGES.ERROR);
          });
      return getAcceptedInsurancesByLocationPromise.promise;
    }

    function getAcceptedInsurancesByProvider(providerId) {
      var getAcceptedInsurancesByProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.getAcceptedInsurancesByProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/acceptedInsurancesByProvider',
        data : { 'provider_id': providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getAcceptedInsurancesByProviderResponse) { /*Promise Successful */
        //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getAcceptedInsurancesByProviderResponse, true));
        if(getAcceptedInsurancesByProviderResponse.data.response.status === "success") {
          if(angular.isArray(getAcceptedInsurancesByProviderResponse.data.response.accepted_insurances)) {
            getAcceptedInsurancesByProviderPromise.resolve(getAcceptedInsurancesByProviderResponse.data.response.accepted_insurances);
          } else { getAcceptedInsurancesByProviderPromise.resolve([]); }
        } else { getAcceptedInsurancesByProviderPromise.reject(getAcceptedInsurancesByProviderResponse.data.response.message); }
      }, function errorCallback() { /* Promise Failed */
        $log.warn("Get accepted practice insurances by provider service: Opargoapp Connection Error");
        getAcceptedInsurancesByProviderPromise.reject(MESSAGES.ERROR);
      });
      return getAcceptedInsurancesByProviderPromise.promise;
    }

    function getAcceptedInsurancesForAllProviders() {
      var getAcceptedInsurancesForAllProvidersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.getAcceptedInsurancesForAllProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/acceptedInsurances',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getAcceptedInsurancesForAllProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getAcceptedInsurancesForAllProvidersResponse, true));
            if(getAcceptedInsurancesForAllProvidersResponse.data.response.status === "success") {
              if(angular.isArray(getAcceptedInsurancesForAllProvidersResponse.data.response.insurances)) {
                getAcceptedInsurancesForAllProvidersPromise.resolve(getAcceptedInsurancesForAllProvidersResponse.data.response.insurances);
              } else { getAcceptedInsurancesForAllProvidersPromise.resolve([]); }
            } else { getAcceptedInsurancesForAllProvidersPromise.reject(getAcceptedInsurancesForAllProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get accepted practice insurances for all providers service: Opargoapp Connection Error");
            getAcceptedInsurancesForAllProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getAcceptedInsurancesForAllProvidersPromise.promise;
    }

    function getAvailableInsurancesByLocation(locationId) {
      var getAvailableInsurancesByLocationPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.getAvailableInsurancesByLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/availableInsurancesByLocation',
        data : { 'location_id': locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getAvailableInsurancesByLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getAvailableInsurancesByLocationResponse, true));
            if(getAvailableInsurancesByLocationResponse.data.response.status === "success") {
              if(angular.isArray(getAvailableInsurancesByLocationResponse.data.response.available_insurances)) {
                getAvailableInsurancesByLocationPromise.resolve(getAvailableInsurancesByLocationResponse.data.response.available_insurances);
              } else { getAvailableInsurancesByLocationPromise.resolve([]); }
            } else { getAvailableInsurancesByLocationPromise.reject(getAvailableInsurancesByLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get available practice insurances service: Opargoapp Connection Error");
            getAvailableInsurancesByLocationPromise.reject(MESSAGES.ERROR);
          });
      return getAvailableInsurancesByLocationPromise.promise;
    }

    function getAvailableInsurancesByProvider(providerId) {
      var getAvailableInsurancesByProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.getAvailableInsurancesByProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/availableInsurancesByProvider',
        data : { 'provider_id': providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getAvailableInsurancesByProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getAvailableInsurancesByProviderResponse, true));
            if(getAvailableInsurancesByProviderResponse.data.response.status === "success") {
              if(angular.isArray(getAvailableInsurancesByProviderResponse.data.response.available_insurances)) {
                getAvailableInsurancesByProviderPromise.resolve(getAvailableInsurancesByProviderResponse.data.response.available_insurances);
              } else { getAvailableInsurancesByProviderPromise.resolve([]); }
            } else { getAvailableInsurancesByProviderPromise.reject(getAvailableInsurancesByProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get available practice insurances service: Opargoapp Connection Error");
            getAvailableInsurancesByProviderPromise.reject(MESSAGES.ERROR);
          });
      return getAvailableInsurancesByProviderPromise.promise;
    }

    function getClientIpAddress() {
      var getClientIpAddressPromise = $q.defer();
      $http.get("https://myexternalip.com/json", {timeout: 1000})
        .then(function successCallback(getIpResult) {
          if(!Utils.isUndefinedOrNull(getIpResult.data)) {
            getClientIpAddressPromise.resolve(getIpResult.data.ip);
          } else { getClientIpAddressPromise.resolve("Failed to get IP"); }
        }, function errorCallback() {
          getClientIpAddressPromise.resolve("Failed to get IP");
        });
      return getClientIpAddressPromise.promise;
    }

    function getNonPracticeGroupsPractices() {
      return getResults("opargoapp/opargoAdmin/nonPracticeGroupsPractices");
    }

    function getOpargoPractices() {
      var getOpargoPracticesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getOpargoPractices");
      $http({ method : 'GET', url : 'opargoapp/opargoAdmin/practices',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getOpargoPracticesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getOpargoPracticesResponse, true));
            if(getOpargoPracticesResponse.data.response.status === "success") {
              getOpargoPracticesPromise.resolve(getOpargoPracticesResponse.data.response.practices);
            } else { getOpargoPracticesPromise.resolve(); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Opargo Practices Service: Opargoapp Connection Error");
            getOpargoPracticesPromise.reject(MESSAGES.ERROR);
          });
      return getOpargoPracticesPromise.promise;
    }

    function getOpargoPracticeSegmentSettings(practiceId) {
      var getOpargoPracticeSegmentSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getOpargoPracticeSegmentSettings");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/segmentOptPref',
        headers : { 'username' : SessionServices.getCurrentUser().username,
          'practice_id' : SessionServices.getCurrentPractice().practice_id,
          'session' : SessionServices.getSessionId(),
          'user_practice_id' : practiceId
        }})
        .then(function successCallback(getOpargoPracticeSegmentSettingsResponse) { /*Promise Successful */
          if(getOpargoPracticeSegmentSettingsResponse.data.response.status === "success") {
            getOpargoPracticeSegmentSettingsPromise.resolve(getOpargoPracticeSegmentSettingsResponse.data.response.segmentSettings);
          } else { getOpargoPracticeSegmentSettingsPromise.resolve(); }
        }, function errorCallback() { /* Promise Failed */
          $log.warn("Get Opargo Practices Segment Optimizer Service: Opargoapp Connection Error");
          getOpargoPracticeSegmentSettingsPromise.reject(MESSAGES.ERROR);
        });
      return getOpargoPracticeSegmentSettingsPromise.promise;
    }

    function getOpargoPracticeSettings(practiceId) {
      var getOpargoPracticeSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getOpargoPracticeSettings");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/weightsOptPref',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(getOpargoPracticeSettingsResponse) { /*Promise Successful */
            if(getOpargoPracticeSettingsResponse.data.response.status === "success") {
              getOpargoPracticeSettingsPromise.resolve(getOpargoPracticeSettingsResponse.data.response.practiceWeights);
            } else { getOpargoPracticeSettingsPromise.resolve(); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Opargo Practices Optimizer Service: Opargoapp Connection Error");
            getOpargoPracticeSettingsPromise.reject(MESSAGES.ERROR);
          });
      return getOpargoPracticeSettingsPromise.promise;
    }

    function getPmsEnv(pmsType) {
      var getPmsEnvPromise = $q.defer(); /* Create service promise */
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/pmsEnvironment',
        data: { 'pms_type' : pmsType },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPmsEnvResponse) { /*Promise Successful */
            if(getPmsEnvResponse.data.response.status === "success") {
              if(angular.isArray(getPmsEnvResponse.data.response.pmsInfo)) {
                getPmsEnvPromise.resolve(getPmsEnvResponse.data.response.pmsInfo);
              } else { getPmsEnvPromise.resolve([]); }
            } else { getPmsEnvPromise.reject(getPmsEnvResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Pms Environments Service: Opargoapp Connection Error");
            getPmsEnvPromise.reject(MESSAGES.ERROR);
          });
      return getPmsEnvPromise.promise;
    }

    function getPracticeAdmins(practiceId) {
      var getPracticeAdminsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeAdmins");
      $http({ method : 'GET', url : 'opargoapp/opargoAdmin/admins',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(getPracticeAdminsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeAdminsResponse, true));
            if(getPracticeAdminsResponse.data.response.status === "success") {
              getPracticeAdminsPromise.resolve(getPracticeAdminsResponse.data.response.practice_admins);
            } else { getPracticeAdminsPromise.reject(getPracticeAdminsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Admins Service: Opargoapp Connection Error");
            getPracticeAdminsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeAdminsPromise.promise;
    }

    function getPracticeManagers(practiceId) {
      var getPracticeManagersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeManagers");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/getManagers',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(getPracticeManagersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeManagersResponse, true));
            if(getPracticeManagersResponse.data.response.status === "success") {
              getPracticeManagersPromise.resolve(getPracticeManagersResponse.data.response.practice_managers);
            } else { getPracticeManagersPromise.reject(getPracticeManagersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Managers Service: Opargoapp Connection Error");
            getPracticeManagersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeManagersPromise.promise;
    }

    function getPracticeAvailableNetworkProviders() {
      var getPracticeAvailableNetworkProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeAvailableNetworkProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptEligibleProviders',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeAvailableNetworkProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeAvailableNetworkProvidersResponse, true));
            if(getPracticeAvailableNetworkProvidersResponse.data.response.status === "success") {
              getPracticeAvailableNetworkProvidersPromise.resolve(getPracticeAvailableNetworkProvidersResponse.data.response.providers);
            } else { getPracticeAvailableNetworkProvidersPromise.reject(getPracticeAvailableNetworkProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Available Network Providers Service: Opargoapp Connection Error");
            getPracticeAvailableNetworkProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeAvailableNetworkProvidersPromise.promise;
    }

    function getPracticeAvailableNetworkProviderActivities(providerId) {
      var getPracticeAvailableNetworkProviderActivitiesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeAvailableNetworkProviderActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptProviderAvailableActivities',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeAvailableNetworkProviderActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeAvailableNetworkProviderActivitiesResponse, true));
            if(getPracticeAvailableNetworkProviderActivitiesResponse.data.response.status === "success") {
              getPracticeAvailableNetworkProviderActivitiesPromise.resolve(getPracticeAvailableNetworkProviderActivitiesResponse.data.response.activities);
            } else { getPracticeAvailableNetworkProviderActivitiesPromise.reject(getPracticeAvailableNetworkProviderActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Available Network Providers Activities Service: Opargoapp Connection Error");
            getPracticeAvailableNetworkProviderActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeAvailableNetworkProviderActivitiesPromise.promise;
    }

    function getPracticeAvailableNetworkProviderRefProviders(providerId) {
      var getPracticeAvailableNetworkProviderRefProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeAvailableNetworkProviderRefProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptProviderAvailableRefProviders',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeAvailableNetworkProviderRefProvidersResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeAvailableNetworkProviderRefProvidersResponse, true));
            if(getPracticeAvailableNetworkProviderRefProvidersResponse.data.response.status === "success") {
              getPracticeAvailableNetworkProviderRefProvidersPromise.resolve(getPracticeAvailableNetworkProviderRefProvidersResponse.data.response.providers);
            } else { getPracticeAvailableNetworkProviderRefProvidersPromise.reject(getPracticeAvailableNetworkProviderRefProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Available Network Providers Ref Providers Service: Opargoapp Connection Error");
            getPracticeAvailableNetworkProviderRefProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeAvailableNetworkProviderRefProvidersPromise.promise;
    }

    function getPracticeCptDetailsByProviderAndLocation(providerId, locationId) {
      var getPracticeCptDetailsByProviderAndLocationPromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/cptDetailsByProviderAndLocation',
        data: { 'provider_id' : providerId, 'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeCptDetailsByProviderAndLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeCptDetailsByProviderAndLocationResponse, true));
            if(getPracticeCptDetailsByProviderAndLocationResponse.data.response.status === "success") {
              getPracticeCptDetailsByProviderAndLocationPromise.resolve(getPracticeCptDetailsByProviderAndLocationResponse.data.response.cptDetails);
            } else { getPracticeCptDetailsByProviderAndLocationPromise.reject(getPracticeCptDetailsByProviderAndLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Input Details Service: Opargoapp Connection Error");
            getPracticeCptDetailsByProviderAndLocationPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeCptDetailsByProviderAndLocationPromise.promise;
    }

    function getPracticeGroupAvailPractices(practiceGroupId, pmsType) {
      var requestBody = { 'practice_group_id' : practiceGroupId,
          'pms_type' : pmsType };
      return postResults("opargoapp/opargoAdmin/practiceGroupAvailPractices", requestBody);
    }

    function getPracticeGroupDetails(practiceGroupId) {
      var requestBody = { 'practice_group_id' : practiceGroupId };
      return postResults("opargoapp/opargoAdmin/practiceGroupDetails", requestBody);
    }

    function getPracticeGroups() {
      return getResults("opargoapp/opargoAdmin/practiceGroups");
    }

    function getPracticeGroupSettings() {
      return getResults("opargoapp/admin/practiceGroupSettings");
    }

    function getPracticeInputDetails() {
      var getPracticeInputDetailsPromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/practiceInputDetails',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeInputDetailsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeInputDetailsResponse, true));
            if(getPracticeInputDetailsResponse.data.response.status === "success") {
              getPracticeInputDetailsPromise.resolve(getPracticeInputDetailsResponse.data.response.practiceInputDetails);
            } else { getPracticeInputDetailsPromise.reject(getPracticeInputDetailsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Input Details Service: Opargoapp Connection Error");
            getPracticeInputDetailsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeInputDetailsPromise.promise;
    }

    function getPracticeInputDetailsOpargoAdmin(practiceId) {
      var getPracticeInputDetailsOpargoAdminPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeInputDetailsOpargoAdmin");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/practiceInputDetails',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(getPracticeInputDetailsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeInputDetailsResponse, true));
            if(getPracticeInputDetailsResponse.data.response.status === "success") {
              getPracticeInputDetailsOpargoAdminPromise.resolve(getPracticeInputDetailsResponse.data.response.practiceInputDetails);
            } else { getPracticeInputDetailsOpargoAdminPromise.reject(getPracticeInputDetailsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Input Details Service: Opargoapp Connection Error");
            getPracticeInputDetailsOpargoAdminPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeInputDetailsOpargoAdminPromise.promise;
    }

    function getPracticeLocationsTravelTimes() {
      var getPracticeLocationsTravelTimesPromise = $q.defer();
      $http({ method : 'GET', url : 'opargoapp/admin/locationsTravelTimes',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(getPracticeLocationsTravelTimesResponse) { /*Promise Successful */
            if(getPracticeLocationsTravelTimesResponse.data.response.status === "success") {
              getPracticeLocationsTravelTimesPromise.resolve(getPracticeLocationsTravelTimesResponse.data.response.result);
            } else { getPracticeLocationsTravelTimesPromise.reject(getPracticeLocationsTravelTimesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Locations Trave Times Service: Opargoapp Connection Error");
            getPracticeLocationsTravelTimesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeLocationsTravelTimesPromise.promise;
    }

    function getPracticeSelfConfigAbbreviations() {
        var getPracticeSelfConfigAbbreviationsPromise = $q.defer();
        $http({ method : 'POST', url : 'opargoapp/admin/selfConfigAbbreviations',
          headers : { 'username' : SessionServices.getCurrentUser().username,
                'practice_id' : SessionServices.getCurrentPractice().practice_id,
                'session' : SessionServices.getSessionId()
          }}).then(function successCallback(getPracticeSelfConfigAbbreviationsResponse) { /*Promise Successful */
              if(getPracticeSelfConfigAbbreviationsResponse.data.response.status === "success") {
                getPracticeSelfConfigAbbreviationsPromise.resolve(getPracticeSelfConfigAbbreviationsResponse.data.response.result);
              } else { getPracticeSelfConfigAbbreviationsPromise.reject(getPracticeSelfConfigAbbreviationsResponse.data.response.message); }
            }, function errorCallback() { /* Promise Failed */
              $log.warn("Get Practice Self Config Abbreviations Service: Opargoapp Connection Error");
              getPracticeSelfConfigAbbreviationsPromise.reject(MESSAGES.ERROR);
            });
        return getPracticeSelfConfigAbbreviationsPromise.promise;
    }

    function getPracticeNetworkOptActivities() {
      var getPracticeNetworkOptActivitiesPromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptActivities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(getPracticeNetworkOptActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNetworkOptActivitiesResponse, true));
            if(getPracticeNetworkOptActivitiesResponse.data.response.status === "success") {
              getPracticeNetworkOptActivitiesPromise.resolve(getPracticeNetworkOptActivitiesResponse.data.response.activities);
            } else { getPracticeNetworkOptActivitiesPromise.reject(getPracticeNetworkOptActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Network Opt Activities Service: Opargoapp Connection Error");
            getPracticeNetworkOptActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNetworkOptActivitiesPromise.promise;
    }

    function getPracticeNetworkOptProviderActivities(providerId) {
      var getPracticeNetworkOptProviderActivitiesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNetworkOptProviderActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptProviderActivities',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNetworkOptProviderActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNetworkOptProviderActivitiesResponse, true));
            if(getPracticeNetworkOptProviderActivitiesResponse.data.response.status === "success") {
              getPracticeNetworkOptProviderActivitiesPromise.resolve(getPracticeNetworkOptProviderActivitiesResponse.data.response.activities);
            } else { getPracticeNetworkOptProviderActivitiesPromise.reject(getPracticeNetworkOptProviderActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Network Opt Provider Activities Service: Opargoapp Connection Error");
            getPracticeNetworkOptProviderActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNetworkOptProviderActivitiesPromise.promise;
    }

    function getPracticeNetworkOptProviderRefProviders(providerId) {
      var getPracticeNetworkOptProviderRefProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNetworkOptProviderRefProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptProviderRefProviders',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNetworkOptProviderRefProvidersResponse) { /*Promise Successful */
            $log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNetworkOptProviderRefProvidersResponse, true));
            if(getPracticeNetworkOptProviderRefProvidersResponse.data.response.status === "success") {
              getPracticeNetworkOptProviderRefProvidersPromise.resolve(getPracticeNetworkOptProviderRefProvidersResponse.data.response.referringProviders);
            } else { getPracticeNetworkOptProviderRefProvidersPromise.reject(getPracticeNetworkOptProviderRefProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Network Opt Provider Ref Providers Service: Opargoapp Connection Error");
            getPracticeNetworkOptProviderRefProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNetworkOptProviderRefProvidersPromise.promise;
    }

    function getPracticeNetworkOptProviders() {
      var getPracticeNetworkOptProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNetworkOptProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/networkOptProviders',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNetworkOptProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNetworkOptProvidersResponse, true));
            if(getPracticeNetworkOptProvidersResponse.data.response.status === "success") {
              getPracticeNetworkOptProvidersPromise.resolve(getPracticeNetworkOptProvidersResponse.data.response.providers);
            } else { getPracticeNetworkOptProvidersPromise.reject(getPracticeNetworkOptProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Netowrk Optimization Providers Service: Opargoapp Connection Error");
            getPracticeNetworkOptProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNetworkOptProvidersPromise.promise;
    }

    function getPracticeNetworkOptSettings() {
      var getPracticeNetworkOptSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNetworkOptSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/isPracticeNetworkOptEnabled',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNetworkOptSettingsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNetworkOptSettingsResponse, true));
            if(getPracticeNetworkOptSettingsResponse.data.response.status === "success") {
              getPracticeNetworkOptSettingsPromise.resolve(getPracticeNetworkOptSettingsResponse.data.response.enabled);
            } else { getPracticeNetworkOptSettingsPromise.reject(getPracticeNetworkOptSettingsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Network Optimization Settings Service: Opargoapp Connection Error");
            getPracticeNetworkOptSettingsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNetworkOptSettingsPromise.promise;
    }

    function getPracticeNPUActivities() {
      var getPracticeNPUActivitiesPromise = $q.defer();
      $http({ method : 'POST', url : 'opargoapp/admin/npuActivities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }}).then(function successCallback(getPracticeNPUActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUActivitiesResponse, true));
            if(getPracticeNPUActivitiesResponse.data.response.status === "success") {
              getPracticeNPUActivitiesPromise.resolve(getPracticeNPUActivitiesResponse.data.response.activities);
            } else { getPracticeNPUActivitiesPromise.reject(getPracticeNPUActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice New Patient Unassigned Activities Service: Opargoapp Connection Error");
            getPracticeNPUActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUActivitiesPromise.promise;
    }

    function getPracticeNPUGroups() {
      var getPracticeNPUGroupsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNPUGroups");
      $http({ method : 'POST', url : 'opargoapp/admin/npuGroups',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNPUGroupsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUGroupsResponse, true));
            if(getPracticeNPUGroupsResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeNPUGroupsResponse.data.response.npu_groups)) {
                getPracticeNPUGroupsPromise.resolve(getPracticeNPUGroupsResponse.data.response.npu_groups);
              } else { getPracticeNPUGroupsPromise.resolve([]); }
            } else { getPracticeNPUGroupsPromise.reject(getPracticeNPUGroupsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice NPU Groups Service: Opargoapp Connection Error");
            getPracticeNPUGroupsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUGroupsPromise.promise;
    }

    function getPracticeNPUGroupActivities(practiceNpuGroupId) {
      var getPracticeNPUGroupActivitiesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNPUGroupActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/npuGroupActivities',
        data: { 'group_id' : practiceNpuGroupId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNPUGroupActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUGroupActivitiesResponse, true));
            if(getPracticeNPUGroupActivitiesResponse.data.response.status === "success") {
              getPracticeNPUGroupActivitiesPromise.resolve(getPracticeNPUGroupActivitiesResponse.data.response.activities);
            } else { getPracticeNPUGroupActivitiesPromise.reject(getPracticeNPUGroupActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice NPU Group Available Activities Service: Opargoapp Connection Error");
            getPracticeNPUGroupActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUGroupActivitiesPromise.promise;
    }

    function getPracticeNPUGroupAvailableActivities() {
      var getPracticeNPUGroupAvailableActivitiesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNPUGroupAvailableActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/npuGroupAvailableActivities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNPUGroupAvailableActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUGroupAvailableActivitiesResponse, true));
            if(getPracticeNPUGroupAvailableActivitiesResponse.data.response.status === "success") {
              getPracticeNPUGroupAvailableActivitiesPromise.resolve(getPracticeNPUGroupAvailableActivitiesResponse.data.response.activities);
            } else { getPracticeNPUGroupAvailableActivitiesPromise.reject(getPracticeNPUGroupAvailableActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice NPU Group Available Activities Service: Opargoapp Connection Error");
            getPracticeNPUGroupAvailableActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUGroupAvailableActivitiesPromise.promise;
    }

    function getPracticeNPUGroupAvailableProviders(practiceNpuGroupId) {
      var getPracticeNPUGroupAvailableProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNPUGroupAvailableProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/npuGroupAvailableProviders',
        data : { 'group_id' : practiceNpuGroupId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNPUGroupAvailableProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUGroupAvailableProvidersResponse, true));
            if(getPracticeNPUGroupAvailableProvidersResponse.data.response.status === "success") {
              getPracticeNPUGroupAvailableProvidersPromise.resolve(getPracticeNPUGroupAvailableProvidersResponse.data.response.providers);
            } else { getPracticeNPUGroupAvailableProvidersPromise.reject(getPracticeNPUGroupAvailableProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice NPU Group Available Providers Service: Opargoapp Connection Error");
            getPracticeNPUGroupAvailableProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUGroupAvailableProvidersPromise.promise;
    }

    function getPracticeNPUGroupProviders(practiceNpuGroupId) {
      var getPracticeNPUGroupProvidersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeNPUGroupProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/npuGroupProviders',
        data : { 'group_id' : practiceNpuGroupId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeNPUGroupProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeNPUGroupProvidersResponse, true));
            if(getPracticeNPUGroupProvidersResponse.data.response.status === "success") {
              getPracticeNPUGroupProvidersPromise.resolve(getPracticeNPUGroupProvidersResponse.data.response.providers);
            } else { getPracticeNPUGroupProvidersPromise.reject(getPracticeNPUGroupProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice NPU Group Providers Service: Opargoapp Connection Error");
            getPracticeNPUGroupProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeNPUGroupProvidersPromise.promise;
    }

    function getPracticeOfficeTypes() {
      var getPracticeOfficeTypesPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeOfficeTypes");
      $http({ method : 'POST', url : 'opargoapp/admin/officeTypes',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeOfficeTypesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeOfficeTypesResponse, true));
            if(getPracticeOfficeTypesResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeOfficeTypesResponse.data.response.office_types)) {
                getPracticeOfficeTypesPromise.resolve(getPracticeOfficeTypesResponse.data.response.office_types);
              } else { getPracticeOfficeTypesPromise.resolve([]); }
            } else { getPracticeOfficeTypesPromise.reject(getPracticeOfficeTypesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Office Types Service: Opargoapp Connection Error");
            getPracticeOfficeTypesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeOfficeTypesPromise.promise;
    }

    function getPracticeOptimizerActivities() {
      var getPracticeOptimizerActivitiesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeOptimizerActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/optimizerActivities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeOptimizerActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeOptimizerActivitiesResponse, true));
            if(getPracticeOptimizerActivitiesResponse.data.response.status === "success") {
              //TODO Need to get the correct name of the details
              if(angular.isArray(getPracticeOptimizerActivitiesResponse.data.response.activities)) {
                getPracticeOptimizerActivitiesPromise.resolve(getPracticeOptimizerActivitiesResponse.data.response.activities);
              } else { getPracticeOptimizerActivitiesPromise.resolve([]); }
            } else { getPracticeOptimizerActivitiesPromise.reject(getPracticeOptimizerActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Optimizer Activities Service: Opargoapp Connection Error");
            getPracticeOptimizerActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeOptimizerActivitiesPromise.promise;
    }

    function getPracticeOverrideActivities() {
      var getPracticeOverrideActivitiesPromise = $q.defer(); /* Create service promise */
      var practiceOverrideEnabled = (!Utils.isUndefinedOrNull(SessionServices.getCurrentPracticeOverrideSettings()) && SessionServices.getCurrentPracticeOverrideSettings().enabled) ? true : false;
      if (practiceOverrideEnabled) {
      $http({ method : 'POST', url : 'opargoapp/admin/overrideActivities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeOverrideActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeOptimizerSettingsResponse, true));
            if(getPracticeOverrideActivitiesResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeOverrideActivitiesResponse.data.response.activities)) {
                getPracticeOverrideActivitiesPromise.resolve(getPracticeOverrideActivitiesResponse.data.response.activities);
              } else { getPracticeOverrideActivitiesPromise.resolve([]); }
            } else { getPracticeOverrideActivitiesPromise.reject(getPracticeOverrideActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Override Activities Service: Opargoapp Connection Error");
            getPracticeOverrideActivitiesPromise.reject(MESSAGES.ERROR);
          });
      } else { getPracticeOverrideActivitiesPromise.resolve([]); }
      return getPracticeOverrideActivitiesPromise.promise;
    }

    function getPracticePayerMultipleCPTModifiers() {
      var getPracticePayerMultipleCPTModifiersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticePayerMultipleCPTModifiers");
      $http({ method : 'POST', url : 'opargoapp/admin/payersMultipleCptModifiers',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticePayerMultipleCPTModifiersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticePayerMultipleCPTModifiersResponse, true));
            if(getPracticePayerMultipleCPTModifiersResponse.data.response.status === "success") {
              if(angular.isArray(getPracticePayerMultipleCPTModifiersResponse.data.response.payerMultCPTModifiers)) {
                getPracticePayerMultipleCPTModifiersPromise.resolve(getPracticePayerMultipleCPTModifiersResponse.data.response.payerMultCPTModifiers);
              } else { getPracticePayerMultipleCPTModifiersPromise.resolve([]); }
            } else { getPracticePayerMultipleCPTModifiersPromise.reject(getPracticePayerMultipleCPTModifiersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Available Activities Service: Opargoapp Connection Error");
            getPracticePayerMultipleCPTModifiersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticePayerMultipleCPTModifiersPromise.promise;
    }

    function getPracticeProviderAvailableActivities(providerId) {
      var getPracticeProviderAvailableActivitiesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeProviderAvailableActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/providerAvailableActivities',
        data : { 'provider_id': providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeProviderAvailableActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeProviderAvailableActivitiesResponse, true));
            if(getPracticeProviderAvailableActivitiesResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeProviderAvailableActivitiesResponse.data.response.activities)) {
                getPracticeProviderAvailableActivitiesPromise.resolve(getPracticeProviderAvailableActivitiesResponse.data.response.activities);
              } else { getPracticeProviderAvailableActivitiesPromise.resolve([]); }
            } else { getPracticeProviderAvailableActivitiesPromise.reject(getPracticeProviderAvailableActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Available Activities Service: Opargoapp Connection Error");
            getPracticeProviderAvailableActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeProviderAvailableActivitiesPromise.promise;
    }

    function getPracticeProviderAvailableBodyParts(providerId) {
      var getPracticeProviderAvailableBodyPartsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeProviderAvailableBodyParts");
      $http({ method : 'POST', url : 'opargoapp/admin/providerAvailableBodyParts',
        data : { 'provider_id': providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeProviderAvailableBodyPartsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeProviderAvailableBodyPartsResponse, true));
            if(getPracticeProviderAvailableBodyPartsResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeProviderAvailableBodyPartsResponse.data.response.bodyParts)) {
                getPracticeProviderAvailableBodyPartsPromise.resolve(getPracticeProviderAvailableBodyPartsResponse.data.response.bodyParts);
              } else { getPracticeProviderAvailableBodyPartsPromise.resolve([]); }
            } else { getPracticeProviderAvailableBodyPartsPromise.reject(getPracticeProviderAvailableBodyPartsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Available Body Parts Service: Opargoapp Connection Error");
            getPracticeProviderAvailableBodyPartsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeProviderAvailableBodyPartsPromise.promise;
    }

    function getPracticeProviderAvailableLocationActivities(providerId, locationId) {
      var getPracticeProviderAvailableLocationActivitiesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeProviderAvailableLocationActivities");
      $http({ method : 'POST', url : 'opargoapp/admin/providerAvailableActivitiesByLocation',
        data : { 'provider_id' : providerId,
             'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeProviderAvailableLocationActivitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeProviderAvailableLocationActivitiesResponse, true));
            if(getPracticeProviderAvailableLocationActivitiesResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeProviderAvailableLocationActivitiesResponse.data.response.activities)) {
                getPracticeProviderAvailableLocationActivitiesPromise.resolve(getPracticeProviderAvailableLocationActivitiesResponse.data.response.activities);
              } else { getPracticeProviderAvailableLocationActivitiesPromise.resolve([]); }
            } else { getPracticeProviderAvailableLocationActivitiesPromise.reject(getPracticeProviderAvailableLocationActivitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Available Activities By Location Service: Opargoapp Connection Error");
            getPracticeProviderAvailableLocationActivitiesPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeProviderAvailableLocationActivitiesPromise.promise;
    }

    function getPracticeProviderAvailableRefProviders(providerId) {
      var getPracticeProviderAvailableRefProvidersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeProviderAvailableRefProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/providerAvailableReferringProviders',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeProviderAvailableRefProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeProviderAvailableRefProvidersResponse, true));
            if(getPracticeProviderAvailableRefProvidersResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeProviderAvailableRefProvidersResponse.data.response.referringProviders)) {
                getPracticeProviderAvailableRefProvidersPromise.resolve(getPracticeProviderAvailableRefProvidersResponse.data.response.referringProviders);
              } else { getPracticeProviderAvailableRefProvidersPromise.resolve([]); }
            } else { getPracticeProviderAvailableRefProvidersPromise.reject(getPracticeProviderAvailableRefProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Available Ref Providers Service: Opargoapp Connection Error");
            getPracticeProviderAvailableRefProvidersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeProviderAvailableRefProvidersPromise.promise;
    }

    function getPmsTypes() {
      var getPmsTypesPromise = $q.defer(); /* Create service promise */
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/pmsTypes',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPmsTypesResponse) { /*Promise Successful */
            if(getPmsTypesResponse.data.response.status === "success") {
              if(angular.isArray(getPmsTypesResponse.data.response.pmsTypes)) {
                getPmsTypesPromise.resolve(getPmsTypesResponse.data.response.pmsTypes);
              } else { getPmsTypesPromise.resolve([]); }
            } else { getPmsTypesPromise.reject(getPmsTypesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Pms Types Service: Opargoapp Connection Error");
            getPmsTypesPromise.reject(MESSAGES.ERROR);
          });
      return getPmsTypesPromise.promise;
    }

    function getPracticeUsers() {
      var getPracticeUsersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getPracticeUsers");
      $http({ method : 'GET', url : 'opargoapp/admin/practiceUsers',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getPracticeUsersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeUsersResponse, true));
            if(getPracticeUsersResponse.data.response.status === "success") {
              if(angular.isArray(getPracticeUsersResponse.data.response.users)) {
                getPracticeUsersPromise.resolve(getPracticeUsersResponse.data.response.users);
              } else { getPracticeUsersPromise.resolve([]); }
            } else { getPracticeUsersPromise.reject(getPracticeUsersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Users Service: Opargoapp Connection Error");
            getPracticeUsersPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeUsersPromise.promise;
    }

    function getMultiPracticeUsers() {
      var getMultiPracticeUsersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getMultiPracticeUsers");
      $http({ method : 'POST', url : 'opargoapp/admin/multiPracticeUsers',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getMultiPracticeUsersResponse) { /*Promise Successful */
            if(getMultiPracticeUsersResponse.data.response.status === "success") {
              if(angular.isArray(getMultiPracticeUsersResponse.data.response.multiPracticeUsers)) {
                getMultiPracticeUsersPromise.resolve(getMultiPracticeUsersResponse.data.response.multiPracticeUsers);
              } else { getMultiPracticeUsersPromise.resolve([]); }
            } else { getMultiPracticeUsersPromise.reject(getMultiPracticeUsersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Multi Practice Users Service: Opargoapp Connection Error");
            getMultiPracticeUsersPromise.reject(MESSAGES.ERROR);
          });
      return getMultiPracticeUsersPromise.promise;
    }

    function getProviderActivityPref(providerId) {
      var getProviderActivityPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderActivityOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerActivityOptPref',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderActivityPrefResponse) { /*Promise Successful */
            if(getProviderActivityPrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderActivityPrefResponse.data.response.providerActivitySettings)) {
                getProviderActivityPrefPromise.resolve(getProviderActivityPrefResponse.data.response.providerActivitySettings);
              } else { getProviderActivityPrefPromise.resolve([]); }
            } else { getProviderActivityPrefPromise.reject(getProviderActivityPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Activity Pref Service: Opargoapp Connection Error");
            getProviderActivityPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderActivityPrefPromise.promise;
    }

    function getProviderInventoryAllocationPref(providerId, locationId) {
      var getProviderInventoryAllocationPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderInventoryAllocationPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerInventoryOptPrefs',
        data : { 'provider_id' : providerId,
             'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderInventoryAllocationPrefResponse) { /*Promise Successful */
            if(getProviderInventoryAllocationPrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderInventoryAllocationPrefResponse.data.response.providerInventorySettings)) {
                getProviderInventoryAllocationPrefPromise.resolve(getProviderInventoryAllocationPrefResponse.data.response.providerInventorySettings);
              } else { getProviderInventoryAllocationPrefPromise.resolve([]); }
            } else { getProviderInventoryAllocationPrefPromise.reject(getProviderInventoryAllocationPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Inventory Allocation Pref Service: Opargoapp Connection Error");
            getProviderInventoryAllocationPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderInventoryAllocationPrefPromise.promise;
    }

    function getProviderLocationPref(providerId, locationId) {
      var getProviderLocationPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderLocationOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerLocationOptPref',
        data : { 'provider_id' : providerId,
             'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderLocationPrefResponse) { /*Promise Successful */
            if(getProviderLocationPrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderLocationPrefResponse.data.response.providerLocationSettings)) {
                getProviderLocationPrefPromise.resolve(getProviderLocationPrefResponse.data.response.providerLocationSettings);
              } else { getProviderLocationPrefPromise.resolve([]); }
            } else { getProviderLocationPrefPromise.reject(getProviderLocationPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Location Pref Service: Opargoapp Connection Error");
            getProviderLocationPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderLocationPrefPromise.promise;
    }

    function getProviderLocationTimePref(providerId, locationId) {
      var getProviderLocationTimePrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderLocationTimeOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerLocationTimeSlotOptPref',
        data : { 'provider_id' : providerId,
             'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderLocationTimePrefResponse) { /*Promise Successful */
            if(getProviderLocationTimePrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderLocationTimePrefResponse.data.response.providerLocationTimeSettings)) {
                getProviderLocationTimePrefPromise.resolve(getProviderLocationTimePrefResponse.data.response.providerLocationTimeSettings);
              } else { getProviderLocationTimePrefPromise.resolve([]); }
            } else { getProviderLocationTimePrefPromise.reject(getProviderLocationTimePrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Location Time Pref Service: Opargoapp Connection Error");
            getProviderLocationTimePrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderLocationTimePrefPromise.promise;
    }

    function getProviderOptLocations(providerId) {
      var getProviderOptLocationsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderOptLocations");
      $http({ method : 'POST', url : 'opargoapp/admin/providerOptLocations',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderOptLocationsResponse) { /*Promise Successful */
            if(getProviderOptLocationsResponse.data.response.status === "success") {
              if(angular.isArray(getProviderOptLocationsResponse.data.response.providerOptLocations)) {
                getProviderOptLocationsPromise.resolve(getProviderOptLocationsResponse.data.response.providerOptLocations);
              } else { getProviderOptLocationsPromise.resolve([]); }
            } else { getProviderOptLocationsPromise.reject(getProviderOptLocationsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Opt Locations Service: Opargoapp Connection Error");
            getProviderOptLocationsPromise.reject(MESSAGES.ERROR);
          });
      return getProviderOptLocationsPromise.promise;
    }

    function getProviderPayerPref(providerId) {
      var getProviderPayerPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderPayerOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerPayerOptPref',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderPayerPrefResponse) { /*Promise Successful */
            if(getProviderPayerPrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderPayerPrefResponse.data.response.providerPayerSettings)) {
                getProviderPayerPrefPromise.resolve(getProviderPayerPrefResponse.data.response.providerPayerSettings);
              } else { getProviderPayerPrefPromise.resolve([]); }
            } else { getProviderPayerPrefPromise.reject(getProviderPayerPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Payer Pref Service: Opargoapp Connection Error");
            getProviderPayerPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderPayerPrefPromise.promise;
    }





    function getProviderPayerModifiers(providerId) {
      var getProviderPayerModifiersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderModifiers");
      $http({ method : 'POST', url : 'opargoapp/admin/providerModifiers',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderPayerModifiersResponse) { /*Promise Successful */
            if(getProviderPayerModifiersResponse.data.response.status === "success") {
              if(angular.isArray(getProviderPayerModifiersResponse.data.response.payerModifiers)) {
                getProviderPayerModifiersPromise.resolve(getProviderPayerModifiersResponse.data.response.payerModifiers);
              } else { getProviderPayerModifiersPromise.resolve([]); }
            } else { getProviderPayerModifiersPromise.reject(getProviderPayerModifiersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Payer Modifiers Service: Opargoapp Connection Error");
            getProviderPayerModifiersPromise.reject(MESSAGES.ERROR);
          });
      return getProviderPayerModifiersPromise.promise;
    }

    function getProviderRefProvPref(providerId) {
      var getProviderRefProvPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderRefProvOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerRefProvOptPref',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderRefProvPrefResponse) { /*Promise Successful */
            if(getProviderRefProvPrefResponse.data.response.status === "success") {
              if(angular.isArray(getProviderRefProvPrefResponse.data.response.providerRefProvSettings)) {
                getProviderRefProvPrefPromise.resolve(getProviderRefProvPrefResponse.data.response.providerRefProvSettings);
              } else { getProviderRefProvPrefPromise.resolve([]); }
            } else { getProviderRefProvPrefPromise.reject(getProviderRefProvPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider RefProv Pref Service: Opargoapp Connection Error");
            getProviderRefProvPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderRefProvPrefPromise.promise;
    }

    function getProviderSegmentWindowPref(providerId, locationId) {
      var getProviderSegmentWindowPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderSegmentWindowPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerSegmentWindowOptPrefs',
        data : { 'provider_id' : providerId,
             'location_id' : locationId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderSegmentWindowPrefResponse) { /*Promise Successful */
            if(getProviderSegmentWindowPrefResponse.data.response.status === "success") {
              getProviderSegmentWindowPrefPromise.resolve(getProviderSegmentWindowPrefResponse.data.response.providersSegmentWindowSettings);
            } else { getProviderSegmentWindowPrefPromise.reject(getProviderSegmentWindowPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Segment Window Pref Service: Opargoapp Connection Error");
            getProviderSegmentWindowPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderSegmentWindowPrefPromise.promise;
    }

    function getProviderSpoiledInventoryPref(providerId) {
      var getProviderSpoiledInventoryPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProviderSpoiledInventoryPref");
      $http({ method : 'POST', url : 'opargoapp/admin/providerSpoiledInventoryOptPrefs',
        data : { 'provider_id' : providerId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProviderSpoiledInventoryPrefResponse) { /*Promise Successful */
            if(getProviderSpoiledInventoryPrefResponse.data.response.status === "success") {
              getProviderSpoiledInventoryPrefPromise.resolve(getProviderSpoiledInventoryPrefResponse.data.response.providerSpoiledInvSettings);
            } else { getProviderSpoiledInventoryPrefPromise.reject(getProviderSpoiledInventoryPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Provider Spoiled Inventory Pref Service: Opargoapp Connection Error");
            getProviderSpoiledInventoryPrefPromise.reject(MESSAGES.ERROR);
          });
      return getProviderSpoiledInventoryPrefPromise.promise;
    }

    function getProvidersWeights() {
      var getProvidersWeightsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.getProvidersWeights");
      $http({ method : 'POST', url : 'opargoapp/admin/providersWeights',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(getProvidersWeightsResponse) { /*Promise Successful */
            if(getProvidersWeightsResponse.data.response.status === "success") {
              if(angular.isArray(getProvidersWeightsResponse.data.response.providersWeights)) {
                getProvidersWeightsPromise.resolve(getProvidersWeightsResponse.data.response.providersWeights);
              } else { getProvidersWeightsPromise.resolve([]); }
            } else { getProvidersWeightsPromise.reject(getProvidersWeightsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Providers Weights Service: Opargoapp Connection Error");
            getProvidersWeightsPromise.reject(MESSAGES.ERROR);
          });
      return getProvidersWeightsPromise.promise;
    }

    function prepopulatePracticeCancelReasons() {
      var prepopulatePracticeCancelReasonsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeCancelReasons");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateCancelReasons',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeCancelReasonsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeCancelReasonsResponse, true));
            if(prepopulatePracticeCancelReasonsResponse.data.response.status === "success") {
              prepopulatePracticeCancelReasonsPromise.resolve();
            } else { prepopulatePracticeCancelReasonsPromise.reject(prepopulatePracticeCancelReasonsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Cancel Reasons Service: Opargoapp Connection Error");
            prepopulatePracticeCancelReasonsPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeCancelReasonsPromise.promise;
    }

    function prepopulatePracticeChangeReasons() {
      var prepopulatePracticeChangeReasonsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeChangeReasons");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateChangeReasons',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id': SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeChangeReasonsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeChangeReasonsResponse, true));
            if(prepopulatePracticeChangeReasonsResponse.data.response.status === "success") {
              prepopulatePracticeChangeReasonsPromise.resolve();
            } else { prepopulatePracticeChangeReasonsPromise.reject(prepopulatePracticeChangeReasonsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Change Reasons Service: Opargoapp Connection Error");
            prepopulatePracticeChangeReasonsPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeChangeReasonsPromise.promise;
    }

    function prepopulatePracticeLocations() {
      var prepopulatePracticeLocationsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeLocations");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateLocations',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeLocationsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeLocationsResponse, true));
            if(prepopulatePracticeLocationsResponse.data.response.status === "success") {
              prepopulatePracticeLocationsPromise.resolve();
            } else { prepopulatePracticeLocationsPromise.reject(prepopulatePracticeLocationsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Locations Service: Opargoapp Connection Error");
            prepopulatePracticeLocationsPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeLocationsPromise.promise;
    }

    function prepopulatePracticeProviders() {
      var prepopulatePracticeProvidersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateProviders',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeProvidersResponse, true));
            if(prepopulatePracticeProvidersResponse.data.response.status === "success") {
              prepopulatePracticeProvidersPromise.resolve();
            } else { prepopulatePracticeProvidersPromise.reject(prepopulatePracticeProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Providers Service: Opargoapp Connection Error");
            prepopulatePracticeProvidersPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeProvidersPromise.promise;
    }

    function prepopulatePracticeReferringProviders() {
      var prepopulatePracticeReferringProvidersPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeReferringProviders");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateReferringProviders',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeReferringProvidersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeReferringProvidersResponse, true));
            if(prepopulatePracticeReferringProvidersResponse.data.response.status === "success") {
              prepopulatePracticeReferringProvidersPromise.resolve();
            } else { prepopulatePracticeReferringProvidersPromise.reject(prepopulatePracticeReferringProvidersResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Referring Providers Service: Opargoapp Connection Error");
            prepopulatePracticeReferringProvidersPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeReferringProvidersPromise.promise;
    }

    function prepopulatePracticeReferralSources() {
      var prepopulatePracticeReferralSourcesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeReferralSources");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateReferralSources',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeReferralSourcesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeReferralSourcesResponse, true));
            if(prepopulatePracticeReferralSourcesResponse.data.response.status === "success") {
              prepopulatePracticeReferralSourcesPromise.resolve();
            } else {
              prepopulatePracticeReferralSourcesPromise.reject(prepopulatePracticeReferralSourcesResponse.data.response.message);
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Referral Sources Service: Opargoapp Connection Error");
            prepopulatePracticeReferralSourcesPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeReferralSourcesPromise.promise;
    }

    function prepopulatePracticeSpecificEthnicities() {
      var prepopulatePracticeSpecificEthnicitiesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeSpecificEthnicities");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateEthnicities',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeSpecificEthnicitiesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(addPracticeSpecificEthnicitiesResponse, true));
            if(prepopulatePracticeSpecificEthnicitiesResponse.data.response.status === "success") {
              prepopulatePracticeSpecificEthnicitiesPromise.resolve();
            } else { prepopulatePracticeSpecificEthnicitiesPromise.reject(prepopulatePracticeSpecificEthnicitiesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Ethnicities Service: Opargoapp Connection Error");
            prepopulatePracticeSpecificEthnicitiesPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeSpecificEthnicitiesPromise.promise;
    }

    function prepopulatePracticeSpecificInsurances() {
      var prepopulatePracticeSpecificInsurancesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeSpecificInsurances");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateInsurances',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeSpecificInsurancesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeSpecificInsurancesResponse, true));
            if(prepopulatePracticeSpecificInsurancesResponse.data.response.status === "success") {
              prepopulatePracticeSpecificInsurancesPromise.resolve();
            } else { prepopulatePracticeSpecificInsurancesPromise.reject(prepopulatePracticeSpecificInsurancesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Referral Sources Service: Opargoapp Connection Error");
            prepopulatePracticeSpecificInsurancesPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeSpecificInsurancesPromise.promise;
    }

    function removeAcceptedInsurancesByLocation(locationId, insuranceList) {
      var removeAcceptedInsurancesByLocationPromise = $q.defer(); /* Create service promise */
      var insuranceIdList = []; /* CPTs to add to activity */
      angular.forEach(insuranceList, function(insurance) {
        insuranceIdList.push(insurance.id);
      });
      $log.debug("SERVICE CALLED: app.userService.removeAcceptedInsurancesByLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteLocationAcceptedInsurances',
        data : { 'location_id': locationId,
             'loc_ins_list': insuranceIdList},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})        .then(function successCallback(removeAcceptedInsurancesByLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(removeAcceptedInsurancesByLocationResponse, true));
            if(removeAcceptedInsurancesByLocationResponse.data.response.status === "success") {
              removeAcceptedInsurancesByLocationPromise.resolve();
            } else { removeAcceptedInsurancesByLocationPromise.reject(removeAcceptedInsurancesByLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Remove accepted practice insurances by location service: Opargoapp Connection Error");
            removeAcceptedInsurancesByLocationPromise.reject(MESSAGES.ERROR);
          });
      return removeAcceptedInsurancesByLocationPromise.promise;
    }

    function removeAcceptedInsurancesByProvider(providerId, insuranceList) {
      var insuranceIdList = []; /* CPTs to add to activity */
      angular.forEach(insuranceList, function(insurance) {
        insuranceIdList.push(insurance.id);
      });
      var removeAcceptedInsurancesByProviderPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.userService.removeAcceptedInsurancesByProvider");
      $http({ method : 'POST', url : 'opargoapp/admin/deleteProviderAcceptedInsurances',
        data : { 'provider_id': providerId,
             'prov_ins_list': insuranceIdList},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(removeAcceptedInsurancesByProviderResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(removeAcceptedInsurancesByProviderResponse, true));
            if(removeAcceptedInsurancesByProviderResponse.data.response.status === "success") {
              removeAcceptedInsurancesByProviderPromise.resolve();
            } else { removeAcceptedInsurancesByProviderPromise.reject(removeAcceptedInsurancesByProviderResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Remove accepted practice insurances by provider service: Opargoapp Connection Error");
            removeAcceptedInsurancesByProviderPromise.reject(MESSAGES.ERROR);
          });
      return removeAcceptedInsurancesByProviderPromise.promise;
    }

    function prepopulatePracticeSpecificRaces() {
      var prepopulatePracticeSpecificRacesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.prepopulatePracticeSpecificRaces");
      $http({ method : 'POST', url : 'opargoapp/admin/prepopulateRaces',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(prepopulatePracticeSpecificRacesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(prepopulatePracticeSpecificRacesResponse, true));
            if(prepopulatePracticeSpecificRacesResponse.data.response.status === "success") {
              prepopulatePracticeSpecificRacesPromise.resolve();
            } else { prepopulatePracticeSpecificRacesPromise.reject(prepopulatePracticeSpecificRacesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Prepopulate Practice Races Service: Opargoapp Connection Error");
            prepopulatePracticeSpecificRacesPromise.reject(MESSAGES.ERROR);
          });
      return prepopulatePracticeSpecificRacesPromise.promise;

    }

    function sendPracticeAdminEmail(practiceAdminFormObj) {
      var sendPracticeAdminEmailPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.sendPracticeAdminEmail");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/sendNewAdminEmail',
        data : { 'email' : practiceAdminFormObj.email,
             'username' : practiceAdminFormObj.username,
             'name' : practiceAdminFormObj.fname,
             'admin_practice_name' : practiceAdminFormObj.practice.practice_name},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceAdminFormObj.practice.id
        }})
        .then(function successCallback(sendPracticeAdminEmailResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(sendPracticeAdminEmailResponse, true));
            if(sendPracticeAdminEmailResponse.data.response.status === "success") {
              sendPracticeAdminEmailPromise.resolve(sendPracticeAdminEmailResponse.data.response.message);
            } else {
                sendPracticeAdminEmailPromise.reject(sendPracticeAdminEmailResponse.data.response.message);

            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Send Practice Admin Email Service: Opargoapp Connection Error");
            sendPracticeAdminEmailPromise.reject(MESSAGES.ERROR);
          });
      return sendPracticeAdminEmailPromise.promise;
    }

    function startPracticeBatchProcess(practiceId) {
      var startPracticeBatchProcessPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.startPracticeBatchProcess");
      $http({ method : 'POST', url : 'opargoapp/optimizer/batch',
        data : { 'practice_id' : practiceId },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(startPracticeBatchProcessResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(startPracticeBatchProcessResponse, true));
            if(startPracticeBatchProcessResponse.data.response.status === "success") {
              startPracticeBatchProcessPromise.resolve(MESSAGES.SUCCESS);
            } else { startPracticeBatchProcessPromise.reject(startPracticeBatchProcessResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Start Practice Batch Process Service: Opargoapp Connection Error");
            startPracticeBatchProcessPromise.reject(MESSAGES.ERROR);
          });
      return startPracticeBatchProcessPromise.promise;
    }

    function sendVerifyEmail(sendVerifyEmailUserObj) {
      var sendVerifyEmailPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.sendVerifyEmail");
      getClientIpAddress()
        .then(function successCallback(getClientIpAddressResults) {
      $http({ method : 'POST', url : 'opargoapp/auth/sendVerifyEmail',
        data : { 'user_id' : sendVerifyEmailUserObj.user_id,
             'email' : sendVerifyEmailUserObj.email,
             'firstname' : sendVerifyEmailUserObj.firstname,
             'username' : sendVerifyEmailUserObj.username,
             'userrole' : sendVerifyEmailUserObj.userrole,
             'reCaptchaResponse' : sendVerifyEmailUserObj.reCaptchaResponse,
             'ip_address' : getClientIpAddressResults},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'practice' : SessionServices.getCurrentPractice().practice_name,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(sendVerifyEmailResponse) { /*Promise Successful */
            if(sendVerifyEmailResponse.data.response.status === "success") {
              sendVerifyEmailPromise.resolve();
            } else {
              if(sendVerifyEmailResponse.data.response.message === "recaptcha_failed") {
                sendVerifyEmailPromise.reject("Please complete the reCaptcha.");
              } else {
                sendVerifyEmailPromise.reject(sendVerifyEmailResponse.data.response.message);
              }
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Send verify email Service: Opargoapp Connection Error");
            sendVerifyEmailPromise.reject(MESSAGES.ERROR);
          });
      }, function errorCallback() {
        /* Should not happend */
      });
      return sendVerifyEmailPromise.promise;

    }

    function updateDSUserStatus(id, username, enabled) {
        var updateDSUserStatusPromise = $q.defer(); /* Create service promise */
        $log.debug("SERVICE CALLED: app.adminService.updateDSUserStatus");
        $http({ method : 'PUT', url : 'opargoapp/admin/dsUserStatus',
          data : { 'id' : id,
               'username' : username,
               'enabled' : enabled},
          headers : { 'username' : SessionServices.getCurrentUser().username,
                'practice_id' : SessionServices.getCurrentPractice().practice_id,
                'practice' : SessionServices.getCurrentPractice().practice_name,
                'session' : SessionServices.getSessionId()
          }})
          .then(function successCallback(updateDSUserStatusResponse) { /*Promise Successful */
              //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updateDSUserStatusResponse, true));
              if(updateDSUserStatusResponse.data.response.status === "success") {
            	  updateDSUserStatusPromise.resolve(MESSAGES.SUCCESS);
              } else { updateDSUserStatusPromise.reject(updateDSUserStatusResponse.data.response.message); }
            }, function errorCallback() { /* Promise Failed */
              $log.warn("Update ds user status details Service: Opargoapp Connection Error");
              updateDSUserStatusPromise.reject(MESSAGES.ERROR);
            });
        return updateDSUserStatusPromise.promise;
    }

    function updateInsurancePlanDetails(insurancePlanDetails) {
      var updateInsurancePlanDetailsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateInsurancePlanDetails");
      $http({ method : 'POST', url : 'opargoapp/admin/updateInsurance',
        data : { 'id' : insurancePlanDetails.id,
             'display_name' : insurancePlanDetails.display_name,
             'accepted_by' : insurancePlanDetails.accepted_by,
             'payer_id' : insurancePlanDetails.carrier },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateInsurancePlanDetailsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updateInsurancePlanDetailsResponse, true));
            if(updateInsurancePlanDetailsResponse.data.response.status === "success") {
              updateInsurancePlanDetailsPromise.resolve(MESSAGES.SUCCESS);
            } else { updateInsurancePlanDetailsPromise.reject(updateInsurancePlanDetailsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update insurance plan details Service: Opargoapp Connection Error");
            updateInsurancePlanDetailsPromise.reject(MESSAGES.ERROR);
          });
      return updateInsurancePlanDetailsPromise.promise;
    }

    function updateProviderActivityPref(providerId, activityId, preference) {
      var updateProviderActivityPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderActivityOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderActivityOptPref',
        data: {
          'provider_id' : providerId,
          'activity_id' : activityId,
          'desirability' : preference
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderActivityPrefResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeActivityResponse, true));
            if(updateProviderActivityPrefResponse.data.response.status === "success") {
              updateProviderActivityPrefPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderActivityPrefPromise.reject(updateProviderActivityPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider activity pref Service: Opargoapp Connection Error");
            updateProviderActivityPrefPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderActivityPrefPromise.promise;
    }

    function updateProviderLocationPref(providerId, locationId, preference, proximity) {
      var updateProviderLocationPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderLocationOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderLocationOptPref',
        data: {
          'provider_id' : providerId,
          'location_id' : locationId,
          'desirability' : preference,
          'proximity' : proximity
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderLocationPrefResponse) { /*Promise Successful */
            if(updateProviderLocationPrefResponse.data.response.status === "success") {
              updateProviderLocationPrefPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderLocationPrefPromise.reject(updateProviderLocationPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider location pref Service: Opargoapp Connection Error");
            updateProviderLocationPrefPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderLocationPrefPromise.promise;
    }

    function updateProviderLocationTimePref(providerId, locationId, timeSlotId, startTime, endTime, preference) {
      var updateProviderLocationTimePrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderLocationTimeSlotOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderLocationTimeSlotOptPref',
        data: {
          'id' : timeSlotId,
          'provider_id' : providerId,
          'location_id' : locationId,
          'start_time' : startTime,
          'end_time' : endTime,
          'desirability' : preference
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderLocationTimePrefResponse) { /*Promise Successful */
            if(updateProviderLocationTimePrefResponse.data.response.status === "success") {
              updateProviderLocationTimePrefPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderLocationTimePrefPromise.reject(updateProviderLocationTimePrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider location pref Service: Opargoapp Connection Error");
            updateProviderLocationTimePrefPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderLocationTimePrefPromise.promise;
    }

    function updateProviderPayerPref(providerId, payerId, preference) {
      var updateProviderPayerPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderPayerOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderPayerOptPref',
        data: {
          'provider_id' : providerId,
          'payer_id' : payerId,
          'desirability' : preference
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderPayerPrefResponse) { /*Promise Successful */
            if(updateProviderPayerPrefResponse.data.response.status === "success") {
              updateProviderPayerPrefPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderPayerPrefPromise.reject(updateProviderPayerPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider Payer pref Service: Opargoapp Connection Error");
            updateProviderPayerPrefPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderPayerPrefPromise.promise;
    }

    function updateProviderRefProvPref(providerId, refProvId, preference) {
      var updateProviderRefProvPrefPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderRefProvOptPref");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderRefProvOptPref',
        data: {
          'provider_id' : providerId,
          'refProv_id' : refProvId,
          'desirability' : preference
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderRefProvPrefResponse) { /*Promise Successful */
            if(updateProviderRefProvPrefResponse.data.response.status === "success") {
              updateProviderRefProvPrefPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderRefProvPrefPromise.reject(updateProviderRefProvPrefResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider refProv pref Service: Opargoapp Connection Error");
            updateProviderRefProvPrefPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderRefProvPrefPromise.promise;
    }

    function updateProviderSegmentPercPrefs(providerId, locationId, providerSegPercPrefObj) {
      var updateProviderSegmentPercPrefsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderSegmentPercPrefs");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderSegmentWindowOptPrefs',
        data: {
          'provider_id' : providerId,
          'location_id' : locationId,
          'settings': providerSegPercPrefObj
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderSegmentPercPrefsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updateProviderSegmentPercPrefsResponse, true));
            if(updateProviderSegmentPercPrefsResponse.data.response.status === "success") {
              updateProviderSegmentPercPrefsPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderSegmentPercPrefsPromise.reject(updateProviderSegmentPercPrefsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider Segment Range Prefs Service: Opargoapp Connection Error");
            updateProviderSegmentPercPrefsPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderSegmentPercPrefsPromise.promise;
    }

    function updateProviderSegmentRangePrefs(providerSegRangePrefObj) {
      var updateProviderSegmentRangePrefsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderSegmentRangePrefs");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderSegmentRangePrefs',
        data: {
          'provider_id' : providerSegRangePrefObj.provider_id,
          'location_id' : providerSegRangePrefObj.location_id,
          'window_1': providerSegRangePrefObj.window_1,
          'window_2': providerSegRangePrefObj.window_2
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderSegmentRangePrefsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updateProviderSegmentRangePrefsResponse, true));
            if(updateProviderSegmentRangePrefsResponse.data.response.status === "success") {
              updateProviderSegmentRangePrefsPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderSegmentRangePrefsPromise.reject(updateProviderSegmentRangePrefsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider Segment Range Prefs Service: Opargoapp Connection Error");
            updateProviderSegmentRangePrefsPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderSegmentRangePrefsPromise.promise;
    }

    function updateProviderSpoiledPercPrefs(providerId, providerSpoilPercPrefObj) {
      var updateProviderSpoiledPercPrefsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderSpoiledPercPrefs");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderSpoiledInventoryOptPrefs',
        data: {
          'provider_id' : providerId,
          'settings': providerSpoilPercPrefObj
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderSpoiledPercPrefsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updateProviderSpoiledPercPrefsResponse, true));
            if(updateProviderSpoiledPercPrefsResponse.data.response.status === "success") {
              updateProviderSpoiledPercPrefsPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderSpoiledPercPrefsPromise.reject(updateProviderSpoiledPercPrefsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider Spoiled Percentage Prefs Service: Opargoapp Connection Error");
            updateProviderSpoiledPercPrefsPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderSpoiledPercPrefsPromise.promise;
    }

    function updateProviderWeights(providerWeightsObj) {
      var updateProviderWeightsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateProviderWeight");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderWeights',
        data: {
          'provider_id' : providerWeightsObj.provider_id,
          'payer_weight' : providerWeightsObj.payer_weight,
          'newPt_weight' : providerWeightsObj.newPt_weight,
          'activity_weight' : providerWeightsObj.activity_weight,
          'refProv_weight' : providerWeightsObj.refProv_weight,
          'reImbTm_weight' : providerWeightsObj.reImbTm_weight,
          'loc_weight' : providerWeightsObj.loc_weight,
          'tofday_weight' : providerWeightsObj.tofd_weight,
          'prox_weight': providerWeightsObj.prox_weight,
          'loc_prox_weight': providerWeightsObj.loc_prox_weight,
          'prefProv_weight': providerWeightsObj.prefProv_weight
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updateProviderWeightsResponse) { /*Promise Successful */
            if(updateProviderWeightsResponse.data.response.status === "success") {
              updateProviderWeightsPromise.resolve(MESSAGES.SUCCESS);
            } else { updateProviderWeightsPromise.reject(updateProviderWeightsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Provider Weight Service: Opargoapp Connection Error");
            updateProviderWeightsPromise.reject(MESSAGES.ERROR);
          });
      return updateProviderWeightsPromise.promise;
    }

    function updatePracticeActivity(practiceActivityObj) {
      var cptToAddArr = []; /* CPTs to add to activity */
      angular.forEach(practiceActivityObj.practice_cpts, function(cpt) {
        cptToAddArr.push(cpt.id);
      });
      var updatePracticeActivityPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeActivity");
      $http({ method : 'POST', url : 'opargoapp/admin/updatePracticeActivity',
        data: {
          "practice_id": SessionServices.getCurrentPractice().practice_id,
          "activity_id": practiceActivityObj.id,
          "activity_name": practiceActivityObj.name,
          "display_name": practiceActivityObj.display_name,
          "pms_activity_name": practiceActivityObj.pms_activity_name,
          "best_avail_range": practiceActivityObj.best_avail_range,
          "min_book_waittime": practiceActivityObj.min_book_waittime,
          "pms_override_name_id": !Utils.isUndefinedOrNull(practiceActivityObj.pms_override_name_id) ? practiceActivityObj.pms_override_name_id : 0,
          "activity_type_id": practiceActivityObj.cpt_type_id,
          "total_block": practiceActivityObj.num_blocks,
          "network_optimizer_enabled": (!Utils.isUndefinedOrNull(practiceActivityObj.network_optimizer_enabled) ? practiceActivityObj.network_optimizer_enabled : false),
          "activity_prac_cpt_ids": cptToAddArr
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeActivityResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeActivityResponse, true));
            if(updatePracticeActivityResponse.data.response.status === "success") {
              updatePracticeActivityPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeActivityPromise.reject(updatePracticeActivityResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Activity Service: Opargoapp Connection Error");
            updatePracticeActivityPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeActivityPromise.promise;
    }

    function updatePracticeBlockTime(practiceId, practiceBlockTime) {
      var updatePracticeBlockTimePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeBlockTime");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateBlockTime',
        data: {
          'blocktime' : practiceBlockTime },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeBlockTimeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBlockTimeResponse, true));
            if(updatePracticeBlockTimeResponse.data.response.status === "success") {
              updatePracticeBlockTimePromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeBlockTimePromise.reject(updatePracticeBlockTimeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Block Time Service: Opargoapp Connection Error");
            updatePracticeBlockTimePromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeBlockTimePromise.promise;
    }

    function updatePracticeBookingCommentsSettings(practiceBookingCommentsSettingsObj) {
      var updatePracticeBookingCommentsSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeBookingCommentsSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/updateBookingCommentsSettings',
        data : {
          'chief_complaints_appt_type' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_appt_type_name) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_appt_type_name) : 0 ),
          'chief_complaints_date_of_injury' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_date_of_injury) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_date_of_injury) : 0 ),
          'chief_complaints_body_part' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_body_part) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_body_part) : 0 ),
          'chief_complaints_anatomical_location' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_anatomical_location) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_anatomical_location) : 0 ),
          'chief_complaints_notes' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_notes) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_notes) : 0 ),
          'chief_complaints_username' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_username) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_username) : 0 ),
          'chief_complaints_booked_by_opargo' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.chief_complaints_booked_by_opargo) ?
                parseInt(practiceBookingCommentsSettingsObj.chief_complaints_booked_by_opargo) : 0 ),
          'comments_appt_type' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_appt_type_name) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_appt_type_name) : 0 ),
          'comments_date_of_injury' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_date_of_injury) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_date_of_injury) : 0 ),
          'comments_body_part' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_body_part) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_body_part) : 0 ),
          'comments_anatomical_location' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_anatomical_location) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_anatomical_location) : 0 ),
          'comments_notes' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_notes) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_notes) : 0 ),
          'comments_username' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_username) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_username) : 0 ),
          'comments_booked_by_opargo' :
            (!Utils.isUndefinedOrNull(practiceBookingCommentsSettingsObj.comments_booked_by_opargo) ?
                parseInt(practiceBookingCommentsSettingsObj.comments_booked_by_opargo) : 0 )
          },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeBookingCommentsSettingsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBookingCommentsSettingsResponse, true));
            if(updatePracticeBookingCommentsSettingsResponse.data.response.status === "success") {
              updatePracticeBookingCommentsSettingsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeBookingCommentsSettingsPromise.reject(updatePracticeBookingCommentsSettingsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Booking Comments Settings Service: Opargoapp Connection Error");
            updatePracticeBookingCommentsSettingsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeBookingCommentsSettingsPromise.promise;
    }

    function updatePracticeChangeCancelSettings(practiceChangeCancelSettingsObj) {
      var updatePracticeChangeCancelSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeChangeCancelSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/updateChangeCancelSetting',
        data : { 'cancel' : practiceChangeCancelSettingsObj.cancel,
             'rebook_cancel' : practiceChangeCancelSettingsObj.rebook_cancel,
             'reschedule' : practiceChangeCancelSettingsObj.reschedule,
             'past_appt_search_window' : practiceChangeCancelSettingsObj.past_appt_search_window,
             'future_appt_search_window' : practiceChangeCancelSettingsObj.future_appt_search_window },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeChangeCancelSettingsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeChangeCancelSettingsResponse, true));
            if(updatePracticeChangeCancelSettingsResponse.data.response.status === "success") {
              updatePracticeChangeCancelSettingsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeChangeCancelSettingsPromise.reject(updatePracticeChangeCancelSettingsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Change Cancel Settings Service: Opargoapp Connection Error");
            updatePracticeChangeCancelSettingsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeChangeCancelSettingsPromise.promise;
    }

    function updatePracticeClientInfo(practiceId, practiceName, clientId, clientKey) {
      var updatePracticeClientInfoPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeClientInfo");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/gsClientInfo',
        data : { 'practiceId' : practiceId,
      	   'practiceName' : practiceName,
           'clientId' : clientId,
           'clientKey' : clientKey
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeClientInfoResponse) { /*Promise Successful */
          //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeClientInfoResponse, true));
          if(updatePracticeClientInfoResponse.data.response.status === "success") {
            updatePracticeClientInfoPromise.resolve(MESSAGES.SUCCESS);
          } else { updatePracticeClientInfoPromise.reject(updatePracticeClientInfoResponse.data.response.message); }
        }, function errorCallback() { /* Promise Failed */
          $log.warn("Update Practice Client Info Service: Opargoapp Connection Error");
          updatePracticeClientInfoPromise.reject(MESSAGES.ERROR);
        });
      return updatePracticeClientInfoPromise.promise;
    }

    function isGSClientEnabled(practiceId) {
      var isGSClientEnabledPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.isGSClientEnabled");
      $http({ method : 'GET', url : 'opargoapp/opargoAdmin/gsClientEnabled',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'user_practice_id' : practiceId,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(isGSClientEnabledResponse) { /*Promise Successful */
          //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(isGSClientEnabledResponse, true));
          if(isGSClientEnabledResponse.data.response.status === "success") {
        	  isGSClientEnabledPromise.resolve(isGSClientEnabledResponse.data.response.result);
          } else {
        	  isGSClientEnabledPromise.reject(isGSClientEnabledResponse.data.response.message); }
        }, function errorCallback() { /* Promise Failed */
          $log.warn("isGSClientEnabled Service: Opargoapp Connection Error");
          isGSClientEnabledPromise.reject(MESSAGES.ERROR);
        });
      return isGSClientEnabledPromise.promise;
    }

    function updatePracticeLocation(practiceLocationObj) {
      var updatePracticeLocationPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeLocation");
      $http({ method : 'POST', url : 'opargoapp/admin/updateLocation',
        data : { 'address' : {
              'street_1' : practiceLocationObj.street_1,
              'street_2' : practiceLocationObj.street_2,
              'city' : practiceLocationObj.city,
              'state' : practiceLocationObj.state_id,
              'zip' : practiceLocationObj.zip_code,
              'id': practiceLocationObj.address_id
             },
             'phone_number' : practiceLocationObj.phone_number,
             'fax' : practiceLocationObj.location_fax,
             'email' : practiceLocationObj.location_email,
             'start_time' : practiceLocationObj.work_hours_start_time_hour + ":" + practiceLocationObj.work_hours_start_time_min,
             'end_time' : practiceLocationObj.work_hours_end_time_hour + ":" + practiceLocationObj.work_hours_end_time_min,
             'lunch_start' : practiceLocationObj.lunch_start_time_hour + ":" + practiceLocationObj.lunch_start_time_min,
             'lunch_end' : practiceLocationObj.lunch_end_time_hour + ":" + practiceLocationObj.lunch_end_time_min,
             'start_day' : practiceLocationObj.work_start_day_of_week,
             'end_day' : practiceLocationObj.work_end_day_of_week,
             'location_name' : practiceLocationObj.name,
             'location_id' : practiceLocationObj.id,
             'office_type' : practiceLocationObj.office_type_id,
             'allow_out_of_network' : practiceLocationObj.allow_out_of_network === 1 ? 1 : 0,
             'loc_refmds' : practiceLocationObj.loc_ref_providers },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeLocationResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeLocationResponse, true));
            if(updatePracticeLocationResponse.data.response.status === "success") {
              updatePracticeLocationPromise.resolve();
            } else { updatePracticeLocationPromise.reject(updatePracticeLocationResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Location Service: Opargoapp Connection Error");
            updatePracticeLocationPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeLocationPromise.promise;
    }

    function updatePracticeLocationsTravelTimes(practiceLocationsTravelTimesPref) {
      var updatePracticeLocationsTravelTimesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updateLocationsTravelTimes");
      $http({ method : 'POST', url : 'opargoapp/admin/updateLocationsTravelTimes',
        data: {
          'locationsTravelTimes': practiceLocationsTravelTimesPref
        },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeLocationsTravelTimesResponse) { /*Promise Successful */
            if(updatePracticeLocationsTravelTimesResponse.data.response.status === "success") {
              updatePracticeLocationsTravelTimesPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeLocationsTravelTimesPromise.reject(updatePracticeLocationsTravelTimesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Locations Travel Times Service: Opargoapp Connection Error");
            updatePracticeLocationsTravelTimesPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeLocationsTravelTimesPromise.promise;
    }

    function updatePracticePayerMultipleCPTModifiers(updatePractPayerMultCptModObj) {
      var updatePracticePayerMultipleCPTModifiersPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticePayerMultipleCPTModifiers");
      $http({ method : 'POST', url : 'opargoapp/admin/updatePayerMultipleCptModifiers',
        data : {
          'insurance_id': updatePractPayerMultCptModObj.insurance_id,
          'reimburse_mod_one_percent': updatePractPayerMultCptModObj.reimb_mod_one_percent,
          'reimburse_mod_two_percent': updatePractPayerMultCptModObj.reimb_mod_two_percent,
          'reimburse_mod_three_percent': updatePractPayerMultCptModObj.reimb_mod_three_percent,
          'reimburse_mod_four_plus_percent': updatePractPayerMultCptModObj.reimb_mod_four_plus_percent
        },
        headers : {
          'username' : SessionServices.getCurrentUser().username,
          'practice_id' : SessionServices.getCurrentPractice().practice_id,
          'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticePayerMultipleCPTModifiersResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticePayerMultipleCPTModifiersResponse, true));
            if(updatePracticePayerMultipleCPTModifiersResponse.data.response.status === "success") {
              updatePracticePayerMultipleCPTModifiersPromise.resolve(MESSAGES.SUCCESS);
            } else {
              updatePracticePayerMultipleCPTModifiersPromise.reject(MESSAGES.ERROR);
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Network Optimization Settings Service: Opargoapp Connection Error");
            updatePracticePayerMultipleCPTModifiersPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticePayerMultipleCPTModifiersPromise.promise;
    }

    function updatePracticeNetworkOptSettings(updatePracticeNetOptObj) {
      var updatePracticeNetworkOptSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeNetworkOptSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/updateNetworkOptSetting',
        data : { 'network_opt_enabled' : (updatePracticeNetOptObj.enabled === true ? 1 : 0) },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeNetworkOptSettingsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeNetworkOptSettingsResponse, true));
            if(updatePracticeNetworkOptSettingsResponse.data.response.status === "success") {
              updatePracticeNetworkOptSettingsPromise.resolve(MESSAGES.SUCCESS);
            } else {
              updatePracticeNetworkOptSettingsPromise.reject(MESSAGES.ERROR);
            }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Network Optimization Settings Service: Opargoapp Connection Error");
            updatePracticeNetworkOptSettingsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeNetworkOptSettingsPromise.promise;
    }

    function updatePracticeNPUGroupName(practiceNpuGroupId, practiceNpuGroupName, practiceNpuSafetyValve) {
      var updatePracticeNPUGroupNamePromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeNPUGroupName");
      $http({ method : 'POST', url : 'opargoapp/admin/updateNpuGroupName',
        data : { 'group_id' : practiceNpuGroupId,
             'group_name' : practiceNpuGroupName,
             'group_safety_valve' : practiceNpuSafetyValve},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeNPUGroupNameResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeNPUGroupNameResponse, true));
            if(updatePracticeNPUGroupNameResponse.data.response.status === "success") {
              updatePracticeNPUGroupNamePromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeNPUGroupNamePromise.reject(updatePracticeNPUGroupNameResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice NPU Group Name Service: Opargoapp Connection Error");
            updatePracticeNPUGroupNamePromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeNPUGroupNamePromise.promise;
    }

    function updatePracticeNPUGroupQuotas(practiceNpuGroupId, practiceNpuGroupQuota, practiceNpuGroupProviders) {
      var updatePracticeNPUGroupQuotasPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeNPUGroupQuotas");
      $http({ method : 'POST', url : 'opargoapp/admin/updateNpuGroupQuotas',
        data : { 'group_id' : practiceNpuGroupId,
             'group_quota' : practiceNpuGroupQuota,
             'group_providers' : practiceNpuGroupProviders},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeNPUGroupQuotasResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeNPUGroupQuotasResponse, true));
            if(updatePracticeNPUGroupQuotasResponse.data.response.status === "success") {
              updatePracticeNPUGroupQuotasPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeNPUGroupQuotasPromise.reject(updatePracticeNPUGroupQuotasResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice NPU Group Quotas Service: Opargoapp Connection Error");
            updatePracticeNPUGroupQuotasPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeNPUGroupQuotasPromise.promise;
    }

    function updatePracticeNumberofSegments(practiceId, numberOfSegments) {
      var updatePracticeNumberofSegmentsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeNumberofSegments");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateNumOfSegmentsOptPref',
        data: {
          'number_of_segments' : numberOfSegments },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeNumberofSegmentsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeNumberofSegmentsResponse, true));
            if(updatePracticeNumberofSegmentsResponse.data.response.status === "success") {
              updatePracticeNumberofSegmentsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeNumberofSegmentsPromise.reject(updatePracticeNumberofSegmentsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Number of Segments Service: Opargoapp Connection Error");
            updatePracticeNumberofSegmentsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeNumberofSegmentsPromise.promise;
    }

    function updatePracticeBestAvailableRange(practiceId, range) {
      var updatePracticeBestAvailableRangePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeBestAvailableRange");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateBestAvailRangeOptPref',
        data: {
          'range' : range },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeBestAvailableRangeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBestAvailableRangeResponse, true));
            if(updatePracticeBestAvailableRangeResponse.data.response.status === "success") {
              updatePracticeBestAvailableRangePromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeBestAvailableRangePromise.reject(updatePracticeBestAvailableRangeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Number of Segments Service: Opargoapp Connection Error");
            updatePracticeBestAvailableRangePromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeBestAvailableRangePromise.promise;
    }

    function updatePracticeBestAvailOptions(practiceId, options) {
      var updatePracticeBestAvailOptionsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeBestAvailableRange");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateBestAvailOptionsOptPref',
        data : {
          'options' : options },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' :practiceId
        }})
        .then(function successCallback(updatePracticeBestAvailOptionsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBestAvailOptionsResponse, true));
            if(updatePracticeBestAvailOptionsResponse.data.response.status === "success") {
              updatePracticeBestAvailOptionsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeBestAvailOptionsPromise.reject(updatePracticeBestAvailOptionsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Best Available options Service: Opargoapp Connection Error");
            updatePracticeBestAvailOptionsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeBestAvailOptionsPromise.promise;
    }

    function updatePracticeBodyPartFiltering(practiceId, bodyPartFilter) {
      var updatePracticeBodyPartFilteringPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeBodyPartFiltering");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateBodyPartFilteringOptPref',
        data : {
          'flag' : bodyPartFilter },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeBodyPartFilteringResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBodyPartFilteringResponse, true));
            if(updatePracticeBodyPartFilteringResponse.data.response.status === "success") {
              updatePracticeBodyPartFilteringPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeBodyPartFilteringPromise.reject(updatePracticeBodyPartFilteringResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Body Part Filtering Service: Opargoapp Connection Error");
            updatePracticeBodyPartFilteringPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeBodyPartFilteringPromise.promise;
    }

    function updatePracticeRefProviderReq(practiceId, refProviderReq) {
      var updatePracticeRefProviderReqPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeRefProviderReq");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateRefProviderReqPref',
        data : {
          'flag' : refProviderReq },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeRefProviderReqResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeRefProviderReqResponse, true));
            if(updatePracticeRefProviderReqResponse.data.response.status === "success") {
              updatePracticeRefProviderReqPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeRefProviderReqPromise.reject(updatePracticeRefProviderReqResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Ref Prov Req Service: Opargoapp Connection Error");
            updatePracticeRefProviderReqPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeRefProviderReqPromise.promise;
    }

    function updatePracticeLocationDistanceSort(practiceId, locationDistanceSort) {
      var updatePracticeLocationDistanceSortPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeLocationDistanceSort");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateLocationDistanceSortOptPref',
        data : {
          'flag' : locationDistanceSort },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeLocationDistanceSortResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeBodyPartFilteringResponse, true));
            if(updatePracticeLocationDistanceSortResponse.data.response.status === "success") {
              updatePracticeLocationDistanceSortPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeLocationDistanceSortPromise.reject(updatePracticeLocationDistanceSortResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Location Distance Sort Service: Opargoapp Connection Error");
            updatePracticeLocationDistanceSortPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeLocationDistanceSortPromise.promise;
    }

    function updatePracticeLocationDistanceOpt(practiceId, locationDistanceOpt) {
      var updatePracticeLocationDistanceOptPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeLocationDistanceOpt");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateLocationDistanceOptPref',
        data : {
          'flag' : locationDistanceOpt },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeLocationDistanceOptResponse) { /*Promise Successful */
            if(updatePracticeLocationDistanceOptResponse.data.response.status === "success") {
              updatePracticeLocationDistanceOptPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeLocationDistanceOptPromise.reject(updatePracticeLocationDistanceOptResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Location Distance Opt Service: Opargoapp Connection Error");
            updatePracticeLocationDistanceOptPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeLocationDistanceOptPromise.promise;
    }

    function updatePracticeSpecificDateLookBack(practiceId, lookBack) {
      var updatePracticeSpecificDateLookBackPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeSpecificDateLookBack");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateSpecificDtLookBackOptPref',
        data : {
          'lookback' : lookBack },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeSpecificDateLookBackResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeSpecificDateLookBackResponse, true));
            if(updatePracticeSpecificDateLookBackResponse.data.response.status === "success") {
              updatePracticeSpecificDateLookBackPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeSpecificDateLookBackPromise.reject(updatePracticeSpecificDateLookBackResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Schedule Day look back Service: Opargoapp Connection Error");
            updatePracticeSpecificDateLookBackPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeSpecificDateLookBackPromise.promise;
    }

    function updatePracticeSpecificDateOptions(practiceId, options) {
      var updatePracticeSpecificDateOptionsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeSpecificDateOptions");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateSpecificDateOptionsOptPref',
        data : {
          'options' : options },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeSpecificDateOptionsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeSpecificDateOptionsResponse, true));
            if(updatePracticeSpecificDateOptionsResponse.data.response.status === "success") {
              updatePracticeSpecificDateOptionsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeSpecificDateOptionsPromise.reject(updatePracticeSpecificDateOptionsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Specific Date options Service: Opargoapp Connection Error");
            updatePracticeSpecificDateOptionsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeSpecificDateOptionsPromise.promise;
    }

    function updatePracticeSpecificDateOrigin(practiceId, origin) {
      var updatePracticeSpecificDateOriginPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeSpecificDateOrigin");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateSpecificDtOriginOptPref',
        data: {
          'origin' : origin },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeSpecificDateOriginResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeSpecificDateOriginResponse, true));
            if(updatePracticeSpecificDateOriginResponse.data.response.status === "success") {
              updatePracticeSpecificDateOriginPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeSpecificDateOriginPromise.reject(updatePracticeSpecificDateOriginResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Number of Segments Service: Opargoapp Connection Error");
            updatePracticeSpecificDateOriginPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeSpecificDateOriginPromise.promise;
    }

    function updatePracticeSpecificDateRange(practiceId, range) {
      var updatePracticeSpecificDateRangePromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeSpecificDateRange");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateSpecificDtRangeOptPref',
        data: {
          'range' : range },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeSpecificDateRangeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeSpecificDateRangeResponse, true));
            if(updatePracticeSpecificDateRangeResponse.data.response.status === "success") {
              updatePracticeSpecificDateRangePromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeSpecificDateRangePromise.reject(updatePracticeSpecificDateRangeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Number of Segments Service: Opargoapp Connection Error");
            updatePracticeSpecificDateRangePromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeSpecificDateRangePromise.promise;
    }

    function updatePracticeOverrideApptType(practiceOverrideApptTypeObj) {
      var updatePracticeOverrideApptTypePromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeOverrideApptType");
      $http({ method : 'POST', url : 'opargoapp/admin/updateOverrideAppointmentType',
        data : { 'id' : practiceOverrideApptTypeObj.id,
             'pms_override_appt_type' : practiceOverrideApptTypeObj.pms_override_appt_type,
             'pms_override_appt_type_duration' : practiceOverrideApptTypeObj.pms_override_appt_type_duration,
             'enabled' : practiceOverrideApptTypeObj.enabled },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeOverrideApptTypeResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeOverrideApptTypeResponse, true));
            if(updatePracticeOverrideApptTypeResponse.data.response.status === "success") {
              updatePracticeOverrideApptTypePromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeOverrideApptTypePromise.reject(updatePracticeOverrideApptTypeResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Override Settings Service: Opargoapp Connection Error");
            updatePracticeOverrideApptTypePromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeOverrideApptTypePromise.promise;
    }

    function updatePracticeOverrideSetting(practiceOverrideSettingsObj) {
      var updatePracticeOverrideSettingPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeOverrideSetting");
      $http({ method : 'POST', url : 'opargoapp/admin/updateOverrideSetting',
        data : { 'override_enabled' : practiceOverrideSettingsObj.enabled },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeOverrideSettingResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeOverrideSettingResponse, true));
            if(updatePracticeOverrideSettingResponse.data.response.status === "success") {
              updatePracticeOverrideSettingPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeOverrideSettingPromise.reject(updatePracticeOverrideSettingResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Override Settings Service: Opargoapp Connection Error");
            updatePracticeOverrideSettingPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeOverrideSettingPromise.promise;
    }

    function updatePracticeProviderModifier(providerId, providerModifiers) {
      var updatePracticeProviderModifierPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeProviderModifier");
      $http({ method : 'POST', url : 'opargoapp/admin/updateProviderModifier',
        data : { 'id': providerId,
          'payers_modifiers': providerModifiers},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticeProviderModifierResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeProviderModifierResponse, true));
            if(updatePracticeProviderModifierResponse.data.response.status === "success") {
              updatePracticeProviderModifierPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeProviderModifierPromise.reject(updatePracticeProviderModifierResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Provider Modifier Service: Opargoapp Connection Error");
            updatePracticeProviderModifierPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeProviderModifierPromise.promise;
    }

    function updatePracticeDirectScheduling(practiceId, patientFacing, directScheduling, userLimit, practProactiveCareListPref, practTextSMSLimit) {
      var updatePracticeDirectSchedulingPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeDirectScheduling");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateDirectSchedulingPref',
        data: {
          'patient_facing': patientFacing,
          'direct_scheduling': directScheduling,
          'user_limit' : userLimit ,
          'proactive_carelist' : practProactiveCareListPref ,
          'textsms_limit' : practTextSMSLimit},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeDirectSchedulingResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeDirectSchedulingResponse, true));
            if(updatePracticeDirectSchedulingResponse.data.response.status === "success") {
              updatePracticeDirectSchedulingPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeDirectSchedulingPromise.reject(updatePracticeDirectSchedulingResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice DirectScheduling Service: Opargoapp Connection Error");
            updatePracticeDirectSchedulingPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeDirectSchedulingPromise.promise;
    }

    function updatePracticeWeightsOptPreferences(practiceId, weightOptPrefObj) {
      var updatePracticeWeightsOptPreferencesPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminService.updatePracticeWeightsOptPreferences");
      $http({ method : 'POST', url : 'opargoapp/opargoAdmin/updateWeightsOptPref',
        data: {
          'settings' : weightOptPrefObj },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId
        }})
        .then(function successCallback(updatePracticeWeightsOptPreferencesResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeWeightsOptPreferencesResponse, true));
            if(updatePracticeWeightsOptPreferencesResponse.data.response.status === "success") {
              updatePracticeWeightsOptPreferencesPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticeWeightsOptPreferencesPromise.reject(updatePracticeWeightsOptPreferencesResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Weight Opt Preferences Service: Opargoapp Connection Error");
            updatePracticeWeightsOptPreferencesPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticeWeightsOptPreferencesPromise.promise;
    }

    function validatePracticeCPT(practiceCPTCode) {
      var validatePracticeCPTPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.validatePracticeCPT");
      $http({ method : 'POST', url : 'opargoapp/admin/cptByCode',
        data : { 'cpt_code' :practiceCPTCode},
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(validatePracticeCPTResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(validatePracticeCPTResponse, true));
            if(!Utils.isUndefinedOrNull(validatePracticeCPTResponse.data.response.cpt)) {
              validatePracticeCPTPromise.resolve(true);
            } else { validatePracticeCPTPromise.resolve(false); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Validate Practice CPT Service: Opargoapp Connection Error");
            validatePracticeCPTPromise.reject(MESSAGES.ERROR);
          });
      return validatePracticeCPTPromise.promise;
    }

    function postResults(requestURL, requestBody) {
      return $q(function(resolve, reject) {
        $http({
          method : 'POST',
          url : requestURL,
          data : requestBody,
          headers : {
            'username' : SessionServices.getCurrentUser().username,
            'practice_id' : SessionServices.getCurrentPractice().practice_id,
            'practice' : SessionServices.getCurrentPractice().practice_name,
            'session' : SessionServices.getSessionId()
          }
        }).then(function(httpResponse) { /*Promise Successful */
          if(httpResponse.data.response.status === "success") {
            resolve(httpResponse.data.response.result);
          } else { reject(httpResponse.data.response.message); }
        }, function() { /* Promise Failed */
          $log.warn("Post AcitivitySet: " + requestURL + " Opargoapp Connection Error");
          reject(MESSAGES.ERROR);
        });
      });
    }

    function getResults(requestURL) {
      return $q(function(resolve, reject) {
        $http.get(requestURL, {
          headers : {
            'username' : SessionServices.getCurrentUser().username,
            'practice_id' : SessionServices.getCurrentPractice().practice_id,
            'session' : SessionServices.getSessionId()
          }
        }).then(function(httpResponse) { /*Promise Successful */
          if(httpResponse.data.response.status === "success") {
            resolve(httpResponse.data.response.result);
          } else { reject(httpResponse.data.response.message); }
        }, function() { /* Promise Failed */
          $log.warn("Get AcitivitySet: " + requestURL + " Opargoapp Connection Error");
          reject(MESSAGES.ERROR);
        });
      });
    }

    function updatePracticePatientFacingSettings(practicePatientFacingSettingsObj) {
      var updatePracticePatientFacingSettingsPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.updatePracticePatientFacingSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/updatePracticePatientFacingSettings',
        data : { 'practiceappointmenttype' : practicePatientFacingSettingsObj.practiceappointmenttype,
                 'praticetext' : practicePatientFacingSettingsObj.practiceText,
                 'practicedisplayname': practicePatientFacingSettingsObj.practicedisplayname,
                 'practicephonenumber': practicePatientFacingSettingsObj.practicephonenumber.toString() },
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId()
        }})
        .then(function successCallback(updatePracticePatientFacingSettingsResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(updatePracticeChangeCancelSettingsResponse, true));
            if(updatePracticePatientFacingSettingsResponse.data.response.status === "success") {
              updatePracticePatientFacingSettingsPromise.resolve(MESSAGES.SUCCESS);
            } else { updatePracticePatientFacingSettingsPromise.reject(updatePracticePatientFacingSettingsResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Update Practice Patient Facing Settings Service: Opargoapp Connection Error");
            updatePracticePatientFacingSettingsPromise.reject(MESSAGES.ERROR);
          });
      return updatePracticePatientFacingSettingsPromise.promise;
    }

    function getPracticeAdminPatientFacingSettings() {
      var getPracticeAdminPatientFacingSettingsPromise = $q.defer(); /* Create service promise */
      $log.debug("SERVICE CALLED: app.adminServices.getPracticePatientFacingSettings");
      $http({ method : 'POST', url : 'opargoapp/admin/getPracticeAdminPatientFacingSettings',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'session' : SessionServices.getSessionId(),
              'practice_id' : SessionServices.getCurrentPractice().practice_id
        }}).then(function successCallback(getPracticeAdminPatientFacingSettingsResponse) { /*Promise Successful */
            if(getPracticeAdminPatientFacingSettingsResponse.data.response.status === "success") {
              getPracticeAdminPatientFacingSettingsPromise.resolve(getPracticeAdminPatientFacingSettingsResponse.data.response.practicePatientFacingSettings);
            } else {getPracticeAdminPatientFacingSettingsPromise.resolve({});}
          }, function errorCallback(errorResponse) { /* Promise Failed */
            $log.warn("Get Practice Patient Facing Settings Service: Opargoapp Connection Error");
            getPracticeAdminPatientFacingSettingsPromise.reject(MESSAGES.ERROR);
          });
      return getPracticeAdminPatientFacingSettingsPromise.promise;
    }

    function getPracticeProactiveCoordinators(practiceId) {
      var getProactiveCoordinatorPromise = $q.defer();
      $log.debug("SERVICE CALLED: app.adminService.getPracticeProactiveCoordinators");
      $http({ method : 'GET', url : 'opargoapp/opargoAdmin/admins',
        headers : { 'username' : SessionServices.getCurrentUser().username,
              'practice_id' : SessionServices.getCurrentPractice().practice_id,
              'session' : SessionServices.getSessionId(),
              'user_practice_id' : practiceId,
              'user_reqFrom' : 'ProgramCoordinator'
        }})
        .then(function successCallback(getProactiveCoordinatorResponse) { /*Promise Successful */
            //$log.debug("SERVICE RESPONSE OBJ:", angular.toJson(getPracticeAdminsResponse, true));
            if(getProactiveCoordinatorResponse.data.response.status === "success") {
              getProactiveCoordinatorPromise.resolve(getProactiveCoordinatorResponse.data.response.practice_admins);
            } else { getProactiveCoordinatorPromise.reject(getProactiveCoordinatorResponse.data.response.message); }
          }, function errorCallback() { /* Promise Failed */
            $log.warn("Get Practice Admins Service: Opargoapp Connection Error");
            getProactiveCoordinatorPromise.reject(MESSAGES.ERROR);
          });
      return getProactiveCoordinatorPromise.promise;
    }
  }
})();
