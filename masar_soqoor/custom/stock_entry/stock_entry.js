frappe.ui.form.on("Stock Entry", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager') ) {
        var df_customer_group = frappe.meta.get_docfield("Stock Entry", "from_warehouse", frm.doc.name);
        df_customer_group.read_only = 1;
        var df_customer_group = frappe.meta.get_docfield("Stock Entry", "to_warehouse", frm.doc.name);
        df_customer_group.read_only = 1;

        frm.toggle_display("get_stock_and_rate", false);
        frm.toggle_display("set_posting_time", false);
        frm.toggle_display("inspection_required", false);
        frm.toggle_display("apply_putaway_rule", false);
        frm.toggle_display("add_to_transit", false);
        frm.toggle_display("from_bom", false);
        frm.toggle_display("additional_costs_section", false);
        frm.toggle_display("additional_costs", false);
        frm.toggle_display("total_additional_costs", false);
        frm.toggle_display("total_outgoing_value", false);
        frm.toggle_display("total_incoming_value", false);
        frm.toggle_display("value_difference", false);
        
        frm.refresh_fields();
    }
});


frappe.ui.form.on('Stock Entry', {
  onload: function (frm, cdt, cdn) {
      if (!frappe.user.has_role('System Manager') && !frappe.user.has_role('Manufacturing Manager')) {
          cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
          cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
          frm.get_field('items').grid.cannot_add_rows = true;
      }
  },
  refresh: function (frm, cdt, cdn) {
      if (!frappe.user.has_role('System Manager') && !frappe.user.has_role('Manufacturing Manager')) {
          cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
          cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
          frm.get_field('items').grid.cannot_add_rows = true;
      }
  }
});

frappe.ui.form.on("Stock Entry", "onload", function(frm) {
    if (frappe.user.has_role('Sales User')) {
        if(frm.doc.docstatus !=1){
        frm.set_value('stock_entry_type', "Material Transfer");
        frm.set_value('from_warehouse', 'Goods In Transit - SATC')
        // frm.set_value('to_warehouse', 'Showroom - SATC')

        frm.refresh_fields();
    }
}
});


frappe.ui.form.on("Stock Entry", "onload", function(frm) {
    if (frappe.user.has_role('Showroom User') && frappe.user.has_role('Stock User') ) {
        if(frm.doc.docstatus !=1){
        frm.set_value('stock_entry_type', "Material Transfer");
        frm.set_value('from_warehouse', 'Goods In Transit - SATC')
        frm.set_value('to_warehouse', 'Showroom - SATC')

        frm.refresh_fields();
    }
}
});

frappe.ui.form.on("Stock Entry", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager') && !frappe.user.has_role('Stock Manager') ) {
        var df_customer_group = frappe.meta.get_docfield("Stock Entry", "stock_entry_type", frm.doc.name);
        df_customer_group.read_only = 1;
        
        frm.refresh_fields();
    }
});


//////// Hide Basic Rate When Type is Transfer /////////
frappe.ui.form.on('Stock Entry', {
    onload: function(frm) {
        if (!frappe.user.has_role('System Manager') ){
            if (frm.doc.stock_entry_type === "Material Transfer") {
                frm.get_field('items').grid.toggle_display('basic_rate', false);
                frm.get_field('items').grid.toggle_display('valuation_rate', false);
            }
        }
    },
    stock_entry_type: function(frm) {
        if (!frappe.user.has_role('System Manager') ){
            if (frm.doc.stock_entry_type === "Material Transfer") {
                console.log("TYUIK");
                frm.get_field('items').grid.toggle_display('basic_rate', false);
                frm.get_field('items').grid.toggle_display('valuation_rate', false);
            }
        }
    }
});