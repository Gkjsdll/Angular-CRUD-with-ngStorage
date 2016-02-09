"use strict";

var app = angular.module("angleCRUD", ["ngStorage"]);

app.controller("angleCRUDctrl", function($scope, $localStorage) {

  if(!$localStorage.contacts) $localStorage.contacts = [];

  $localStorage.contacts;

  $scope.contacts = $localStorage.contacts;

  $scope.addContact = function() {
    $localStorage.contacts.push($scope.newContact)
    $scope.newContact = null;
  }

  $scope.removeContact = function() {
    var index = $localStorage.contacts.indexOf(this.contact);
    $localStorage.contacts.splice(index, 1);
  }
});
