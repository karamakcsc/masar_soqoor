// Copyright (c) 2024, KCSC and contributors
// For license information, please see license.txt

frappe.query_reports["Sales Person Based On Sales Invoice"] = {
	"filters": [
		{
			"fieldname": "si",
			"label": __("Sales Invoice"),
			"fieldtype": "Link",
			"options": "Sales Invoice",
			"width": 100,
		},
		{
			"fieldname": "customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options": "Customer",
			"width": 100,
		},
		{
			"fieldname": "s_person",
			"label": __("Sales Person"),
			"fieldtype": "Link",
			"options": "Sales Person",
			"width": 100,
		},
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
		 },
		 {
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
		},
		{
			"fieldname": "is_return",
			"label": __("Is Return"),
			"fieldtype": "Check",
			"width": 80,
		}

	]
};
