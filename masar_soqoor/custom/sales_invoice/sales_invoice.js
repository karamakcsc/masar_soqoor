


// frappe.ui.form.on("Sales Invoice", {
//   payment_type: function(frm) {
//       if (frappe.user.has_role('Showroom User') && frappe.user.has_role('Stock User')) {
//         if(frm.doc.docstatus !=1){
//           if (frm.doc.payment_type === 'Cash') {
//               frm.set_value('is_pos', 1);
//               frm.set_value('pos_profile','Standard');
//           } else {
//               frm.set_value('is_pos', 0);
//               frm.set_value('payment_type',"On Account")
//           }
//           var df=frappe.meta.get_docfield("Sales Invoice", "is_return",frm.doc.name);
//             df.read_only=1;
//           frm.refresh_fields();
//       }
//     }
//   },
//   onload: function(frm) {
//     if (frappe.user.has_role('Showroom User') && frappe.user.has_role('Stock User')) {
//       if(frm.doc.docstatus !=1){
//         if (frm.doc.payment_type === 'Cash') {
//             frm.set_value('is_pos', 1);
//             frm.set_value('pos_profile','Standard');
//         } else {
//             frm.set_value('is_pos', 0);
//             frm.set_value('payment_type',"On Account")
//         }
//         var df=frappe.meta.get_docfield("Sales Invoice", "is_return",frm.doc.name);
//         df.read_only=1;
//         frm.refresh_fields();
//     }
//   }
// }
// });



frappe.ui.form.on("Sales Invoice Item", "refresh", function(frm, cdt, cdn) {
  var d = locals[cdt][cdn];
  if (frappe.user.has_role('Showroom User') && !frappe.user.has_role('Warehouse-User2') && !frappe.user.has_role('System Manager') && frappe.user.has_role('Stock User')) {
    if(frm.doc.docstatus !=1){
    cur_frm.set_value('warehouse', 'Showroom - SATC')
     cur_frm.refresh_field();
    }
  }
});



frappe.ui.form.on("Sales Invoice", {
  is_return: function (frm) {
    if (frm.doc.is_return == 1 && frm.doc.docstatus == 0) {
    frm.set_value('naming_series', 'SINV-RET-.YYYY.-')
    refresh_field("naming_series");
  }
  else if(frm.doc.docstatus == 0){
  frm.set_value('naming_series', 'SINV-.YYYY.-')
    refresh_field("naming_series");
  }
  },
  onload: function (frm) {
    if (frm.doc.is_return == 1 && frm.doc.docstatus == 0) {
    frm.set_value('naming_series', 'SINV-RET-.YYYY.-')
    refresh_field("naming_series");
  }
  else if(frm.doc.docstatus == 0){
  frm.set_value('naming_series', 'SINV-.YYYY.-')
    refresh_field("naming_series");
  }
  },
  setup: function (frm) {
    if (frm.doc.is_return == 1 && frm.doc.docstatus == 0) {
    frm.set_value('naming_series', 'SINV-RET-.YYYY.-')
    refresh_field("naming_series");
  }
  else if(frm.doc.docstatus == 0){
  frm.set_value('naming_series', 'SINV-.YYYY.-')
    refresh_field("naming_series");
  }
  }
});



// frappe.ui.form.on("Sales Invoice","onload", function(frm) {

//     if (frappe.user.has_role('Sales User')) {
//       if(frm.doc.docstatus === 0 ){

//       var df=frappe.meta.get_docfield("Sales Invoice", "payment_type",frm.doc.name);
//       df.read_only=1;

//       frm.set_value('update_stock', 0);
//       frm.set_value('payment_type',"On Account");
//       frm.set_value('is_pos', 0);
//       }
//     }
//   });
  

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
            frm.remove_custom_button('Duplicate');
        }, 10);
    }
}
});




frappe.ui.form.on("Sales Invoice","onload", function(frm) {

  if (!frappe.user.has_role('System Manager')) {

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
    frm.toggle_display("time_sheet_list", false);
    ///////
    frm.toggle_display("set_posting_time", false);

    
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

    frm.set_value('tax_category', 'VAT_15');
    frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC');
    
  }
});



frappe.ui.form.on("Sales Invoice", {
  onload: function(frm) {
    apply_sales_user_rules(frm);
    apply_showroom_stock_rules(frm);
  },

  payment_type: function(frm) {
    apply_showroom_stock_rules(frm);
  },

  is_pos: function(frm) {
    apply_sales_user_rules(frm);
    apply_showroom_stock_rules(frm);
  }
});


function apply_sales_user_rules(frm) {
  if (!frappe.user.has_role("Sales User")) return;

  if (frm.doc.docstatus === 0) {
    frm.set_df_property("payment_type", "read_only", 1);

    frm.set_value("update_stock", 0);
    frm.set_value("payment_type", "On Account");
    frm.set_value("is_pos", 0);
  }
}


function apply_showroom_stock_rules(frm) {
  if (!(frappe.user.has_role("Showroom User") && frappe.user.has_role("Stock User"))) return;

  if (frm.doc.docstatus !== 1) {
  
    if (frm.doc.payment_type === "Cash") {
      frm.set_value("is_pos", 1);
      frm.set_value("pos_profile", "Standard");
    } else {
      frm.set_value("is_pos", 0);
      frm.set_value("payment_type", "On Account");
    }

   
    if (frm.doc.is_pos === 1) {
      frm.set_value("payment_type", "Cash");
      frm.set_value("pos_profile", "Standard");
    } else {
      frm.set_value("payment_type", "On Account");
    }


    frm.set_df_property("is_return", "read_only", 1);
  }
}
