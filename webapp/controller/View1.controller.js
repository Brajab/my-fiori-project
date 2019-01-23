sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("odata1.odata1.controller.View1", {
		onInit:function(){
			var sServiceUrl='/ODATA/V2/Northwind/Northwind.svc/';
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,false);
			this.getView().setModel(oModel);
		}

	});
});