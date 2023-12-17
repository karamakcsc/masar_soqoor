frappe.ui.form.on("Customer", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager')) {
        var df_customer_group = frappe.meta.get_docfield("Customer", "customer_group", frm.doc.name);
        df_customer_group.read_only = 1;

        var df_territory = frappe.meta.get_docfield("Customer", "territory", frm.doc.name);
        df_territory.read_only = 1;

        var df_tax_category = frappe.meta.get_docfield("Customer", "tax_category", frm.doc.name);
        df_tax_category.read_only = 1;

        frm.toggle_display("so_required", false);
        frm.toggle_display("dn_required", false);
        frm.toggle_display("is_frozen", false);
        frm.toggle_display("disabled", false);

        frm.set_value('customer_group', "Cash Customer");
        frm.set_value('territory', "Saudi Arabia");
        frm.set_value('tax_category', "VAT_15");

        frm.refresh_fields();
    }
});

frappe.ui.form.on("Customer", "onload", function(frm) {
    if (!frappe.user.has_role('System Manager')) {
        var df_customer_group = frappe.meta.get_docfield("Customer", "customer_group", frm.doc.name);
        df_customer_group.read_only = 1;

        var df_territory = frappe.meta.get_docfield("Customer", "territory", frm.doc.name);
        df_territory.read_only = 1;

        var df_tax_category = frappe.meta.get_docfield("Customer", "tax_category", frm.doc.name);
        df_tax_category.read_only = 1;

        frm.toggle_display("so_required", false);
        frm.toggle_display("dn_required", false);
        frm.toggle_display("is_frozen", false);
        frm.toggle_display("disabled", false);
        frm.toggle_display("defaults_tab", false);
        frm.toggle_display("internal_customer_section", false);
        frm.toggle_display("more_info", false);
        frm.toggle_display("accounting_tab", false);
        frm.toggle_display("credit_limit_section", false);
        frm.toggle_display("payment_terms", false);
        frm.toggle_display("credit_limits", false);
        frm.toggle_display("default_receivable_accounts", false);
        frm.toggle_display("default_sales_partner", false);
        frm.toggle_display("default_commission_rate", false);

        frm.set_value('customer_group', "Cash Customer");
        frm.set_value('territory', "Saudi Arabia");
        frm.set_value('tax_category', "VAT_15");

        frm.refresh_fields();
    }
});

frappe.ui.form.on("Customer", "validate", function(frm) {
    if (!frappe.user.has_role('System Manager')) {
        var allowedCustomerTypes = ["Company", "Individual"];
        
        if (!allowedCustomerTypes.includes(frm.doc.customer_type)) {
            frappe.msgprint("The Customer Type is incorrect. Please select either 'Company' or 'Individual'.");
            frappe.validated = false; // Prevent form submission
        }
    }
});



frappe.ui.form.on('Customer', {
    setup: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
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
    },
    onload: function(frm) {
        if (frappe.session.user === "m.emad@sattcsa.com") {
            // Check if sales_team field is empty before setting the value
            if (!frm.doc.sales_team || frm.doc.sales_team.length === 0) {
                frm.set_value('sales_team', [{
                    'sales_person': 'Musallam Emad'
                }]);
                frm.refresh_field('sales_team');
            }
        }
    }
});





frappe.ui.form.on('Customer', {
    setup: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
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
    },
    onload: function(frm) {
        if (frappe.session.user === "w.hussain@sattcsa.com") {
            if (!frm.doc.sales_team || frm.doc.sales_team.length === 0) {
            frm.set_value('sales_team', [{
                'sales_person': 'Mohammad Waseem'
            }]);
            frm.refresh_field('sales_team');
        }
    }
}
});



frappe.ui.form.on('Customer', {
    setup: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
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
    },
    onload: function(frm) {
        if (frappe.session.user === "m.emad@sattcsa.com") {
            if (!frm.doc.sales_team || frm.doc.sales_team.length === 0) {
            frm.set_value('sales_team', [{
                'sales_person': 'Muhammad Saleem Riaz'
            }]);
            frm.refresh_field('sales_team');
        }
    }
    }
});


frappe.ui.form.on('Customer', {
    setup: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
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
    },
    onload: function(frm) {
        if (frappe.session.user === "h.fouaid@sattcsa.com") {
            if (!frm.doc.sales_team || frm.doc.sales_team.length === 0) {
            frm.set_value('sales_team', [{
                'sales_person': 'Hamdi Fuad'
            }]);
            frm.refresh_field('sales_team');
        }
    }
    }
});


frappe.ui.form.on('Customer', {
    setup: function(frm) {
        if (!frappe.user.has_role('System Manager')) {
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
    },
    onload: function(frm) {
        if (frappe.session.user === "s.ahmed@sattcsa.com") {
            if (!frm.doc.sales_team || frm.doc.sales_team.length === 0) {
            frm.set_value('sales_team', [{
                'sales_person': 'Sarfaraz Ahmed Haque'
            }]);
            frm.refresh_field('sales_team');
        }
    }
    }
});