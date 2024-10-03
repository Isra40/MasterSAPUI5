// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 * @param {*} models 
 * @param {sap.ui.model.resource.ResourceModel} ResourceModel 
 * @returns 
 */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("logali.sapui5.controller.Form01", {
            onInit: function () {
            },

            onEnviarForm01: function () {
                
                MessageToast.show("Form01");   
            }
        });
    });