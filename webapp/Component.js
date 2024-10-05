/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "logali/sapui5/model/models",
        "sap/m/Text",
        "sap/ui/model/resource/ResourceModel",
        "./controller/helloDialog"
    ],

    function (UIComponent, models, helloDialog) {
        "use strict";

        return UIComponent.extend("logali.sapui5.Component", {
            
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createMyModel(), "myModel");

                //set i18n model on the view
                //var i18nModel = new ResourceModel({ bundleName : "logali.sapui5.i18n.i18n"});
                //this.setModel(i18nModel, "i18n"); 

                 this._helloDialog = new helloDialog(this.getRootControl());

            },
            exit : function (){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function (){
                this._helloDialog.open();
            }

        });
    }
);