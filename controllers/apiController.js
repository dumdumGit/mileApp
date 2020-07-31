const cont = require('../models/Cont');
const koli = require('../models/Koli');
const trans = require('../models/Transaction');
const mongoose = require('mongoose');
var crypto = require("crypto");

module.exports = {
    getPackage: async (req, res) => {
        try {
            const Transaction = await trans.find()
            .populate({ path: 'koli_data' })
            .populate({ path: 'connote_id' });

            res.status(200).json({ Transaction });
            
        } catch (error) {
            res.status(500).json({ message: 'Ooops Something went wrong' })
        }
    },

    getPackageById: async (req, res) => {
        try {
            const { id } = req.params;
            const package = await trans.findOne({ _id:id })
            .populate({ path: 'koli_data' })
            .populate({ path: 'connote_id' });

            res.status(200).json({ package });

        } catch (error) {
            res.status(500).json({ message: 'Ooops Something went wrong' });
        }

    },

    packagePut: async  (req, res) => {
            const { id } = req.params;

            trans.updateOne({_id : id}, req.body, function(err, transac) {
                if(err) {
                    res.status(500).json({ message:"Oops!, Something went wrong" });

                }
                res.status(200).json({
                    message : "Transaction was Updated!"
                })
            });
    },

    packageDelete: async (req, res) => {
        const { id } = req.params;

        trans.deleteOne({ _id:id }, function(err, transac){
            if(err) {
                res.status(500).json({ message:"Oops!, Something went wrong" });
            }
            res.status(200).json({
                message : "Transaction was Delete!"
            })
        })
    },

    packagePost: async (req, res) => {        
        try {
            const { 
                connote,
                koli_data,
                customer_name,
                customer_code,
                transaction_amount,
                transaction_discount,
                transaction_additional_field,
                transaction_state,
                transaction_code,
                transaction_order,
                createdAt,
                updatedAt,
                transaction_cash_amount,
                transaction_cash_change,
                origin_data,
                destination_data,
                custom_field
            } = req.body;

            var connoteCode = crypto.randomBytes(10).toString('hex');

            cont.create({
                connote_number: connote.connote_number,
                connote_service: connote.connote_service,
                connote_service_price: connote.connote_service_price,
                connote_amount: connote.connote_amount,
                connote_code: connoteCode,
                connote_state: connote.connote_state,
                zone_code_from: connote.zone_code_from,
                zone_code_to: connote.zone_code_to,
                actual_weight: connote.actual_weight,
                volume_weight: connote.volume_weight,
                chargeable_weight: connote.chargeable_weight,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                location_id: connote.location_id,
                connote_total_package: connote.connote_total_package,
                connote_sla_day: connote.connote_sla_day,
                location_name: connote.location_name,
                location_type: connote.location_type
              }, function(err, conRes){
                if(err){
                    res.status(500).json({ message:"Oops!, Something went wrong in connote" });
                }

                var kolId = [];

                for( var item of koli_data ){
                    var koliCode = crypto.randomBytes(11).toString('hex');

                    item.connote_id = conRes.id;
                    item.koli_code = koliCode;
                    koli.create(item, function(err, kolRes){
                        if(err){
                            res.status(500).json({ message:"Oops!, Something went wrongin kol_data" });
                        }
                        kolId.push("oww")
                    });
                }

                var transCode = crypto.randomBytes(10).toString('hex');
                var custCode = crypto.randomBytes(10).toString('hex');

                trans.create({
                    customer_name: customer_name,
                    customer_code: custCode,
                    transaction_amount: transaction_amount,
                    transaction_discount: transaction_discount,
                    transaction_additional_field: transaction_additional_field,
                    transaction_state: transaction_state,
                    transaction_code: transCode,
                    transaction_order: transaction_order,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    transaction_cash_amount: transaction_cash_amount,
                    transaction_cash_change: transaction_cash_change,
                    connote_id: conRes.id,
                    koli_data: kolId,
                    origin_data: origin_data,
                    destination_data: destination_data,
                    custom_field: custom_field
                }, function(err, transRes){
                    if(err){
                        res.status(500).json({ message:"Oops!, Something went wrong in transaction" });
                    }

                    res.status(200).json({
                        message : "Package was Created!"
                    })
                })
            })
    
        } catch (error) {
            res.status(500).json({ message:"Oops!, Something went wrong" });
        }
    }
}