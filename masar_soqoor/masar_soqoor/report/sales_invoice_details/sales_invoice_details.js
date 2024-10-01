// Copyright (c) 2024, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Sales Invoice Details"] = {
    "filters": [
        {
            "fieldname": "name",
            "label": __("ID"),
            "fieldtype": "Link",
            "options": "Sales Invoice",
            "width": 100,
            "reqd": 0,
        },
        {
            "fieldname": "customer",
            "label": __("Customer"),
            "fieldtype": "Link",
            "options": "Customer",
            "width": 100,
            "reqd": 0,
        },
		{
            "fieldname": "payment_type",
            "label": __("Payment Type"),
            "fieldtype": "Select",
            "options": [ "", "Cash", "On Account"],
            "width": 100,
            "reqd": 0,
        },
		// {
        //     "fieldname": "status",
        //     "label": __("Status"),
        //     "fieldtype": "Select",
        //     "options": [ "", "Draft", "Return" , "Credit Note Issued" , "Submitted" , "Paid" , "Partly Paid" , "Unpaid" , 
		// "Unpaid and Discounted" , "Partly Paid and Discount" , "Overdue and Discount", "Overdue" , "Cancelled" , "Internal Transfer"],
        //     "width": 100,
        //     "reqd": 0,
        // },
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": frappe.datetime.year_start()
		 },
		 {
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": frappe.datetime.year_end()
		},
        {
            "fieldname": "is_pos",
            "label": __("Include Payment (POS)"),
            "fieldtype": "Check",
            "width": 100,
            "reqd": 0,
        },
        {
			"fieldname": "sales_person",
			"label": __("Sales Person"),
			"fieldtype": "Link",
            "options": "Sales Person",
			"width": 80,
			"reqd": 0
		 }
    ]
};