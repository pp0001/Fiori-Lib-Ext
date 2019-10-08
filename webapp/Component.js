jQuery.sap.declare("grcaud.zpiao_aud_report_ext.Component");

sap.ui.component.load({
	name: "sap.grc.acs.aud.audit.app",
	url: "/sap/bc/ui5_ui5/sap/GRCAUD_AUDIT/app"
});
this.sap.grc.acs.aud.audit.app.Component.extend("grcaud.zpiao_aud_report_ext.Component", {
	metadata: {
		manifest: "json"
	}
});