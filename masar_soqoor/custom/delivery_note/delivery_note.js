frappe.ui.form.on("Delivery Note", "validate", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if (d.item_code)  {
   d.warehouse= frm.set_warehouse
   cur_frm.refresh_field();
   frm.refresh_field();
}
});

frappe.ui.form.on('Delivery Note', {
    before_load: function(frm) {
            frm.fields_dict.items.grid.set_column_disp('rate', false);
            frm.fields_dict.items.grid.set_column_disp('amount', false);
            frm.fields_dict.items.grid.set_column_disp('discount_and_margin', false);
            frm.fields_dict.items.grid.set_column_disp('price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('base_price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('margin_rate_or_amount', false);
            frm.fields_dict.items.grid.set_column_disp('rate_with_margin', false);
            frm.fields_dict.items.grid.set_column_disp('discount_percentage', false);
            frm.fields_dict.items.grid.set_column_disp('discount_amount', false);
            frm.fields_dict.items.grid.set_column_disp('base_rate_with_margin', false);
            frm.refresh_fields();

    },
    refresh: function(frm) {
            frm.fields_dict.items.grid.set_column_disp('rate', false);
            frm.fields_dict.items.grid.set_column_disp('amount', false);
            frm.fields_dict.items.grid.set_column_disp('discount_and_margin', false);
            frm.fields_dict.items.grid.set_column_disp('price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('base_price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('margin_rate_or_amount', false);
            frm.fields_dict.items.grid.set_column_disp('rate_with_margin', false);
            frm.fields_dict.items.grid.set_column_disp('discount_percentage', false);
            frm.fields_dict.items.grid.set_column_disp('discount_amount', false);
            frm.fields_dict.items.grid.set_column_disp('base_rate_with_margin', false);
            frm.refresh_fields();

        },
    Validate: function(frm) {
            frm.fields_dict.items.grid.set_column_disp('base_price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('rate', false);
            frm.fields_dict.items.grid.set_column_disp('amount', false);
            frm.fields_dict.items.grid.set_column_disp('discount_and_margin', false);
            frm.fields_dict.items.grid.set_column_disp('price_list_rate', false);
            frm.fields_dict.items.grid.set_column_disp('margin_rate_or_amount', false);
            frm.fields_dict.items.grid.set_column_disp('rate_with_margin', false);
            frm.fields_dict.items.grid.set_column_disp('discount_percentage', false);
            frm.fields_dict.items.grid.set_column_disp('discount_amount', false);
            frm.fields_dict.items.grid.set_column_disp('base_rate_with_margin', false);
            frm.refresh_fields();

    }

});
