# Copyright (c) 2024, KCSC and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
    _from, to = filters.get('from'), filters.get('to') #date range

    # Conditions
    conditions = " AND 1=1 "
    if filters.get('name'): conditions += f" AND tsi.name = '{filters.get('name')}' "
    if filters.get('customer'): conditions += f" AND tsi.customer = '{filters.get('customer')}' "
    if filters.get('payment_type'): conditions += f" AND tsi.payment_type = '{filters.get('payment_type')}' "
    if filters.get('is_pos'): conditions += f" AND tsi.is_pos = '{filters.get('is_pos')}' "
    if filters.get('sales_person'): conditions += f" AND tst.sales_person = '{filters.get('sales_person')}' "

    data = frappe.db.sql(f"""        SELECT 
            tsi.name as `Name`  , tsii.delivery_note as `Delivery Note` , tsi.posting_date as  `Posting Date`  , tsi.customer_name as `Customer name` ,
			tsi.customer as `Customer`  , tsle.warehouse as `warehouse` , tsi.payment_type as `payment Type` , 
			tsi.grand_total as `Grand Total`, tsi.status as `Status` , tst.sales_person as `Sales Person` , tsle.valuation_rate as `Valuation Rate`
		FROM 
            `tabSales Invoice` tsi 
		INNER JOIN `tabStock Ledger Entry` tsle ON tsi.name = tsle.voucher_no 
		INNER JOIN `tabSales Team` tst  ON tst.parent = tsi.name
		INNER JOIN `tabSales Invoice Item` tsii ON tsii.parent = tsi.name 
        WHERE 
            tsi.docstatus = 1  AND (tsi.posting_date BETWEEN '{_from}' AND '{to}')
            {conditions} ;""")
    return data


def get_columns():
    return [
        "Name:Link/Sales Invoice:200",
        "Delivery Note:Link/Delivery Note Invoice:200",
        "Posting Date: Date/Posting Date:150",
        "Customer Name: Data:200",
        "Customer: Data:200",
        "Warehouse: Data:200",
        "Payment Type: Data:200",
        "Grand Total: Data:200",
        "Status: Data:200",
        "Sales Person: Data:200",
        "Valuation Rate: Data:200"
    ]