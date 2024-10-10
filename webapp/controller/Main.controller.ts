import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace com.logaligroup.invoices.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        
        this.viewModel();
    }

    public onShowMessage() : void {
        let oResourceBoundle = <ResourceBundle>(<ResourceModel>this.getView()?.getModel("i18n"))?.getResourceBundle();
        MessageToast.show(oResourceBoundle.getText("msg") || 'no te');      
    }

    private viewModel() : void {
        const oData = {
            recipient: {
                name: "World"
            }
        }
        const oModel = new JSONModel(oData);
        this.getView()?.setModel(oModel, 'view');
    }

}