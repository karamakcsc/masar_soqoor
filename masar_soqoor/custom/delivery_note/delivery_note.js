frappe.ui.form.on("Delivery Note", "validate", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if (d.item_code)  {
   d.warehouse= frm.set_warehouse
   cur_frm.refresh_field();
   frm.refresh_field();
}
});

frappe.ui.form.on('Delivery Note', {
    refresh: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
            const gridRows = frm.fields_dict['items'].grid.grid_rows;
            gridRows.forEach((row) => {
                row.docfields.forEach((field) => {
                    const fieldName = field.fieldname;
                    if (["base_rate", "base_amount", "rate", "amount", "base_price_list_rate", "discount_and_margin","price_list_rate"].includes(item.fieldname)) {
                        item.df.hidden = 1;
                    } else {
                        item.df.hidden = 0;
                    }
                });
            });
            frm.fields_dict['items'].grid.refresh();
        }
    }
});