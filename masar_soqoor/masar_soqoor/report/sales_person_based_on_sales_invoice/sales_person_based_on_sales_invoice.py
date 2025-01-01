# Copyright (c) 2024, KCSC and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
    conditions = " 1=1 "
    _from, to = filters.get("from"), filters.get("to")
    if filters.get("si"):
        conditions += f" AND tsi.name = '{filters.get('si')}'"
    if filters.get("customer"):
        conditions += f" AND tsi.customer = '{filters.get('customer')}'"
    if filters.get("s_person"):
        conditions += f" AND tst.sales_person = '{filters.get('s_person')}'"
    if _from and to:
        conditions += f" AND tsi.posting_date BETWEEN '{_from}' AND '{to}'"
    if filters.get("is_return"):
        conditions += f" AND tsi.is_return = '{filters.get('is_return')}'"
        
    sql = frappe.db.sql(f"""
                        SELECT 
                        	tsi.name AS `Sales Invoice`, 
                         	tsi.posting_date AS `Posting Date`, 
                          	tsi.customer AS `Customer`,
							tst.sales_person AS `Sales Person`, 
                         	tsi.net_total AS `Total`, 
                          	tsi.total_taxes_and_charges AS `Tax`, 
                            -- tge.debit AS `Cost of Goods`,
                            -- tge.credit AS `Cost of Goods - Return`
                            CASE 
								WHEN tsi.is_return = 1 THEN tge.credit 
								WHEN tsi.is_return = 0 THEN tge.debit 
							END AS `Cost Of Goods`
						FROM 
      						`tabSales Invoice` tsi
						INNER JOIN 
      						`tabSales Team` tst ON tst.parent = tsi.name
						INNER JOIN 
      						`tabGL Entry` tge ON tge.voucher_no = tsi.name
						INNER JOIN 
      						tabCompany tc ON tsi.company = tc.name 
						WHERE 
      						{conditions} AND tge.account = tc.default_expense_account AND tsi.docstatus = 1
                        """)
    
    return sql

def get_columns():
    return [
		"Sales Invoice: Link/Sales Invoice:200",
	   	"Posting Date: Date:200",
	   	"Customer: Link/Customer:200",
	   	"Sales Person: Link/Sales Person:200",
		"Net Total: Currency:200",
		"Tax Total: Currency:200",
		"Cost of Goods: Currency:200",
		# "Cost of Goods - Return: Currency:250"
	]
