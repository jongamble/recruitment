var express = require('express');
var router = express.Router();
var Inquiry = require("../model/recruit");

/* GET recruitment listings. */
router.get('/', function(req, res, next) {
  // var db = new recruitModel();
  var response = {};
  Inquiry.find({}, function(err,data){
  // Mongo command to fetch all data from collection.
    if(err) {
      response = {"error" : true,"message" : "Error fetching data"};
    } else {
      response = {"error" : false, "message" : data};
    }
    console.log(data);
    console.log(err);
    res.render('recruit', { title: 'Recruitment Listings', recruiters: response });
  });
});

router.get("/:id", function(req,res){
  // var db = new recruitModel();
  var response = {};
  Inquiry.findById(req.params.id,function(err,data){
    // This will run Mongo Query to fetch data based on ID.
    if(err) {
      response = {"error" : true, "message" : "Error fetching data"};
    } else {
      response = {"error" : false, "message" : data};
    }
    console.log(data);
    res.render('recruitInd', { title: 'Recruitment Listings', recruiters: response });
  });
});

/* POST recruitment listings. */
router.post('/', function(req, res) {
  var db = new Inquiry();
  var response = {};
  // fetch email and password from REST request.
  // Add strict validation when you use this in Production.
  db.company_name        = req.body.company_name;
	db.office_location     = req.body.office_location;
	db.company_website     = req.body.company_website;
	db.job_title           = req.body.job_title;
  db.annual_pa           = req.body.annual_pay;
	db.annual_bonus        = req.body.annual_bonus;
	db.stock_option        = req.body.stock_options;
	db.retirement_percent  = req.body.retirement_percent;
  db.vacation_days       = req.body.vacation_days;
	db.personal_day        = req.body.personal_days;
	db.sick_day            = req.body.sick_days;
	db.telecommute_days    = req.body.telecommute_days;
	db.health_insurance    = req.body.health_insurance;
	db.other_perk          = req.body.other_perks;
  db.browser_side        = req.body.browser_side;
  db.server_side         = req.body.server_side;
	db.databases           = req.body.databases;
  db.manager_name        = req.body.manager_name;
	db.manager_title       = req.body.manager_title;
	db.number_subordinates = req.body.number_subordinates;
  db.job_description     = req.body.job_description;
	db.recruiter_name      = req.body.recruiter_name;
	db.recruiter_email     = req.body.recruiter_email;
	db.submit_date         = new Date().toISOString();

  db.save(function(err){
  // save() will run insert() command of MongoDB.
  // it will add new data in collection.
      if(err) {
          response = {"error" : true,"message" : "Error adding data"};
      } else {
          response = {"error" : false,"message" : "Data added"};
      }
      res.json(response);
  });

});

module.exports = router;
