// Copyright (c) 2025, KCSC and contributors
// For license information, please see license.txt

frappe.query_reports["Soqoor - Sales"] = {
	"filters": [
		{
			"fieldname": "item",
			"label": __("Item"),
			"fieldtype": "Link",
			"options": "Item",
			"width": 100,
		},
		// {
		// 	"fieldname": "warehouse",
		// 	"label": __("Warehouse"),
		// 	"fieldtype": "Select",
		// 	"options": "Warehouse",
		// 	"width": 100,
		// },
		// {
		// 	"fieldname": "from",
		// 	"label": __("From Date"),
		// 	"fieldtype": "Date",
		// 	"width": 80,
		// 	"reqd": 0,
		// 	// "default": frappe.datetime.year_start()
		//  },
		//  {
		// 	"fieldname": "to",
		// 	"label": __("To Date"),
		// 	"fieldtype": "Date",
		// 	"width": 80,
		// 	"reqd": 0,
		// 	// "default": frappe.datetime.year_end()
		// }

	]
};
