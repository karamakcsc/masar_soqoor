frappe.ui.form.on("Payment Entry", "onload", function(frm) {
if(user=="w.hussain@sattcsa.com"){
   {
           frappe.msgprint("You cannot makes changes to this item.");
   }
 }
});
