var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/recruiter');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var recruitSchema  = new mongoSchema({
  'company_name'       : String,
	'office_location'    : String,
	'company_website'    : String,
	'job_title'          : String,
  'annual_pay'         : String,
	'annual_bonus'       : String,
	'stock_options'      : String,
	'retirement_percent' : String,
  'vacation_days'      : String,
	'personal_days'      : String,
	'sick_days'          : String,
	'telecommute_days'   : String,
	'health_insurance'   : String,
	'other_perks'        : String,
  'browser_side'       : String,
  'server_side'        : String,
	'databases'          : String,
  'manager_name'       : String,
	'manager_title'      : String,
	'number_subordinates': String,
  'job_description'    : String,
	'recruiter_name'     : String,
	'recruiter_email'    : String,
  'submit_date'        : String
});

// create model if not exists.
module.exports = mongoose.model('Inquiry',recruitSchema);
