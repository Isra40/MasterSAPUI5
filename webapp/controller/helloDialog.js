// @ts-nocheck
sap.ui.define([
 "sap/ui/base/ManagedObject",
 "sap/ui/core/Fragment"
], 
function (ManagedObject, Fragment){
    "use strict"
    return ManagedObject.extend("logali.sapui5.controller.helloDialog", {

        constructor: function(oView) {
            this._oView = oView;
        },

        exit : function() {
            delete this._oView;
        },

        open : function() {

            const oView = this._oView;

            if (!oView.byId("helloDialog")){

                let oFragmetController = {

                    onCloseDialog : function() {
                        oView.byId("helloDialog").close();
                    }
                };

                Fragment.load({
                    id: oView.getId(),
                    name: "logali.sapui5.view.HelloDialog",
                    controller :oFragmetController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.open();
            }               
        },
    });

});