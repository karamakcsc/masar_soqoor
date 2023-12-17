frappe.ui.form.on("Quotation Item", "refresh", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
    if (frappe.user.has_role('Showroom User')&& !frappe.user.has_role('System Manager') && frappe.user.has_role('Sales Manager') && !frappe.user.has_role('Sales User')) {
  cur_frm.set_value('warehouse', 'Showroom - SATC')
   cur_frm.refresh_field();
 }
});




frappe.ui.form.on('Quotation', {
    onload: function (frm, cdt, cdn) {
        if (!frappe.user.has_role('System Manager')) {
            cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
            cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
            // frm.get_field('items').grid.cannot_add_rows = true;
        }
    },
    refresh: function (frm, cdt, cdn) {
        if (!frappe.user.has_role('System Manager')) {
            cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
            cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
            // frm.get_field('items').grid.cannot_add_rows = true;
        }
    }
});


  frappe.ui.form.on("Quotation", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager')){
     {
         var df=frappe.meta.get_docfield("Quotation", "quotation_to",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "order_type",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "transaction_date",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "tax_category",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "taxes_and_charges",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "taxes",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "currency",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "currency",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "selling_price_list",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "price_list_currency",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "plc_conversion_rate",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Quotation", "ignore_pricing_rule",frm.doc.name);
         df.read_only=1;
      
         frm.toggle_display("taxes", false);
         frm.toggle_display("incoterm", false);
         frm.toggle_display("shipping_rule", false);
         frm.toggle_display("payment_schedule", false);
         frm.toggle_display("payment_schedule_section", false);
         frm.toggle_display("print_settings", false);
         frm.toggle_display("additional_info_section", false);
         
         
  
         frm.set_value('quotation_to', 'Customer')
         frm.set_value('order_type', 'Sales')
         frm.set_value('tax_category', 'VAT_15')
         frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC')

  
         frm.refresh_fields();
     }
   }
  });


  frappe.ui.form.on('Quotation', {
    refresh(frm) {
        if ( !frappe.user.has_role('System Manager')) {
        setTimeout(() => {
            frm.remove_custom_button('Opportunity', 'Get Items From');
            frm.remove_custom_button('Subscription', 'Create');
        }, 10);
    }
}
});