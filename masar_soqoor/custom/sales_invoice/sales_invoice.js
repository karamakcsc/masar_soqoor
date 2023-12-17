//////////////////////////////////////////////

frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
	    if (frappe.user_roles.indexOf("Sales Invoice") ==-1 && !frm.doc.ksa_einv_qr && frm.doc.docstatus < 3) {
	        $("button[data-original-title=Print]").hide();
	 
           }     
	}
});frappe.ui.form.on('Sales Invoice', {
  refresh: function(frm) {
    if (!frm.doc.ksa_einv_qr && frm.doc.docstatus ==1){
      // Remove the "Print" option from the menu
      frm.page.clear_menu();
    }
  }
});



// frappe.ui.form.on('Sales Invoice', {
//   setup: function(frm) {
//       if (frm.doc.docstatus != 1) {
//           frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['Sales Person', 'employee', '=', "HR-EMP-00005"]
//                   ]
//               };
//           };

//           frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['employee', '=', "HR-EMP-00005"]
//                   ]
//               };
//           };
//       }
//   }

// });

// frappe.ui.form.on('Sales Invoice', {
//   setup: function(frm) {
//       if (frm.doc.docstatus != 1) {
//           frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['Sales Person', 'employee', '=', "HR-EMP-00040"]
//                   ]
//               };
//           };

//           frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['employee', '=', "HR-EMP-00040"]
//                   ]
//               };
//           };
//       }
//   }
// });



// frappe.ui.form.on('Sales Invoice', {
//   setup: function(frm) {
//       if (frm.doc.docstatus != 1) {
//           frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['Sales Person', 'employee', '=', "HR-EMP-00037"]
//                   ]
//               };
//           };

//           frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['employee', '=', "HR-EMP-00037"]
//                   ]
//               };
//           };
//       }
//   }

// });



// frappe.ui.form.on('Sales Invoice', {
//   setup: function(frm) {
//       if (frm.doc.docstatus != 1) {
//           frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['Sales Person', 'employee', '=', "HR-EMP-00036"]
//                   ]
//               };
//           };

//           frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['employee', '=', "HR-EMP-00036"]
//                   ]
//               };
//           };
//       }
//   }

// });


// frappe.ui.form.on('Sales Invoice', {
//   setup: function(frm) {
//       if (frm.doc.docstatus != 1) {
//           frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['Sales Person', 'employee', '=', "HR-EMP-00007"]
//                   ]
//               };
//           };

//           frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
//               return {
//                   filters: [
//                       ['employee', '=', "HR-EMP-00007"]
//                   ]
//               };
//           };
//       }
//   }
// });


frappe.ui.form.on("Sales Invoice", {
  payment_type: function(frm) {
      if (frappe.user.has_role('Showroom User') && !frappe.user.has_role('Sales Manager') && !frappe.user.has_role('System Manager') && !frappe.user.has_role('Sales User')&& frappe.user.has_role('Stock User')) {
          if (frm.doc.payment_type === 'Cash') {
              frm.set_value('is_pos', 1);
              frm.set_value('Standard','pos_profile');
          } else {
              frm.set_value('is_pos', 0);
          }
          
          frm.refresh_fields();
      }
  },
  onload: function(frm) {
    if (frappe.user.has_role('Showroom User') && !frappe.user.has_role('Sales Manager') && !frappe.user.has_role('System Manager') && !frappe.user.has_role('Sales User')&& frappe.user.has_role('Stock User')) {
        if (frm.doc.payment_type === 'Cash') {
            frm.set_value('is_pos', 1);
            frm.set_value('Standard','pos_profile');
        } else {
            frm.set_value('is_pos', 0);
        }
        
        frm.refresh_fields();
    }
}
});


frappe.ui.form.on("Sales Invoice","onload", function(frm) {

  if (frappe.user.has_role('Showroom User') && !frappe.user.has_role('System Manager')&& frappe.user.has_role('Stock User')) {

    frm.toggle_display("naming_series", false);
    frm.toggle_display("set_posting_time", false);
    frm.toggle_display("permit_no", false);
    frm.toggle_display("vat_emirate", false);
    frm.toggle_display("more_info", false);
    frm.toggle_display("incoterm", false);
    frm.toggle_display("section_break_88", false);
    frm.toggle_display("advances_section", false);
    frm.toggle_display("write_off_section", false);
    frm.toggle_display("edit_printing_settings", false);
    frm.toggle_display("vat_section", false);
    frm.toggle_display("accounting_dimensions_section", false);
    frm.toggle_display("currency_and_price_list", false);
    frm.toggle_display("more_info", false);
    frm.toggle_display("sales_team_section_break", false);
    frm.toggle_display("more_information", false);
    frm.toggle_display("taxes", false);
    frm.toggle_display("disable_rounded_total", false);
    frm.toggle_display("sec_tax_breakup", false);
    frm.toggle_display("packing_list", false);
    frm.toggle_display("use_company_roundoff_cost_center", false);
    frm.toggle_display("redeem_loyalty_points", false);
    frm.toggle_display("shipping_rule", false);
    frm.toggle_display("payment_schedule_section", false);
    
    
    var df=frappe.meta.get_docfield("Sales Invoice", "update_stock",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "is_pos",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "tax_category",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "taxes_and_charges",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "taxes",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "set_warehouse",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "is_debit_note",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "update_billed_amount_in_delivery_note",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "update_billed_amount_in_sales_order",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "return_against",frm.doc.name);
    df.read_only=1;
    var df=frappe.meta.get_docfield("Sales Invoice", "is_return",frm.doc.name);
    df.read_only=1;

    frm.set_value('is_pos', 1);
    frm.set_value('tax_category', 'VAT_15');
    frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC');
    frm.set_value('update_stock', 1);
    frm.set_value('Standard','pos_profile');
    
  }
});



