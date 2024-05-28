# Copyright (c) 2024, KCSC and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
    return get_columns(), get_data(filters)
def get_data(filters):
    _from, to = filters.get('from'), filters.get('to')  # date range

    # Initialize conditions as an empty string
    conditions = " "

    if filters.get('pi_no'):
        conditions += f" AND tpi.name = '{filters.get('pi_no')}' "
    if filters.get('supplier'):
        conditions += f" AND tpi.supplier = '{filters.get('supplier')}' "

    data = frappe.db.sql(f"""
        SELECT
            tpi.supplier,
            tpi.posting_date,
            tpi.reference_no,
            tpi.supplier_name,
            tpi.name,
            tpi.custom_cus_dec_date,
            tpi.custom_cus_dec_no,
            tpi.custom_port_name,
            tpi.custom_cus_dec_amount,
            tpi.custom_cus_dec_fee,
            tpi.custom_cus_dec_tax,
            tpi.base_total
        FROM `tabPurchase Invoice` tpi 
        WHERE (tpi.posting_date BETWEEN %s AND %s) {conditions}
        ORDER BY tpi.posting_date DESC;
        """, (_from, to))

    return data

def get_columns():
    columns = []
    columns.append("Supplier:Link/Supplier:300")
    columns.append("Posting Date:Date:200")
    columns.append("Reference No:Data:200")
    columns.append("Supplier Name:Data:200")
    columns.append("Purchase Invoice:Link/Purchase Invoice:200")
    columns.append("Custom Declaration Date:Data:300")
    columns.append("Custom Declaration No:Data:200")
    columns.append("Port Name:Data:200")
    columns.append("Custom Declaration Amount:Data:150")
    columns.append("Custom Declaration Fee:Currency:150")
    columns.append("Custom Declaration Tax:Currency:150")
    columns.append("Total Purchase invoice (SAR):Currency:150")

    return columns