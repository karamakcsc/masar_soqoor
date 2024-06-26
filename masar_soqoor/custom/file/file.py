import frappe

def on_update(doc, event=None):
    if doc.attached_to_doctype and doc.attached_to_name:
        doc = frappe.get_doc(doc.attached_to_doctype, doc.attached_to_name)
        if doc.docstatus == 1:
            frappe.throw('Deleting attachments for submitted documents is not allowed.')
            
            
def on_trash(doc, event=None):
    on_update(doc, event=None)