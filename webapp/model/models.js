sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
function (JSONModel) {
    "use strict";

    return {
        /**
         * Provides runtime info for the device the UI5 app is running on as JSONModel
         */
        createMyModel: function () {

            var oData = {
                inputData: {
                    value: "Default text",
                    enabled: true // Para hacer binding al estado 'enabled' del input
                }
            };

            var oModel = new JSONModel(oData);
            return oModel;            
            
        }
    };

});