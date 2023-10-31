// // frappe.ui.form.on("Customer", "onload", function(frm) {
// //     if (frappe.user.has_role('Sales Team')){
// //      {
// //          var df=frappe.meta.get_docfield("Customer", "so_required",frm.doc.name);
// //          df.read_only=1;
// //          var df=frappe.meta.get_docfield("Customer", "dn_required",frm.doc.name);
// //          df.read_only=1;
// //          var df=frappe.meta.get_docfield("Customer", "is_frozen",frm.doc.name);
// //          df.read_only=1;
// //          var df=frappe.meta.get_docfield("Customer", "disabled",frm.doc.name);
// //          df.read_only=1;
// //         //  var df=frappe.meta.get_docfield("Customer", "mode_of_payment",frm.doc.name);
// //         //  df.read_only=1;
// //         //  var df=frappe.meta.get_docfield("Payment Entry", "posting_date",frm.doc.name);
// //         //  df.read_only=1;
// //         //  frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
// //         //  frm.set_value('payment_type', 'Receive')
// //         //  frm.set_value('mode_of_payment', 'Cash-المعرض')
// //         //  frm.set_value('paid_to', '111005 - صندوق معرض الدراجة - SATC')
// //         //  frm.set_value('party_type', 'Customer')
// //          frm.refresh_fields();
// //      }
// //    }
// //   });
  
//   frappe.ui.form.on('Customer', {
//     onload: function(frm){
//       if(user=="w.hussain@sattcsa.com" && user=="a.rafique@sattcsa.co"){
//            cur_frm.dashboard.hide() //Hide DashBoard
//            frm.toggle_display("so_required", false);
//            frm.toggle_display("dn_required", false);
//            frm.toggle_display("is_frozen", false);
//            frm.toggle_display("disabled", false);
//         //    frm.toggle_display("item_locations_section", false);
//         //    frm.toggle_display("unit_of_measure_conversion", false);
//         //    frm.toggle_display("serial_nos_and_batches", false);
//         //    frm.toggle_display("variants_section", false);
//         //    frm.toggle_display("defaults", false);
//         //    frm.toggle_display("purchase_details", false);
//         //    frm.toggle_display("supplier_details", false);
//         //    frm.toggle_display("foreign_trade_details", false);
//         //    frm.toggle_display("sales_details", false);
//         //    frm.toggle_display("deferred_revenue", false);
//         //    frm.toggle_display("deferred_expense_section", false);
//         //    frm.toggle_display("customer_details", false);
//         //    frm.toggle_display("item_tax_section_break", false);
//         //    frm.toggle_display("inspection_criteria", false);
//         //    frm.toggle_display("manufacturing", false);
//         //    frm.toggle_display("hub_publishing_sb", false);
//         //    frm.toggle_display("is_item_from_hub", false);
//         //    frm.toggle_display("include_item_in_manufacturing", false);
//      }
//     }
// });