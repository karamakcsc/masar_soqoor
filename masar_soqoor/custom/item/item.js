frappe.ui.form.on("Item", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager')) {
        frm.toggle_display("valuation_rate", false);
        frm.toggle_display("purchasing_tab", false);
        frm.toggle_display("purchase_uom", false);
        frm.toggle_display("min_order_qty", false);
        frm.toggle_display("safety_stock", false);
        frm.toggle_display("is_purchase_item", false);
        frm.toggle_display("lead_time_days", false);
        frm.toggle_display("last_purchase_rate", false);
        frm.toggle_display("is_customer_provided_item", false);
        frm.toggle_display("customer", false);


        frm.refresh_fields();
    }
});