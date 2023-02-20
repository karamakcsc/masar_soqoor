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
	if(filters.get('account')):conditions += f" AND tjea.account='{filters.get('account')}' "
	if(filters.get('supplier_name')):conditions += f" AND tjea.party LIKE '%{filters.get('supplier_name')}' "
	#if(filters.get('customer_sub')):conditions += f" AND tsi.customer_sub LIKE '%{filters.get('customer_sub')}' "
	#if(filters.get('sales_person')):conditions += f" AND tst.sales_person='{filters.get('sales_person')}' "
	#if(filters.get('is_return')):conditions += f" AND tsi.is_return='{filters.get('is_return')}' "
	#if(filters.get('status')):conditions += f" AND tje.status='{filters.get('status')}' "

	#SQL Query
	data = frappe.db.sql(f"""select tje.name AS `Name`, tjea.account AS `Account`,tje.posting_date AS `Posting Date`, tjea.supplier_name AS `Supplier Name`,
								tjea.party AS `Invoice Account`,tjea.supplier_tax AS `VAT No.`, tjea.supplier_invoice_date AS `Supplier Invoice Date`,
								tjea.service_type AS `Service Type`, tjea.debit AS `Tax Amount`,tjea.supplier_invoice_no AS `Supplier Invoice No`

								from `tabJournal Entry` tje
								inner join `tabJournal Entry Account` tjea on tje.name = tjea.parent

 And (posting_date BETWEEN '{_from}' AND '{to}')
							 {conditions}  ;""")
	return data

def get_columns():
	return [
	   "Name: Link/Journal Entry:200",
	   "Account: Data:300",
	   "Posting Date: Date/Posting Date:150",
	   "Supplier Name: Link/Supplier:200",
	   "Invoice Account: Link/Supplier:200",
	   "VAT No.: Data:100",
	   # "Total Tax: Currency:120",
	   # "Grand Total: Currency:120",
	   "Supplier Invoice Date:  Data:200",
	   "Service Type: Data:200",
	   "Tax Amount: Data:100",
	   "Supplier Invoice No: Data:200"
	   # "Status:150"
	]
