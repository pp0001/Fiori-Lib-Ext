sap.ui.controller("grcaud.zpiao_aud_report_ext.controller.BaseControllerExt", {

	AUDIT_GENERATE_REPORT: function () {
		this.currentPhase = this.sWpaPhase;
		this.ActionName = "GENERATE_REPORT";
		this.ObjectType = "AUDIT";
		if (!this._oGenerateFileDialog) {
			this._oGenerateFileDialog = sap.ui.xmlfragment(this.getView().getParent().getSectionId(),
				"grcaud.zpiao_aud_report_ext.fragment.GenerateReportExt", this);
			this.getView().addDependent(this._oGenerateFileDialog);
		}
		this._oGenerateFileDialog.open();
		this._oGenerateFileDialog.getModel().setDeferredGroups(["changes"]);
	},

	confirmGenerateReportBtnPress: function (oEvent) {
		var oParameters = {};

		oParameters.AuditKey = this.getView().getBindingContext().getObject().DBKey;
		oParameters.Category = this._oGenerateFileDialog.getContent()[0].getContent()[1].getSelectedKey();
		oParameters.Rating = this._oGenerateFileDialog.getContent()[0].getContent()[3].getSelectedKey();
		oParameters.Template = this._oGenerateFileDialog.getContent()[0].getContent()[5].getSelectedKey();

		if (oParameters.Category === "" || oParameters.Rating === "" || oParameters.Template === "") {
			if (oParameters.Category === "") {
				this._oGenerateFileDialog.getContent()[0].getContent()[1].setValueState(sap.ui.core.ValueState.Error);
				this._oGenerateFileDialog.getContent()[0].getContent()[1].setValueStateText(this.getView().getModel("acsLibAudI18n").getResourceBundle()
					.getText("MSG_REQUIRED_CATEGORY_FIELD"));
			}
			if (oParameters.Rating === "") {
				this._oGenerateFileDialog.getContent()[0].getContent()[3].setValueState(sap.ui.core.ValueState.Error);
				this._oGenerateFileDialog.getContent()[0].getContent()[3].setValueStateText(this.getView().getModel("acsLibAudI18n").getResourceBundle()
					.getText("MSG_REQUIRED_RATING_FIELD"));
			}
			if (oParameters.Template === "") {
				this._oGenerateFileDialog.getContent()[0].getContent()[5].setValueState(sap.ui.core.ValueState.Error);
				this._oGenerateFileDialog.getContent()[0].getContent()[5].setValueStateText(this.getView().getModel("acsLibAudI18n").getResourceBundle()
					.getText("MSG_REQUIRED_TEMPLATE_FIELD"));
			}
			sap.grc.acs.lib.aud.utils.MessageUtil.showMsg("msgTypeFailed", this.getView().getModel("acsLibAudI18n").getResourceBundle().getText(
				"MSG_REQUIRED_FIELD"));
		} else {
			this._templateClicked(oEvent, oParameters);
		}
	}

});