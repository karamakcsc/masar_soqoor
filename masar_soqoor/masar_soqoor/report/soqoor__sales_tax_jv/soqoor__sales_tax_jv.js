// Copyright (c) 2023, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Soqoor  Sales TAX JV"] = {
	"filters": [
							{
								"fieldname": "jv_no",
								"label": __("Journal Entry"),
								"fieldtype": "Link",
								"options": "Journal Entry",
								"width": 100,
								"reqd": 0,
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
							},
						  {
								"fieldname": "supplier_name",
								"label": __("Supplier Name"),
								"fieldtype": "Link",
								"options": "Supplier",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "account",
								"label": __("Account Name"),
								"fieldtype": "Link",
								"options": "Account",
								"width": 100,
								"reqd": 0,
							},
							{
								"fieldname": "tax_category",
								"label": __("Tax Category"),
								"fieldtype": "Link",
								"options": "Tax Category",
								"width": 100,
								"reqd": 0,
							}

	]
};
