// Copyright (c) 2024, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Custom Declaration Report"] = {
	"filters": [
		
		{
			"fieldname": "supplier",
			"label": __("Supplier"),
			"fieldtype": "Link",
			"options": "Supplier",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "pi_no",
			"label": __("Purchase Invoice"),
			"fieldtype": "Link",
			"options": "Purchase Invoice",
			"width": 100,
			"reqd": 0,
			"get_query": function () {
				return {
					"filters": {
						"docstatus": 1
					}
				};
			}
		},
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_start()
		 },
		 {
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_end()
		}

]
};
