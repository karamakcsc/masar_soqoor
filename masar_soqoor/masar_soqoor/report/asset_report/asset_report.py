# Copyright (c) 2023, KCSC and contributors
# For license information, please see license.txt

# import frappe


from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	_from, to = filters.get('from'), filters.get('to') 
 
	conditions = " AND 1=1 "
	if(filters.get('asset')):conditions += f" AND ta.name = '{filters.get('asset')}' "
	if(filters.get('asset_category')):conditions += f" AND ta.asset_category ='{filters.get('asset_category')}' "
	if(filters.get('location')):conditions += f" AND ta.location = '{filters.get('location')}' "
	# if(filters.get('des')):conditions += f" AND tss.designation LIKE '%{filters.get('des')}' "
	# if(filters.get('work_type')):conditions += f" AND te.work_type='{filters.get('work_type')}' "
	# if(filters.get('branch')):conditions += f" AND tss.branch LIKE '%{filters.get('branch')}' "
	# if(filters.get('dep')):conditions += f" AND tss.department LIKE '%{filters.get('dep')}' "

	#SQL Query
	data = frappe.db.sql(f"""SELECT  ta.name, ta.docstatus, ta.asset_name, ta.item_code, ta.asset_category,
					  				 ta.location, ta.purchase_date, tafb.depreciation_start_date, tafb.total_number_of_depreciations, 
									 ta.status, ta.item_name, ta.is_existing_asset, ta.opening_accumulated_depreciation,
					  				 ta.gross_purchase_amount, tds.depreciation_amount, tds.accumulated_depreciation_amount 
							FROM tabAsset ta
								INNER JOIN `tabDepreciation Schedule` tds on ta.name = tds.parent 
								INNER JOIN `tabAsset Finance Book` tafb on ta.name = tafb.parent 
							WHERE (tds.schedule_date = '{to}'){conditions}
							GROUP BY  ta.item_code  ;""")

	return data

def get_columns():
	return [
	   "Asset No: Link/Asset:200",
	   "Docstatus:Data:150",
	   "Asset Name: Data:200",
	   "Item Code:Link/Item:300",
	   "Asset Category: Data:200",
	   "Location:Data:200",
	   "Purchase Date: Date:150",
	   "Accumulated Depreciation Date:Date:150",
	   "Total Number of Depreciations:Data:200",
	   "Status:Data:200",
	   "Item Name:Data:200",
	   "Is Existing Asset:Data:150",
	   "Opening Accumulated Depreciation:Data:200",
	   "Gross Purchase Amount:Data:200",
	   "Depreciation Amount During The Period:Data:200",
	   "Accumulated Depreciation:Data:200"
	]