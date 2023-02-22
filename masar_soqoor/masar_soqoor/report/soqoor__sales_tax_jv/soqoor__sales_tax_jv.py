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
	if(filters.get('pi_no')):conditions += f" AND tpi.name LIKE '%{filters.get('pi_no')}' "
	#if(filters.get('account')):conditions += f" AND tjea.account='{filters.get('account')}' "
	if(filters.get('supplier_name')):conditions += f" AND tpi.supplier LIKE '%{filters.get('supplier_name')}' "
	#if(filters.get('customer_sub')):conditions += f" AND tsi.customer_sub LIKE '%{filters.get('customer_sub')}' "
	#if(filters.get('sales_person')):conditions += f" AND tst.sales_person='{filters.get('sales_person')}' "
	#if(filters.get('is_return')):conditions += f" AND tsi.is_return='{filters.get('is_return')}' "
	if(filters.get('tax_category')):conditions += f" AND tpi.tax_category='{filters.get('tax_category')}' "

	#SQL Query
	data = frappe.db.sql(f"""SELECT tpi.name AS `Voucher`, tpi.posting_date AS `Posting Date`,tptac.account_head AS `Account`, 
								tpi.supplier AS `Invoice Account`, tpi.supplier_name AS `Supplier Name`, tpi.tax_id AS `VAT No.`,
								tpi.reference_no AS `Supplier Invoice No`, tpi.reference_date AS `Supplier Invoice Date`, 
								tpii.item_group AS `Service Type`, 
								tpii.amount AS `Tax Base Amount`, tptac.tax_amount AS `Tax Amount`, tpi.tax_category AS `Tax Group`, 
								tpi.currency AS `Currency Code`
								
								from `tabPurchase Invoice` tpi 
								inner join `tabPurchase Invoice Item` tpii on tpi.name = tpii.parent 
								inner join `tabPurchase Taxes and Charges` tptac on tpi.name = tptac.parent 
								where tpi.docstatus = 1 AND tptac.account_head = '213203 - ضريبة القيمة المضافة مشتريات محلية - SATC'
 								And (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions}  ;""")
	return data

def get_columns():
	return [
	   "Voucher: Link/Purchase Invoice:200",
	   "Posting Date: Date/Posting Date:150",
	   "Account: Data:300",
	   "Invoice Account: Link/Supplier:200",
	   "Supplier Name: Data:200",
	   "VAT No.: Data:200",
	   "Supplier Invoice No: Data:200",
	   "Supplier Invoice Date:  Data:200",
	   "Service Type: Data:200",
	   "Tax Base Amount: Data:200",
	   "Tax Amount: Data:200",
	   "Tax Group: Data:200",
	   "Currency Code: Data:200"
	   #"Status:150"
	]
