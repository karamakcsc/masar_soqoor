# Copyright (c) 2022, KCSC and contributors
# For license information, please see license.txt

# import frappe

from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	_from, to = filters.get('from'), filters.get('to') #date range
	#Conditions
	conditions = " AND 1=1 "
	if(filters.get('si_no')):conditions += f" AND tsi.name LIKE '%{filters.get('si_no')}' "
	#if(filters.get('account')):conditions += f" AND tjea.account='{filters.get('account')}' "
	if(filters.get('customer_name')):conditions += f" AND tsi.customer LIKE '%{filters.get('customer_name')}' "
	#if(filters.get('customer_sub')):conditions += f" AND tsi.customer_sub LIKE '%{filters.get('customer_sub')}' "
	#if(filters.get('sales_person')):conditions += f" AND tst.sales_person='{filters.get('sales_person')}' "
	if(filters.get('is_return')):conditions += f" AND tsi.is_return='{filters.get('is_return')}' "
	if(filters.get('tax_category')):conditions += f" AND tsi.tax_category='{filters.get('tax_category')}' "

	#SQL Query
	data = frappe.db.sql(f"""SELECT tsi.name AS `Sales Invoice No.`, tsi.posting_date AS `Posting Date`, tsii.sales_order AS `Sales Order`, tstac.account_head AS `Account`,
									tsi.customer AS`Customer`, tsi.customer_name AS `Customer Name`, tsii.item_group AS `Sales Type`, tsi.tax_id AS `Tax ID`, tsi.net_total AS `Tax Base Amount`,
									tstac.tax_amount AS `Tax Amount`, tsi.tax_category AS `Tax Group`, tsi.currency AS `Currency Code`, tsi.is_return
									from `tabSales Invoice` tsi
									inner join `tabSales Invoice Item` tsii on tsi.name = tsii.parent
									inner join `tabSales Taxes and Charges` tstac on tsi.name = tstac.parent
									where tsi.docstatus = 1 AND tstac.account_head = '213201 - ضريبة القيمة المضافة مبيعات محلية - SATC'
 								And (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions} GROUP by tsi.name ;""")
	return data

def get_columns():
	return [
	   "Sales Invoice No.: Link/Sales Invoice:200",
	   "Posting Date: Date/Posting Date:150",
	   "Sales Order No.: Link/Sales Order:200",
	   "Account: Data:300",
	   "Customer: Link/Customer:200",
	   "Customer Name: Data:200",
	   "Sales Type: Data:200",
	   "Tax ID: Data:200",
	   "Tax Base Amount: Data:200",
	   "Tax Amount:  Data:200",
	   "Tax Group: Data:200",
	   "Currency Code: Data:200"
	   #"Status:150"
	]
