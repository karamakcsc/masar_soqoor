# Copyright (c) 2024, KCSC and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
    # _from, to = filters.get('from'), filters.get('to')
    conditions = ' 1=1 '
    if filters.get('item'):
        conditions += f" AND tb.item_code = '{filters.get('item')}'"
    if filters.get('warehouse'):
        conditions += f" AND tb.warehouse = '{filters.get('warehouse')}'"
    # if _from and to:
    #     conditions += f" AND tsle.posting_date BETWEEN '{_from}' AND '{to}'"
        
    sql = frappe.db.sql(f"""
                        SELECT 
                            tb.item_code AS `Item`, ti.item_name AS `Item Name`, 
                            tb.warehouse AS `Warehouse`, tb.actual_qty AS `Balance Qty`
                        FROM 
                            tabBin tb
                        INNER JOIN 
                            tabItem ti ON ti.name = tb.item_code 
                        WHERE {conditions}
                        GROUP BY 
                            tb.item_code, tb.warehouse
                        ORDER BY 
                            tb.item_code ASC;
                        """)
    
    return sql

def get_columns():
    return [
	   "Item: Link/Item:200",
	   "Item Name: Data:400",
	   "Warehouse: Link/Warehouse:300",
	   "Balance Qty: Data:250",
	]
    
