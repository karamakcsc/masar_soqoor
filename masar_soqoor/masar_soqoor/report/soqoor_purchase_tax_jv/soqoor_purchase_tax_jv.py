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
	if(filters.get('jv_no')):conditions += f" AND tje.name LIKE '%{filters.get('jv_no')}' "
	#if(filters.get('account')):conditions += f" AND tjea.account='{filters.get('account')}' "
	if(filters.get('supplier_name')):conditions += f" AND tjea.against_account LIKE '%{filters.get('supplier_name')}' "
	#if(filters.get('customer_sub')):conditions += f" AND tsi.customer_sub LIKE '%{filters.get('customer_sub')}' "
	#if(filters.get('sales_person')):conditions += f" AND tst.sales_person='{filters.get('sales_person')}' "
	#if(filters.get('is_return')):conditions += f" AND tsi.is_return='{filters.get('is_return')}' "
	if(filters.get('tax_category')):conditions += f" AND tjea.tax_category='{filters.get('tax_category')}' "

	#SQL Query
	data = frappe.db.sql(f"""Select tje.name AS `Voucher`, tje.posting_date AS `Posting Date`,tjea.account AS `Account`, 
							tjea.against_account AS `Invoice Account`,tjea.supplier_name AS `Supplier Name`, 
							tjea.supplier_tax AS `VAT No.`, tjea.supplier_invoice_no AS `Supplier Invoice No`, tjea.supplier_invoice_date AS `Supplier Invoice Date`,
							tjea.service_type AS `Service Type`, tjea.tax_base_amount AS `Tax Base Amount`, tjea.debit AS `Tax Amount`,tjea.tax_category AS `Tax Group`
							

							from `tabJournal Entry` tje 

							inner join `tabJournal Entry Account` tjea on tje.name = tjea.parent 
							
							where tje.docstatus = 1 AND tjea.account = '213202 - ضريبة القيمة المضافة  مشتريات محلية خدمات - SATC'
 								And (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions}  ;""")
	return data

def get_columns():
	return [
	   "Voucher: Link/Journal Entry:200",
	   "Posting Date: Date/Posting Date:150",
	   "Account: Data:300",
	   "Invoice Account: Link/Supplier:200",
	   "Supplier Name: Link/Supplier:200",
	   "VAT No.: Data:200",
	   "Supplier Invoice No: Data:200",
	   "Supplier Invoice Date:  Data:200",
	   "Service Type: Data:200",
	   "Tax Base Amount: Data:200",
	   "Tax Amount: Data:200",
	   "Tax Group: Data:200"
	   #"Status:150"
	]
