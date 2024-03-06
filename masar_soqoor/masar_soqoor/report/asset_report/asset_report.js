// Copyright (c) 2023, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Asset Report"] = {
	"filters": [
		{
			"fieldname": "asset",
			"label": __("Asset"),
			"fieldtype": "Link",
			"options": "Asset",
			"width": 100,
			"reqd": 0,
		},
		// {
		// 	"fieldname": "from",
		// 	"label": __("From Date"),
		// 	"fieldtype": "Date",
		// 	"width": 80,
		// 	"reqd": 1,
		// 	"default": dateutil.year_start()
		// },
		{
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_end()
		},
		{
			"fieldname": "asset_category",
			"label": __("Asset Category"),
			"fieldtype": "Link",
			"options": "Asset Category",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "location",
			"label": __("Location"),
			"fieldtype": "Link",
			"options": "Location",
			"width": 100,
			"reqd": 0,
		}
]
}