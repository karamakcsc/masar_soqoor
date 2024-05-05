import frappe

def on_submit(self , method):
    check_tax(self)



def check_tax(self):
    rates = frappe.db.sql("""
        SELECT tstac.rate , tstac.idx , tstac.charge_type 
        FROM `tabSales Invoice` tsi 
        INNER JOIN `tabSales Taxes and Charges` tstac ON  tsi.name = tstac.parent 
        WHERE tsi.name = %s
    """ , (self.name) , as_dict = True )
    for rate in rates:
        if not rate.rate:
            frappe.throw(f'Error: No Rate found for {rate.charge_type} in row {rate.idx}.')
    if not (self.tax_category and self.taxes_and_charges):
        frappe.throw(f'Error: Please ensure that the Tax Category and Sales Taxes and Charges Template are filled.')