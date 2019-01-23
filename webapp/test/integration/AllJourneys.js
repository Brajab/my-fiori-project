/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"odata1/odata1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"odata1/odata1/test/integration/pages/View1",
	"odata1/odata1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "odata1.odata1.view.",
		autoWait: true
	});
});