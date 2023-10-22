
frappe.ui.form.on("Sales Order", "validate", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if (d.item_code)  {
   d.warehouse= frm.set_warehouse
   cur_frm.refresh_field();
   frm.refresh_field();
}
});