frappe.ui.form.on("Sales Invoice Item", "refresh", function(frm, cdt, cdn) {
  var d = locals[cdt][cdn];
  if (frappe.user.has_role('Showroom User') && frappe.user.has_role('Sales Manager') && !frappe.user.has_role('System Manager') && !frappe.user.has_role('Sales User')&& frappe.user.has_role('Stock User')) {
    cur_frm.set_value('warehouse', 'Showroom - SATC')
     cur_frm.refresh_field();
   }
});



frappe.ui.form.on("Sales Invoice", {
    is_return: function (frm) {
      if (frm.doc.is_return == 1) {
      frm.set_value('naming_series', 'SINV-RET-.YYYY.-')
      refresh_field("naming_series");
    }
    else {
    frm.set_value('naming_series', 'SINV-.YYYY.-')
      refresh_field("naming_series");
    }
  
    }
  });


  frappe.ui.form.on('Sales Invoice', {
    onload: function (frm, cdt, cdn) {
        if (!frappe.user.has_role('System Manager')) {
            cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
            cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
            frm.get_field('items').grid.cannot_add_rows = true;
        }
    },
    refresh: function (frm, cdt, cdn) {
        if (!frappe.user.has_role('System Manager')) {
            cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
            cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
            frm.get_field('items').grid.cannot_add_rows = true;
        }
    }
});



frappe.ui.form.on("Sales Invoice","onload", function(frm) {

    if (frappe.user.has_role('Sales User') && frappe.user.has_role('Sales Manager') && !frappe.user.has_role('System Manager')) {
  
      frm.toggle_display("naming_series", false);
      frm.toggle_display("set_posting_time", false);
      frm.toggle_display("permit_no", false);
      frm.toggle_display("vat_emirate", false);
      frm.toggle_display("more_info", false);
      frm.toggle_display("incoterm", false);
      frm.toggle_display("section_break_88", false);
      frm.toggle_display("advances_section", false);
      frm.toggle_display("write_off_section", false);
      frm.toggle_display("edit_printing_settings", false);
      frm.toggle_display("vat_section", false);
      frm.toggle_display("accounting_dimensions_section", false);
      frm.toggle_display("currency_and_price_list", false);
      frm.toggle_display("more_info", false);
      frm.toggle_display("sales_team_section_break", false);
      frm.toggle_display("more_information", false);
      frm.toggle_display("taxes", false);
      frm.toggle_display("disable_rounded_total", false);
      frm.toggle_display("sec_tax_breakup", false);
      frm.toggle_display("packing_list", false);
      frm.toggle_display("use_company_roundoff_cost_center", false);
      frm.toggle_display("redeem_loyalty_points", false);
      frm.toggle_display("shipping_rule", false);
      frm.toggle_display("payment_schedule_section", false);
      
     
      
      var df=frappe.meta.get_docfield("Sales Invoice", "update_stock",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "is_pos",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "tax_category",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "taxes_and_charges",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "taxes",frm.doc.name);
      df.read_only=1;
    //   var df=frappe.meta.get_docfield("Sales Invoice", "set_warehouse",frm.doc.name);
    //   df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "is_debit_note",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "update_billed_amount_in_delivery_note",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "update_billed_amount_in_sales_order",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "return_against",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "is_return",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "payment_type",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "naming_series",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Invoice", "territory",frm.doc.name);
      df.read_only=1;
      
      frm.set_value('tax_category', 'VAT_15')
      frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC')
      frm.set_value('update_stock', 0);
      frm.set_value('payment_type',"On Account");
      frm.set_value('is_pos', 0);
      
    }
  });
  

  frappe.ui.form.on('Sales Invoice', {
    refresh(frm) {
        if ( !frappe.user.has_role('System Manager')) {
        setTimeout(() => {
            frm.remove_custom_button('Fetch Timesheet');
            frm.remove_custom_button('Subscription', 'Create');
            frm.remove_custom_button('Maintenance Schedule', 'Create');
            frm.remove_custom_button('Invoice Discounting', 'Create');
            frm.remove_custom_button('Quotation', 'Get Items From');
            frm.remove_custom_button('Sales Order', 'Get Items From');
            frm.remove_custom_button('Quality Inspection(s)', 'Create');
            frm.remove_custom_button('Create');
        }, 10);
    }
}
});