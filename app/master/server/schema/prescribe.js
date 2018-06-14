var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var prescription = new Schema({
  date:{type:Date, default:Date.now},
  healthissue:{type:String},
  diagnosisreport: {type: String},
  otherremark: {type: String},
  medicine: {type: String},
  dosage:{type:String},
  frequency:{type:String},
  comments:{type:String},
  pharmacie:{type:String},
  test:{type:String},
  lab:{type:String},
  patientname:{type:String},
  doctorname:{type:String},
  
  doctor: {type: Number,ref: 'doctor'},
  patient: {type: Number,ref: 'patient'},
});

prescription.plugin(autoIncrement.plugin, {
  model: 'prescription',
  field: '_id',
  prefix:'pres_',
  startAt: 10000,

});

module.exports = mongoose.model('prescription', prescription);