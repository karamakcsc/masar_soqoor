frappe.ui.form.on("Sales Invoice","refresh", function(frm) {
     frm.toggle_display("naming_series", false);
     frm.toggle_display("is_debit_note", false);
     frm.toggle_display("time_sheet_list", false);
     //frm.toggle_display("edit_printing_settings", false);
     frm.toggle_display("shipping_rule", false);
     frm.toggle_display("loyalty_points_redemption", false);
     //frm.toggle_display("printing_details", false);
     frm.toggle_display("sales_team_section_break", false);
     frm.toggle_display("subscription_section", false);
     frm.toggle_display("update_billed_amount_in_sales_order", false);
     frm.toggle_display("more_information", false);
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

frappe.ui.form.on("Sales Invoice", "onload", function(frm) {
       var df=frappe.meta.get_docfield("Sales Invoice", "naming_series",frm.doc.name);s
       df.read_only=1;
       var df=frappe.meta.get_docfield("Sales Invoice", "pos_profile",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Sales Invoice", "debit_to",frm.doc.name);
       df.read_only=1;
});


// frappe.ui.form.on("Sales Invoice", {
//     validate: function(frm) {
//         frm.doc.print_count += 1;
//         frm.save();
//     }
// });


// frappe.ui.form.on("Sales Invoice", {
//     validate: function(frm) {
//         frm.doc.print_count += 1;
//         frm.save(null, () => {
//             frappe.show_alert(`Invoice printed ${frm.doc.print_count} times`);
//         });
//     }
// });


frappe.ui.form.on("Sales Invoice", "refresh", function(frm) {

     {
      frm.set_value('update_stock', 0)
      frm.refresh_fields();
   }
  });

frappe.ui.form.on("Sales Invoice", "refresh", function(frm) {
  if(user=="w.hussain@sattcsa.com"){
     {
      frm.toggle_display("update_stock", false);
      frm.refresh_fields();
     }
   }
  });

frappe.ui.form.on("Sales Invoice", "refresh", function(frm) {
  if(user=="a.rafique@sattcsa.co"){
      {
      frm.toggle_display("update_stock", false);
      frm.refresh_fields();
      }
    }
  });

frappe.ui.form.on("Sales Invoice", "refresh", function(frm) {
  if(user=="m.salim@sattcsa.com"){
      {
      frm.toggle_display("update_stock", false);
      frm.refresh_fields();
      }
    }
  });



//   frappe.ui.form.on("Sales Invoice Item", "refresh", function(frm, cdt, cdn) {
//        if(user=="w.hussain@sattcsa.com" || user=="m.salim@sattcsa.com")  {
//         cur_frm.set_value('warehouse', 'Showroom - SATC')
//          cur_frm.refresh_field('warehouse');
//        }
// });


//
// frappe.ui.form.on("Sales Invoice Item", {
//     refresh: function(frm, cdt, cdn) {
//       var d = locals[cdt][cdn];
//        if(user=="w.hussain@sattcsa.com" || user=="m.salim@sattcsa.com")  {
//         cur_frm.set_value('warehouse', 'Showroom - SATC')
//          cur_frm.refresh_field('warehouse');
//        }
//     },
//     validate: function(frm, cdt, cdn) {
//       var d = locals[cdt][cdn];
//        if(user=="w.hussain@sattcsa.com" || user=="m.salim@sattcsa.com")  {
//         cur_frm.set_value('warehouse', 'Showroom - SATC')
//          cur_frm.refresh_field('warehouse');
//        }
// });


// frappe.ui.form.on('Sales Invoice Item', {
//     refresh: function(frm,cdt,cdn) {
//        let item = locals[cdt][cdn];
//        item.warehouse = 'Showroom - SATC';
//        frm.refresh_field('warehouse');
//     },
//     validate: function(frm,cdt,cdn) {
//        let item = locals[cdt][cdn];
//        item.warehouse = 'Showroom - SATC';
//        frm.refresh_field('warehouse');
//     },
// });




frappe.ui.form.on("Sales Invoice Item", "refresh", function(frm, cdt, cdn) {
  var d = locals[cdt][cdn];
   if(user=="w.hussain@sattcsa.com")  {
    cur_frm.set_value('warehouse', 'Showroom - SATC')
     cur_frm.refresh_field();
   }
});


frappe.ui.form.on("Sales Invoice Item", "refresh", function(frm, cdt, cdn) {
  var d = locals[cdt][cdn];
   if(user=="m.salim@sattcsa.com")  {
    cur_frm.set_value('warehouse', 'Showroom - SATC')
     cur_frm.refresh_field();
   }
});

