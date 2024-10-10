import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Dialog from "sap/m/Dialog";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace com.logaligroup.invoices.controller
 */

export default class HelloPanel extends Controller {

    private dialog : Dialog;

    private formModel() : void {
         const oData = {
            FirstName: "",
            LastName : ""
         }
         const oModel = new JSONModel(oData);
         this.getView()?.setModel(oModel, 'form');
    }

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        this.formModel();
        
    }

    public onShowMessage() : void {
        let oResourceBoundle = <ResourceBundle>(<ResourceModel>this.getView()?.getModel("i18n"))?.getResourceBundle();
        MessageToast.show(oResourceBoundle.getText("msg") || 'no te');      
    }    

    public async onShowDialog() : Promise<void> {
        this.dialog??= await <Promise<Dialog>> this.loadFragment({
            name: "com.logaligroup.invoices.fragment.HelloDialog"
        })
        this.dialog.open();
    }

    public onCloseDialog() : void {
        //(<Dialog>this.getView()?.byId("helloDialog"))?.close();
        this.dialog.close();
        this.formModel();
    }

}