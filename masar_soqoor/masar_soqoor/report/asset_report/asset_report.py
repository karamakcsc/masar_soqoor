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
	if(filters.get('asset')):conditions += f" AND ta.name LIKE '%{filters.get('asset')}' "
	if(filters.get('asset_category')):conditions += f" AND ta.asset_category ='{filters.get('asset_category')}' "
	if(filters.get('is_existing_asset')):conditions += f" AND ta.is_existing_asset = '{filters.get('is_existing_asset')}' "
	# if(filters.get('des')):conditions += f" AND tss.designation LIKE '%{filters.get('des')}' "
	# if(filters.get('work_type')):conditions += f" AND te.work_type='{filters.get('work_type')}' "
	# if(filters.get('branch')):conditions += f" AND tss.branch LIKE '%{filters.get('branch')}' "
	# if(filters.get('dep')):conditions += f" AND tss.department LIKE '%{filters.get('dep')}' "

	#SQL Query
	data = frappe.db.sql(f"""SELECT ta.name, ta.item_code, ta.item_name,
                                    ta.supplier, ta.asset_category, ta.location,
                                    ta.purchase_date, ta.purchase_invoice, ta.available_for_use_date, ta.gross_purchase_amount,
                                    ta.purchase_receipt_amount, tds.schedule_date, SUM(tds.depreciation_amount) AS total_depreciation_amount,
                                    tds.journal_entry, ta.status, ta.is_existing_asset
                                FROM tabAsset ta
                                INNER JOIN `tabDepreciation Schedule` tds ON ta.name = tds.parent
                                WHERE ta.docstatus = 1 AND tds.docstatus = 1
                                        And (tds.schedule_date BETWEEN '{_from}' AND '{to}')
										{conditions}
                                GROUP BY ta.name, ta.item_code, ta.item_name, ta.supplier, ta.asset_category, ta.location,
                                        ta.purchase_date, ta.purchase_invoice, ta.available_for_use_date, ta.gross_purchase_amount,
                                        ta.purchase_receipt_amount, tds.schedule_date, ta.status, ta.is_existing_asset;""")

	return data

def get_columns():
	return [
	   "Asset No: Link/Asset:200",
	   "Item Code:Link/Item:300",
	   "Item Name: Data:200",
	   "Supplier Name:Link/Supplier:200",
	   "Asset Category: Data:200",
	   "Location: Data:150",
	   "Purchase Date: Data:150",
	   "Purchase Invoice: Link/Purchase Invoice:200",
	   "Available For Use Date: Data:150 ",
	   "Gross Purchase Amount: Float:200",
	   "Purchase Receipt Amount: Float:200",
	   "Schedule Date: Data:150",
       "Depreciation Amount: Float:200",
       "Journal Entry: Link/Journal Entry:200",
	   "Status: Data:200"
	]