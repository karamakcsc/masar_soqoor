
frappe.ui.form.on("Sales Order", "validate", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if (d.item_code)  {
   d.warehouse= frm.set_warehouse
   cur_frm.refresh_field();
   frm.refresh_field();
}
});





frappe.ui.form.on("Sales Order","onload", function(frm) {

    if (!frappe.user.has_role('System Manager') && !frappe.user.has_role('Sales User')) {
  
      frm.toggle_display("naming_series", false);
      frm.toggle_display("incoterm", false);
      frm.toggle_display("accounting_dimensions_section", false);
      frm.toggle_display("taxes", false);
      frm.toggle_display("sales_team_section_break", false);
      frm.toggle_display("subscription_section", false);
      frm.toggle_display("printing_details", false);
      frm.toggle_display("vat_section", false);
      frm.toggle_display("additional_info_section", false);
      frm.toggle_display("payment_schedule", false);
      frm.toggle_display("disable_rounded_total", false);
      
      var df=frappe.meta.get_docfield("Sales Order", "naming_series",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "shipping_rule",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "tax_category",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "taxes_and_charges",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "taxes",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "set_warehouse",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "order_type",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "currency",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "selling_price_list",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "return_against",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "disable_rounded_total",frm.doc.name);
      df.read_only=1;
  
    //   frm.set_value('update_stock', 1);
      frm.set_value('tax_category', 'VAT_15')
      frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC')
      frm.set_value('set_warehouse', 'Showroom - SATC')
    }
  });



  frappe.ui.form.on("Sales Order","onload", function(frm) {

    if (frappe.user.has_role('Sales User')) {
  
      frm.toggle_display("naming_series", false);
      frm.toggle_display("incoterm", false);
      frm.toggle_display("accounting_dimensions_section", false);
      frm.toggle_display("taxes", false);
      frm.toggle_display("sales_team_section_break", false);
      frm.toggle_display("subscription_section", false);
      frm.toggle_display("printing_details", false);
      frm.toggle_display("vat_section", false);
      frm.toggle_display("additional_info_section", false);
      frm.toggle_display("payment_schedule", false);
      frm.toggle_display("disable_rounded_total", false);
      
      var df=frappe.meta.get_docfield("Sales Order", "naming_series",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "shipping_rule",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "tax_category",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "taxes_and_charges",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "taxes",frm.doc.name);
      df.read_only=1;
    //   var df=frappe.meta.get_docfield("Sales Order", "set_warehouse",frm.doc.name);
    //   df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "order_type",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "currency",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "selling_price_list",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "return_against",frm.doc.name);
      df.read_only=1;
      var df=frappe.meta.get_docfield("Sales Order", "disable_rounded_total",frm.doc.name);
      df.read_only=1;
  
    //   frm.set_value('update_stock', 1);
      frm.set_value('tax_category', 'VAT_15')
      frm.set_value('taxes_and_charges', 'KSA VAT 15% - SATC')
    //   frm.set_value('set_warehouse', 'Quieza Warehouse - SATC')
    }
  });






 frappe.ui.form.on('Sales Order', {
  setup: function(frm) {
      if (frm.doc.docstatus != 1) {
          frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['Sales Person', 'employee', '=', "HR-EMP-00005"]
                  ]
              };
          };

          frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['employee', '=', "HR-EMP-00005"]
                  ]
              };
          };
      }
  }
//   onload: function(frm) {
//       if (frm.doc.docstatus != 1 && frappe.session.user === "s.ahmed@sattcsa.com") {
//           frm.set_value('sales_team', [{ 'sales_person': 'Sarfaraz Ahmed Haque' }]);
//           frm.refresh_field('sales_team');
//       }
//   },
//   before_save: function(frm) {
//     if (frm.doc.docstatus != 1 && frappe.session.user === "s.ahmed@sattcsa.com") {
//         frm.set_value('sales_team', [{ 'sales_person': 'Sarfaraz Ahmed Haque' }]);
//         frm.refresh_field('sales_team');
//     }
// }
});

