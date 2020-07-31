const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const Cont = new mongoose.Schema({
    "connote_number": {
        "type": "Number"
      },
      "connote_service": {
        "type": "String"
      },
      "connote_service_price": {
        "type": "Number"
      },
      "connote_amount": {
        "type": "Number"
      },
      "connote_code": {
        "type": "String"
      },
      "connote_state": {
        "type": "String"
      },
      "zone_code_from": {
        "type": "String"
      },
      "zone_code_to": {
        "type": "String"
      },
      "transaction_id": {
        "type": ObjectId,
        "ref": "Transaction"
      },
      "actual_weight": {
        "type": "Number"
      },
      "volume_weight": {
        "type": "Number"
      },
      "chargeable_weight": {
        "type": "Number"
      },
      "location_id": {
        "type": "ObjectId"
      },
      "connote_total_package": {
        "type": "Number"
      },
      "connote_sla_day": {
        "type": "String"
      },
      "location_name": {
        "type": "String"
      },
      "location_type": {
        "type": "String"
      }
}, {timestamps: true})

module.exports = mongoose.model('Cont', Cont)