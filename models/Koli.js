const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const koli = new mongoose.Schema({
    "koli_length": {
        "type": "Number",
        "default": 0
      },
      "awb_url": {
        "type": "String",
        required: true
      },
      "koli_chargeable_weight": {
        "type": "Number",
        required: true,
        default: 0
      },
      "koli_width": {
        "type": "Number",
        default: 0
      },
      "koli_height": {
        "type": "Number",
        default: 0
      },
      "koli_description": {
        "type": "String",
        required: true
      },
      "koli_formula_id": {
        "type": "Mixed"
      },
      "connote_id": {
        "type": ObjectId,
        "ref": 'Connote',
        required: true
      },
      "koli_volume": {
        "type": "Number",
        default: 0
      },
      "koli_weight": {
        "type": "Number",
        default: 0,
        required: true
      },
      "koli_code": {
          "type": "String",
          required: true
      }

}, {timestamps: true})

module.exports = mongoose.model('Koli', koli)

