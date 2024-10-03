// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logali/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel"
],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 * @param {*} models 
 * @param {sap.ui.model.resource.ResourceModel} ResourceModel 
 * @returns 
 */
    function (Controller, MessageToast, models, ResourceModel) {
        "use strict";

        return Controller.extend("logali.sapui5.controller.View1", {
            onInit: function () {
                // set data model on the view
                this.getView().setModel(models.createMyModel());

                //set i18n model on the view
               // var i18nModel = new ResourceModel({ bundleName : "logali.sapui5.i18n.i18n"});
               // this.getView().setModel(i18nModel, "i18n"); 

            },

            onShowHello: function () {
                
                var oModel = this.getOwnerComponent().getModel("myModel");
                var aInputData = oModel.getProperty("/inputData");

                // var oBundle = this.getView().getModel("i18n").getResourceBundle();
                
                 var vTextValue = aInputData.value;
                // var sMsg = oBundle.getText("helloMsg", [vTextValue] );

                // MessageToast.show(sMsg);

                let oResourceBoundle = this.getView()?.getModel("i18n")?.getResourceBundle();
                const sMsg = oResourceBoundle.getText("helloMsg", [vTextValue] );
                MessageToast.show(oResourceBoundle.getText(sMsg));   
            },

            onCloseDialog: function() {
                // note: We don't need to chain to the pDialog promise, since this event handler
                // is only called from within the loaded dialog itself.
                MessageToast.show("HEllo");
            }            
        });
    });
