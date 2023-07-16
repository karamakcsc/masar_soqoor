frappe.ui.form.on("Journal Entry Account", "account", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
    if (d.account === "215001 - مصاريف رواتب  مستحقة الدفع - SATC") {
        frappe.model.set_value(cdt, cdn, "party_type", "Employee");
    } else if (d.account === "52110001 - رواتب و اجور إداري - SATC") {
        frappe.model.set_value(cdt, cdn, "party_type", "Employee");
    } else if (d.account === "5220001 - رواتب واجور قسم المبيعات - SATC") {
        frappe.model.set_value(cdt, cdn, "party_type", "Employee");
    } else if (d.account === "5120001 - رواتب و اجور انتاج - SATC") {
        frappe.model.set_value(cdt, cdn, "party_type", "Employee");
    } else if (d.account === "114206 - ذمم الموظفين - SATC") {
        frappe.model.set_value(cdt, cdn, "party_type", "Employee");
    }
    refresh_field("party_type", cdt, cdn);
});
