frappe.ui.form.on("Payment Entry", "onload", function(frm) {
  if (frappe.user.has_role('Showroom User') && frappe.user.has_role('Translator')){
   {
       var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "paid_to",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "party_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "mode_of_payment",frm.doc.name);
       df.read_only=1;
      //  var df=frappe.meta.get_docfield("Payment Entry", "posting_date",frm.doc.name);
      //  df.read_only=1;
       frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
       frm.set_value('payment_type', 'Receive')
       frm.set_value('mode_of_payment', 'Cash-المعرض')
       frm.set_value('paid_to', '111005 - صندوق معرض الدراجة - SATC')
       frm.set_value('party_type', 'Customer')
       frm.refresh_fields();
   }
 }
});

frappe.ui.form.on("Payment Entry", "onload", function(frm) {
  if (frappe.user.has_role('Sales User') || frappe.user.has_role('Stock Manager') || frappe.user.has_role('Stock User')  && frappe.user.has_role('Translator')){
   {
       var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "paid_to",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "party_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "mode_of_payment",frm.doc.name);
       df.read_only=1;
      //  var df=frappe.meta.get_docfield("Payment Entry", "posting_date",frm.doc.name);
      //  df.read_only=1;
       frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
       frm.set_value('payment_type', 'Receive')
       frm.set_value('mode_of_payment', 'Cash-قويزةلمعرض')
       frm.set_value('paid_to', '111003 - صندوق المستودع (قويزة ) - SATC')
       frm.set_value('party_type', 'Customer')
       frm.refresh_fields();
   }
 }
});


frappe.ui.form.on("Payment Entry", "onload", function(frm) {
  if (frappe.user.has_role('Sales User') || frappe.user.has_role('Sales Manager') && frappe.user.has_role('Translator')){
   {
       var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "paid_to",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "party_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Payment Entry", "mode_of_payment",frm.doc.name);
       df.read_only=1;
      //  var df=frappe.meta.get_docfield("Payment Entry", "posting_date",frm.doc.name);
      //  df.read_only=1;
       frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
       frm.set_value('payment_type', 'Receive')
       frm.set_value('mode_of_payment', 'Cash-المعرض')
       frm.set_value('paid_to', '111002 - صندوق المعرض - SATC')
       frm.set_value('party_type', 'Customer')
       frm.refresh_fields();
   }
 }
});