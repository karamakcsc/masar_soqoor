frappe.ui.form.on("Payment Entry", "onload", function(frm) {
if(user=="w.hussain@sattcsa.com"){
   {
       var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "paid_to",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "party_type",frm.doc.name);
       df.read_only=1;
       frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
       frm.set_value('payment_type', 'Receive')
       frm.set_value('paid_to', '111002 - صندوق المعرض - SATC')
       frm.set_value('party_type', 'Customer')
       frm.refresh_fields();
   }
 }
});
