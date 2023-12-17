frappe.ui.form.on("Material Request", "onload", function(frm) {
  if (frappe.user.has_role('Showroom User') && !frappe.user.has_role('System Manager')  && frappe.user.has_role('Stock User') && frappe.user.has_role('Stock User') && frappe.user.has_role('Sales Manager')){
   {
       var df=frappe.meta.get_docfield("Material Request", "material_request_type",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Material Request", "set_from_warehouse",frm.doc.name);
       df.read_only=1;
       var df=frappe.meta.get_docfield("Material Request", "set_warehouse",frm.doc.name);
       df.read_only=1;
       
       frm.set_value('material_request_type', 'Material Transfer')
       frm.set_value('set_from_warehouse', 'Quieza Warehouse - SATC')
       frm.set_value('set_warehouse', 'Showroom - SATC')
       frm.refresh_fields();
   }
 }
});



frappe.ui.form.on('Material Request', {
  onload: function (frm, cdt, cdn) {
      if (!frappe.user.has_role('System Manager')) {
          cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
        //   cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
          frm.get_field('items').grid.cannot_add_rows = true;
      }
  },
  refresh: function (frm, cdt, cdn) {
      if (!frappe.user.has_role('System Manager')) {
          cur_frm.fields_dict['items'].grid.wrapper.find('.btn-open-row').hide();
        //   cur_frm.fields_dict['taxes'].grid.wrapper.find('.btn-open-row').hide();
          frm.get_field('items').grid.cannot_add_rows = true;
      }
  }
});


