const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const datasetSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Employee data must require a name"],
        trim: true,
        maxlength:[40, "Employee name must have less or equal than 40 characters"],
        minlenght:[5 , "Employee name must have more or equal than 5 characters"],
        // validate: [validator.isAlpha, 'Name must only contain characters']
    },
    email:{
        type: String,
        require: [true, "Employee data must require email"],
        unique: true,
        validate: [validator.isEmail, "please provide a valid email"],
    },
    slug:String,
    salary:{
        type: Number,
        required: [true,"Employee data must require salary"],
        
    }, 
    currency:{
        type: String,
        enum: ['USD', 'EUR', 'GBP',"INR"],
        default: 'USD',
    },
    department:{
        type: String,
        required: [true,"Employee data must require department"],
        enum: ['Engineering', 'Banking', 'Operations', 'Administration'],

    },
    sub_department:{
        type: String,
        required: [true,"Employee data must require sub department"],
        enum:['Platform','Loan', 'CustomerOnboarding', 'Agriculture'],
    },
    on_contract:{
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
      },
},

{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

datasetSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });

  datasetSchema.post(/^find/, function (docs, next) {
    console.log(`Query took ${Date.now() - this.start} milliseconds!`);
    next();
  });
  

  const Dataset =mongoose.model("Dataset", datasetSchema);
  module.exports = Dataset;