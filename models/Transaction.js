const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const transac = new mongoose.Schema({
    "customer_name": {
        "type": "String",
        required:true
      },
      "customer_code": {
        "type": "String",
        required: true
      },
      "transaction_amount": {
        "type": "String",
        required: true
      },
      "transaction_discount": {
        "type": "String",
        default: 0
      },
      "transaction_additional_field": {
        "type": "String"
      },
      "transaction_state": {
        "type": "String",
      },
      "transaction_code": {
        "type": "String",
        // required: true
      },
      "transaction_order": {
        "type": "Number",
        // required: true
      },
      "location_id": {
        "type": ObjectId,
        // "ref": 'Location',
        // required: true
      },
      "transaction_cash_amount": {
        "type": "Number",
        default: 0
      },
      "transaction_cash_change": {
        "type": "Number",
        default: 0
      },
      "connote_id": {
        "type": ObjectId,
        "ref": 'Cont',
        // required: true
      },
      "origin_data": {
        "customer_name": {
          "type": "String",
        //   required: true
        },
        "customer_address": {
          "type": "String",
        //   "required" : true
        },
        "customer_email": {
          "type": "String"
        },
        "customer_phone": {
          "type": "String",
          required: true
        },
        "customer_address_detail": {
          "type": "Mixed"
        },
        "customer_zip_code": {
          "type": "String"
        },
        "zone_code": {
          "type": "String"
        },
        "organization_id": {
          "type": "Number"
        },
        "location_id": {
          "type": ObjectId,
          required: true
        }
      },
      "destination_data": {
        "customer_name": {
            "type": "String",
            required: true
          },
          "customer_address": {
            "type": "String",
            "required" : true
          },
          "customer_email": {
            "type": "String"
          },
          "customer_phone": {
            "type": "String",
            required: true
          },
          "customer_address_detail": {
            "type": "Mixed"
          },
          "customer_zip_code": {
            "type": "String"
          },
          "zone_code": {
            "type": "String"
          },
          "organization_id": {
            "type": "Number"
          },
          "location_id": {
            "type": "ObjectId",
            // required: true
          }
      },
      "koli_data":[{
        type: ObjectId,
        ref: 'Koli'
        }],
      "custom_field": {
        "catatan_tambahan": {
          "type": "String"
        }
      },
    //   "currentLocation": {
    //     "name": {
    //       "type": "String"
    //     },
    //     "code": {
    //       "type": "String"
    //     },
    //     "type": {
    //       "type": "String"
    //     }
    //   }
}, {timestamps: true})

module.exports = mongoose.model('Transaction', transac)