frappe.ui.form.on('Sales Order', {
  setup: function(frm) {
      if (frm.doc.docstatus != 1) {
          frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['Sales Person', 'employee', '=', "HR-EMP-00040"]
                  ]
              };
          };

          frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['employee', '=', "HR-EMP-00040"]
                  ]
              };
          };
      }
  }
//   onload: function(frm) {
//       if (frm.doc.docstatus != 1 && frappe.session.user === "h.fouaid@sattcsa.com") {
//           frm.set_value('sales_team', [{ 'sales_person': 'Hamdi Fuad' }]);
//           frm.refresh_field('sales_team');
//       }
//   },
//   before_save: function(frm) {
//     if (frm.doc.docstatus != 1 && frappe.session.user === "h.fouaid@sattcsa.com") {
//         frm.set_value('sales_team', [{ 'sales_person': 'Hamdi Fuad' }]);
//         frm.refresh_field('sales_team');
//     }
// }
});



frappe.ui.form.on('Sales Order', {
  setup: function(frm) {
      if (frm.doc.docstatus != 1) {
          frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['Sales Person', 'employee', '=', "HR-EMP-00037"]
                  ]
              };
          };

          frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['employee', '=', "HR-EMP-00037"]
                  ]
              };
          };
      }
  }
//   onload: function(frm) {
//       if (frm.doc.docstatus != 1 && frappe.session.user === "m.emad@sattcsa.com") {
//           frm.set_value('sales_team', [{ 'sales_person': 'Musallam Emad' }]);
//           frm.refresh_field('sales_team');
//       }
//   },
//   before_save: function(frm) {
//     if (frm.doc.docstatus != 1 && frappe.session.user === "m.emad@sattcsa.com") {
//         frm.set_value('sales_team', [{ 'sales_person': 'Musallam Emad' }]);
//         frm.refresh_field('sales_team');
//     }
// }
});



frappe.ui.form.on('Sales Order', {
  setup: function(frm) {
      if (frm.doc.docstatus != 1) {
          frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['Sales Person', 'employee', '=', "HR-EMP-00036"]
                  ]
              };
          };

          frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['employee', '=', "HR-EMP-00036"]
                  ]
              };
          };
      }
  }
//   onload: function(frm) {
//       if (frm.doc.docstatus != 1 && frappe.session.user === "w.hussain@sattcsa.com") {
//           frm.set_value('sales_team', [{ 'sales_person': 'Mohammad Waseem' }]);
//           frm.refresh_field('sales_team');
//       }
//   },
//   before_save: function(frm) {
//     if (frm.doc.docstatus != 1 && frappe.session.user === "w.hussain@sattcsa.com") {
//         frm.set_value('sales_team', [{ 'sales_person': 'Mohammad Waseem' }]);
//         frm.refresh_field('sales_team');
//     }
// }
});


frappe.ui.form.on('Sales Order', {
  setup: function(frm) {
      if (frm.doc.docstatus != 1) {
          frm.fields_dict['sales_team'].get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['Sales Person', 'employee', '=', "HR-EMP-00007"]
                  ]
              };
          };

          frm.fields_dict['sales_team'].grid.get_field('sales_person').get_query = function(doc, cdt, cdn) {
              return {
                  filters: [
                      ['employee', '=', "HR-EMP-00007"]
                  ]
              };
          };
      }
  }
//   onload: function(frm) {
//       if (frm.doc.docstatus != 1 && frappe.session.user === "w.hussain@sattcsa.com") {
//           frm.set_value('sales_team', [{ 'sales_person': 'Muhammad Saleem Riaz' }]);
//           frm.refresh_field('sales_team');
//       }
//   },
//   before_save: function(frm) {
//     if (frm.doc.docstatus != 1 && frappe.session.user === "w.hussain@sattcsa.com") {
//         frm.set_value('sales_team', [{ 'sales_person': 'Muhammad Saleem Riaz' }]);
//         frm.refresh_field('sales_team');
//     }
// }
});



frappe.ui.form.on('Sales Order', {
    onload: function (frm, cdt, cdn) {
        if ( !frappe.user.has_role('System Manager')) {
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

frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        $.each(frm.doc.taxes, function(i, row) {
            $("div[data-idx='" + row.idx + "']").find("input[data-fieldname='account_head']").css('pointer-events', 'none');
        });
    }
});

