frappe.ui.form.on("Quotation Item", "refresh", function(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
 if(user=="m.salim@sattcsa.com")  {
  cur_frm.set_value('warehouse', 'Showroom - SATC')
   cur_frm.refresh_field();
 }
});