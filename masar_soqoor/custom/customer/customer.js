frappe.ui.form.on("Customer", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager')){
     {
         var df=frappe.meta.get_docfield("Customer", "so_required",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Customer", "dn_required",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Customer", "is_frozen",frm.doc.name);
         df.read_only=1;
         var df=frappe.meta.get_docfield("Customer", "disabled",frm.doc.name);
         df.read_only=1;
        //  var df=frappe.meta.get_docfield("Customer", "mode_of_payment",frm.doc.name);
        //  df.read_only=1;
        //  var df=frappe.meta.get_docfield("Payment Entry", "posting_date",frm.doc.name);
        //  df.read_only=1;
        //  frm.set_value('naming_series', 'ACC-PAY-.YYYY.-')
        //  frm.set_value('payment_type', 'Receive')
        //  frm.set_value('mode_of_payment', 'Cash-المعرض')
        //  frm.set_value('paid_to', '111005 - صندوق معرض الدراجة - SATC')
        //  frm.set_value('party_type', 'Customer')
         frm.refresh_fields();
     }
   }
  });
  