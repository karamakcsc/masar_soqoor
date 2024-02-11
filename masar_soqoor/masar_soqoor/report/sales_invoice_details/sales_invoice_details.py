# Copyright (c) 2024, KCSC and contributors
# For license information, please see license.txt

# import frappe


# def execute(filters=None):
# 	columns, data = [], []
# 	return columns, data
from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
    _from, to = filters.get('from'), filters.get('to') 

    conditions = ""
    if filters.get('name'):
        conditions += f" AND tsi.name = '{filters.get('name')}' "
    if filters.get('customer'):
        conditions += f" AND tsi.customer = '{filters.get('customer')}' "
    if filters.get('payment_type'):
        conditions += f" AND tsi.payment_type = '{filters.get('payment_type')}' "
    if filters.get('status'):
        conditions += f" AND tsi.status = '{filters.get('status')}' "
    if filters.get('is_pos'):
        conditions += f" AND tsi.is_pos = '{filters.get('is_pos')}' "

    data = frappe.db.sql(f"""
        SELECT 
            tsi.name  , tsii.delivery_note , tsi.posting_date  , tsi.customer_name  ,
			tsi.customer   , tsle.warehouse , tsi.payment_type , 
			tsi.grand_total , tsi.status , tst.sales_person  , tsle.valuation_rate 
		FROM 
            `tabSales Invoice` tsi 
		INNER JOIN `tabStock Ledger Entry` tsle ON tsi.name = tsle.voucher_no 
		INNER JOIN `tabSales Team` tst  ON tst.parent = tsi.name
		INNER JOIN `tabSales Invoice Item` tsii ON tsii.parent = tsi.name 
        WHERE 
            tsi.docstatus = 1 
            AND tsi.posting_date BETWEEN '{_from}' AND '{to}' {conditions}
    """)
    return data


def get_columns():
    return [
        "Name:Link/Sales Invoice:200",
        "Delivery Note:delivery_note:200",
        "Date:posting_date:150",
        "Title: customer_name :200" , 
        "Customer:customer:200", 
        "Source Warehouse:warehouse:150",
        "Payment Type:payment_type:150", 
        "Grand Total:grand_total:100", 
        "Status:status:100", 
        "Sales Person: sales_person:150", 
        "Valuation Rate: valuation_rate:150", 
    ]
