/*
 * This file is part of Invenio.
 * Copyright (C) 2014 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 */

require.config({
  baseUrl: "/",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    ui: "vendors/jquery-ui/ui",
    "jqueryui-timepicker": "vendors/jqueryui-timepicker-addon/dist",
    "jquery-form": "vendors/jquery-form/jquery.form",
    hgn: "vendors/requirejs-hogan-plugin/hgn",
    hogan: "vendors/hogan/web/builds/3.0.2/hogan-3.0.2.amd",
    text: "vendors/requirejs-hogan-plugin/text",
    flight: "vendors/flight/lib",
    typeahead: "vendors/typeahead.js/dist/typeahead.bundle",
    "bootstrap-select": "js/bootstrap-select",
    "jquery-caret": "vendors/jquery.caret/dist/jquery.caret-1.5.2",
    "jquery-tokeninput": "vendors/jquery-tokeninput/src/jquery.tokeninput",
    "jquery-jeditable": "vendors/jquery.jeditable/index",
    "moment": "vendors/moment/moment",
    "bootstrap-datetimepicker": "vendors/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker",
    bootstrap: "vendors/bootstrap/dist/js/bootstrap",
  },
  shim: {
    jquery: {
      exports: "$"
    },
    "jqueryui-timepicker/jquery-ui-sliderAccess": {
      deps: ["jquery"]
    },
    "jqueryui-timepicker/jquery-ui-timepicker-addon": {
      deps: ["jquery",
        "ui/slider"
      ]
    },
    "jqueryui-timepicker/i18n/jquery-ui-timepicker-addon-i18n": {
      deps: ["jqueryui-timepicker/jquery-ui-timepicker-addon"]
    },
    typeahead: {
      deps: ["jquery"],
      exports: "Bloodhound"
    },
    "bootstrap-select": {
      deps: ["jquery"],
      exports: "$.fn.buttonSelect"
    },
    "jquery-caret": {
      deps: ["jquery"],
      exports: "$.fn.caret"
    },
    "jquery-tokeninput": {
      deps: ["jquery"],
      exports: "$.fn.tokenInput"
    },
    "jquery-jeditable": {
      deps: ["jquery"],
      exports: "$.fn.editable"
    },
    bootstrap: {
      deps: ["jquery"]
    },
    "bootstrap-datetimepicker": {
      deps: ["jquery", "bootstrap", "moment"],
      exports: "$.fn.datetimepicker"
    },
  }
})
