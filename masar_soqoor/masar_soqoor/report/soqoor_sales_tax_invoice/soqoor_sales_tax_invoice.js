// Copyright (c) 2023, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Soqoor Sales TAX Invoice"] = {
	"filters": [
		{
			"fieldname": "si_no",
			"label": __("Sales Invoice"),
			"fieldtype": "Link",
			"options": "Sales Invoice",
			"width": 100,
			"reqd": 0,
		},
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
			"fieldname": "customer_name",
			"label": __("Customer Name"),
			"fieldtype": "Link",
			"options": "Customer",
			"width": 100,
			"reqd": 0,
		},
		// {
		// 	"fieldname": "account",
		// 	"label": __("Account Name"),
		// 	"fieldtype": "Link",
		// 	"options": "Account",
		// 	"width": 100,
		// 	"reqd": 0,
		// },
		{
			"fieldname": "tax_category",
			"label": __("Tax Group"),
			"fieldtype": "Link",
			"options": "Tax Category",
			"width": 100,
			"reqd": 0,
		},
		{
							"fieldname": "is_return",
							"label": __("Is Return"),
							"fieldtype": "Check",
							//"options": "Is Return",
							"width": 100,
							"reqd": 0,
						}

]
};
