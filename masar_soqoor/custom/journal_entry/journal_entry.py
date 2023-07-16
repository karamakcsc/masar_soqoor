import frappe

@frappe.whitelist()
def update_employee(doc, method):
    for account in doc.accounts:
        if account.account == "215001 - مصاريف رواتب  مستحقة الدفع - SATC":
            name = frappe.db.get_value("Employee", account.party, "name")
            if name:
                account.employee = name
        elif account.account == "52110001 - رواتب و اجور إداري - SATC":
            name = frappe.db.get_value("Employee", account.party, "name")
            if name:
                account.employee = name
        elif account.account == "5220001 - رواتب واجور قسم المبيعات - SATC":
            name = frappe.db.get_value("Employee", account.party, "name")
            if name:
                account.employee = name
        elif account.account == "5120001 - رواتب و اجور انتاج - SATC":
            name = frappe.db.get_value("Employee", account.party, "name")
            if name:
                account.employee = name
        elif account.account == "114206 - ذمم الموظفين - SATC":
            name = frappe.db.get_value("Employee", account.party, "name")
            if name:
                account.employee = name
