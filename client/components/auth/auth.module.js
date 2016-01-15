'use strict';

angular.module('automaApp.auth', [
  'automaApp.constants',
  'automaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
