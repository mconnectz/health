const User = require('../schema/doctor');
const Patient = require('../schema/patient');
const Prescription = require('../schema/prescribe');
module.exports = {
  
  getAll:(req, res)=> {
      User.find({}, (err, docs) => {
        if (err) { return console.error(err); }
        res.status(200).json(docs);
      });
  },
  count:(req, res)=> {
      User.count((err, count) => {
        if (err) { return console.error(err); }
        res.status(200).json(count);
      });
  },
  insert:(req, res) => {
      const obj = new User(req.body);
      obj.save((err, item) => {
        if (err && err.code === 11000) {res.sendStatus(400)}
        if (err) {return console.error(err);}
        res.status(200).json(item);
      });
  },
  get:(req, res) => {
      User.findOne({ _id: req.params.id }, (err, item) => {
        if (err) { return console.error(err); }
        res.status(200).json(item);
      });
  },
  update:(req, res) => {
      User.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
        if (err) { return console.error(err); }
        res.sendStatus(200);
      });
  },
  remove:(req, res) => {
      User.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) { return console.error(err); }
        res.sendStatus(200);
      });
  },

  search:(req,res)=>{
      
      var query = new RegExp('^'+req.body.search,'i');

      User.find({
          "$or":[
                  {name:{$regex:query}},
                  {phone:{$regex:query}}
              ]},(err, data) => {
                  res.json(data);
      });    
   
  },

  newpatient:async(req,res,next)=>{
    const {id} = req.params;
    const newPatient = new Patient(req.body);
    const admin = await User.findById(id);
    newPatient.doctor= admin;
    await newPatient.save();
    admin.patient.push(newPatient);
    await admin.save()
    res.send(newPatient);
  },

  
  getpatient:(req, res) => {

    Patient.find({ doctor: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  },

  getprespatient:(req, res) => {

    Patient.find({ prescription: req.params.presId }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  },
  
  getpatId:(req, res) => {
    const {patId} = req.params;
    Patient.findById(patId, (err, result) => {
      if (err) { return console.error(err); }
      res.status(200).json(result);
    });
  },
  newprescription:async(req,res,next)=>{
    const {userId} = req.params;
    const {patId} = req.params;
    const newpres = new Prescription(req.body);
    const admin = await User.findById(userId);
    const admin1 = await Patient.findById(patId);
    newpres.doctor = admin
    newpres.patient = admin1
    await newpres.save();
    admin.prescription.push(newpres)
    await admin.save();
    admin1.prescription.push(newpres)
    await admin1.save();
    res.send(newpres);
  },
  getpresId:(req, res) => {
    const {presId} = req.params;
    Prescription.findById(presId, (err, result) => {
      if (err) { return console.error(err); }
      res.status(200).json(result);
    });
  },
  // getpres:(req, res) => {
  //   Prescription.find({$and:[{ doctor: req.params.id },{patient: req.params.patId }]}, (err, item) => {
  //     if (err) { return console.error(err); }
  //     res.status(200).json(item);
  //   });
  // },
 
  getpres:(req, res) => {

    Prescription.find({ doctor: req.params.userId }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  },
  getpresc:(req, res) => {

    Prescription.find({ patient: req.params.patId }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

}