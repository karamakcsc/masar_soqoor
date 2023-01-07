////// Fetching Employee with Filter ///// Start ///Siam
// frappe.ui.form.on("Sales Invoice", "onload", function(frm) {
//     if (frm.doc.payment_type =="Cash") {
//       frm.doc.refresh_fields();
//       cur_frm.fields_dict['customer'].get_query = function(doc) {
//       	return {
//       		filters: {
//       			"customer_group": "Cash Customer"
//       		}
//       	}
//       }
//
//   }
// });
////// Fetching Employee with Filter ///// END ///Siam


// frappe.ui.form.on("Sales Invoice", {
// 	refresh: function(frm) {
//     if (frm.doc.payment_type =="Cash") {
//       frm.doc.refresh_fields();
// 		frm.set_query("customer", function() {
// 			return {
// 				filters: [
// 					["Customer","customer_group", "=", "Cash Customer"]
// 				]
// 			}
// 		});
//   }
// 	}
// });
