"use strict";

var app = angular.module("angleCRUD", ["ngStorage"]);

app.controller("angleCRUDctrl", function($scope) {

  $scope.contacts = [];

  $scope.contacts.push({
    name: "John Doe",
    email: "joedoe@bro.co",
    phone: "867-5309"
  });

  $scope.contacts.push({
    name: "Jane Doe",
    email: "jaeday@hurray.na",
    phone: "867-5309"
  });
});
