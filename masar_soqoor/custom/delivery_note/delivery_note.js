frappe.ui.form.on("Delivery Note", "validate", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if (d.item_code)  {
   d.warehouse= frm.set_warehouse
   cur_frm.refresh_field();
   frm.refresh_field();
}
});
frappe.ui.form.on("Delivery Note","onload", function(frm) {
   if (!frappe.user.has_role('System Manager')) {
       frm.toggle_display("set_posting_time", false);
   }
});


frappe.ui.form.on('Delivery Note', {
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






// frappe.ui.form.on('Delivery Note', {
//     refresh: function(frm) {
//         if (!frappe.user.has_role('System Manager')) {
//             const gridRows = frm.fields_dict['items'].grid.grid_rows;
//             gridRows.forEach((row) => {
//                 row.docfields.forEach((field) => {
//                     const fieldName = field.fieldname;
//                     if (["base_rate", "base_amount", "rate", "amount", "base_price_list_rate", "discount_and_margin","price_list_rate"].includes(item.fieldname)) {
//                         item.df.hidden = 1;
//                     } else {
//                         item.df.hidden = 0;
//                     }
//                 });
//             });
//             frm.fields_dict['items'].grid.refresh();
//         }
//     }
// });

// frappe.ui.form.on('Delivery Note', {
//     onload: function(frm, cdt, cdn) {
//         var d = locals[cdt][cdn];
//         if (frm.doc.docstatus != 1) {
//             frm.set_value('set_warehouse', 'Showroom - SATC');
//             cur_frm.set_value('warehouse', 'Showroom - SATC')
//             cur_frm.refresh_field('warehouse');
//             frm.refresh_field('set_warehouse');
//         }
//     }
// });
