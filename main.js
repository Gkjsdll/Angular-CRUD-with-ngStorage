"use strict";

var app = angular.module("angleCRUD", ["ngStorage"]);

var $updateContact;

$($updateContact = $("#updateContact"));

app.controller("angleCRUDctrl", function($scope, $localStorage) {

  if(!$localStorage.contacts){
    $localStorage.contacts = [];
    swal("Double click on a contact's info to edit it.");
  }

  $localStorage.contacts;

  $scope.contacts = $localStorage.contacts;

  $scope.newFieldValue = "";

  $scope.addContact = function() {
    if($scope.newContact){
      var contact = $scope.newContact;
      if(contact.name && contact.email && contact.phone){
        $localStorage.contacts.push($scope.newContact)
        $scope.newContact = null;
      }
      else {
        swal("Error", "You must enter a name, e-mail, and phone number.", "error");
      }
    } else {
      swal("Error", "You must enter a name, e-mail, and phone number.", "error");
    }

  }

  $scope.removeContact = function() {
    var index = $localStorage.contacts.indexOf(this.contact);
    $localStorage.contacts.splice(index, 1);
  }


  $scope.editContact = function($index) {
    var editing = this;
    var index = $localStorage.contacts.indexOf(this.contact);
    var field = this.field.substr(0, 1).toUpperCase() + this.field.substr(1);
    $("#modEditContact").modal();
    $scope.modalEditField = field;
    $scope.modalEditValue = this.value;
    $updateContact.on("click", function(target) {
      $localStorage.contacts[index][editing.field] = $scope.newFieldValue;
      $scope.newFieldValue = null;
      $updateContact.off("click");
      location.reload(); //page's text not updating automatically
      $("#modEditContact").modal('toggle');
    });
  }

});
