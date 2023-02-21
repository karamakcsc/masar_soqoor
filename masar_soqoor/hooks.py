from . import __version__ as app_version

app_name = "masar_soqoor"
app_title = "Masar Soqoor"
app_publisher = "KCSC"
app_description = "Soqoor"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@kcsc.com.jo"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/masar_soqoor/css/masar_soqoor.css"
# app_include_js = "/assets/masar_soqoor/js/masar_soqoor.js"

# include js, css files in header of web template
# web_include_css = "/assets/masar_soqoor/css/masar_soqoor.css"
# web_include_js = "/assets/masar_soqoor/js/masar_soqoor.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "masar_soqoor/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "masar_soqoor.install.before_install"
# after_install = "masar_soqoor.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "masar_soqoor.uninstall.before_uninstall"
# after_uninstall = "masar_soqoor.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "masar_soqoor.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }
doctype_js = {
   "Sales Invoice" : "custom/sales_invoice/sales_invoice.js",
   "Payment Entry" : "custom/payment_entry/payment_entry.js"
 }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"masar_soqoor.tasks.all"
# 	],
# 	"daily": [
# 		"masar_soqoor.tasks.daily"
# 	],
# 	"hourly": [
# 		"masar_soqoor.tasks.hourly"
# 	],
# 	"weekly": [
# 		"masar_soqoor.tasks.weekly"
# 	]
# 	"monthly": [
# 		"masar_soqoor.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "masar_soqoor.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "masar_soqoor.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "masar_soqoor.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
	{
		"doctype": "{doctype_1}",
		"filter_by": "{filter_by}",
		"redact_fields": ["{field_1}", "{field_2}"],
		"partial": 1,
	},
	{
		"doctype": "{doctype_2}",
		"filter_by": "{filter_by}",
		"partial": 1,
	},
	{
		"doctype": "{doctype_3}",
		"strict": False,
	},
	{
		"doctype": "{doctype_4}"
	}
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"masar_soqoor.auth.validate"
# ]
fixtures = [
    {"dt": "Custom Field", "filters": [
        [
            "name", "in", [
    			"Account-old_account_number",
				"Item-item_name_ar",
				"Purchase Order-supplier_tax_id",
				"Purchase Order-reference_no",
				"Purchase Order-reference_date",
				"Purchase Invoice-reference_no",
				"Purchase Invoice-reference_date",
				"Purchase Invoice-section_break_19",
				"Purchase Invoice-comments",
				"Purchase Order-section_break_27",
				"Purchase Order-comments",
				"Item Attribute Value-abbr_ar",
				#"Item-kind",
				"Sales Invoice-payment_type",
                "Journal Entry Account-employee",
                "Journal Entry Account-vehicle",
                "Journal Entry Account-supplier_name",
                "Journal Entry Account-supplier_tax",
                "Journal Entry Account-supplier_invoice_no",
                "Journal Entry Account-supplier_invoice_date",
                "Journal Entry Account-service_type",
                "Payment Entry-employee",
                "Payment Entry-vehicle",
                "Payment Entry-paid_from_des",
				"Journal Entry Account-tax_base_amount",
				"Journal Entry Account-tax_category"


                  ]
        ]
    ]}
]
