"use strict";

var app = angular.module("angleCRUD", ["ngStorage"]);

app.controller("angleCRUDctrl", function($scope, $localStorage) {

  if(!$localStorage.contacts) $localStorage.contacts = [];

  $localStorage.contacts;

  $scope.contacts = $localStorage.contacts;

  $scope.addContact = function() {
    // $scope.contacts.push($scope.newContact)
    $localStorage.contacts.push($scope.newContact)
    $scope.newContact = null;
  }
});
