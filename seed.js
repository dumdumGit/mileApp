var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://127.0.0.1:27017/paketid', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Cont',
    './models/Koli',
    './models/Transaction',
  ]);

  // Clear specified collections
  seeder.clearModels(['Cont', 'Koli', 'Transaction'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start category
  {
    'model': 'Cont',
    'documents': 
    [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        connote_number: 1,
        connote_service: "ECO",
        connote_service_price: 50200,
        connote_amount: 50200,
        connote_code: "BWA0120910290",
        connote_state: "PAID",
        zone_code_from: "CGKFT",
        zone_code_to: "SMG",
        transaction_id: "5e96cbe292b97300fc90cdb1",
        actual_weight: 18,
        volume_weight: 0,
        chargeable_weight: 18,
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        location_id: "5cecb20b6c49615b174c3e74",
        connote_total_package: 3,
        connote_sla_day: "4",
        location_name: "Hub Jakarta Selatan",
        location_type: "Hub",
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        connote_number: 1,
        connote_service: "ECO",
        connote_service_price: 22000,
        connote_amount: 22000,
        connote_code: "BWA0120910291",
        connote_state: "PAID",
        zone_code_from: "BBFA",
        zone_code_to: "RIFFLE",
        transaction_id: "5e96cbe292b97300fc90cdb2",
        actual_weight: 10,
        volume_weight: 0,
        chargeable_weight: 10,
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        location_id: "5cecb20b6c49615b174c3e75",
        connote_total_package: 2,
        connote_sla_day: "2",
        location_name: "Hub Jakarta Barat",
        location_type: "Hub",
      }
    ]
    },
  // end category
  // start item
  {
    'model': 'Koli',
    'documents': [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        koli_length: 0,
        awb_url: "https://tracking.mile.app/label/AWB00100209082020.1",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        koli_chargeable_weight: 9,
        koli_width: 0,
        koli_height: 0,
        koli_description: "V WARP",
        connote_id: "5e96cbe292b97300fc901111",
        koli_volume: 0,
        koli_weight: 9,
        koli_code: 'AWB00100209082020.1'
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        koli_length: 0,
        awb_url: "https://tracking.mile.app/label/AWB00100209082020.2",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        koli_chargeable_weight: 9,
        koli_width: 0,
        koli_height: 0,
        koli_description: "V WARP",
        connote_id: "5e96cbe292b97300fc901111",
        koli_volume: 0,
        koli_weight: 9,
        koli_code: 'AWB00100209082020.2'
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        koli_length: 0,
        awb_url: "https://tracking.mile.app/label/AWB00100209082020.3",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        koli_chargeable_weight: 2,
        koli_width: 0,
        koli_height: 0,
        koli_description: "LID HOT CU",
        connote_id: "5e96cbe292b97300fc901111",
        koli_volume: 0,
        koli_weight: 2,
        koli_code: 'AWB00100209082020.3'
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        koli_length: 1,
        awb_url: "https://tracking.mile.app/label/AWB00200201082020.1",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        koli_chargeable_weight: 5,
        koli_width: 0,
        koli_height: 0,
        koli_description: "ACCU",
        connote_id: "5e96cbe292b97300fc902222",
        koli_volume: 0,
        koli_weight: 5,
        koli_code: 'AWB00200201082020.1'
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
        koli_length: 0,
        awb_url: "https://tracking.mile.app/label/AWB00200201082020.2",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        koli_chargeable_weight: 2,
        koli_width: 0,
        koli_height: 0,
        koli_description: "ATK",
        connote_id: "5e96cbe292b97300fc902222",
        koli_volume: 0,
        koli_weight: 2,
        koli_code: 'AWB00200201082020.2'
      },
    ]
},
  // end item
  // start image
  {
    'model': 'Transaction',
    'documents': 
    [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        customer_name: 'PT. AMARA PRIMATIGA',
        customer_code: '1678593',
        transaction_amount: 50200,
        transaction_discount: '0',
        transaction_additional_field: '',
        transaction_state: 'PAID',
        transaction_code: 'CGKFT20200715121',
        transaction_order: 121,
        location_id: "5cecb20b6c49615b174c3e74",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        transaction_cash_amount: 0,
        transaction_cash_change: 0,
        connote_id: "5e96cbe292b97300fc901111",
        koli_data: [
            { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
            { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
            { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
        ],
        origin_data: {
            customer_name: 'PT. NARA OKA PRAKARSA',
            customer_address: 'JL. KH. AHMAD DAHLAN NO. 100, SEMARANG TENGAH 12420',
            customer_email: 'info@naraoka.co.id',
            customer_phone: '024-1234567',
            customer_address_detail: null,
            customer_zip_code: '12420',
            zone_code: 'CGKFT',
            location_id: '5cecb20b6c49615b174c3e74'
        },
        destination_data: {
            customer_name: 'PT AMARIS HOTEL SIMPANG LIMA',
            customer_address: 'JL. KH. AHMAD DAHLAN NO. 01, SEMARANG TENGAH',
            customer_email: null,
            customer_phone: '0248453499',
            customer_address_detail: 'KOTA SEMARANG SEMARANG TENGAH KARANGKIDUL',
            customer_zip_code: '50241',
            zone_code: 'SMG',
            location_id: '5cecb20b6c49615b174c3e74'
        },
        custom_field: {
            catatan_tambahan: 'JANGAN DI BANTING / DI TINDIH'
        }
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        customer_name: 'PT. TOS Digi Media',
        customer_code: '1989211',
        transaction_amount: 22000,
        transaction_discount: '0',
        transaction_additional_field: '',
        transaction_state: 'PAID',
        transaction_code: 'BBFAF829182',
        transaction_order: 122,
        location_id: "5cecb20b6c49615b174c3e75",
        createdAt: "2020-07-15T11:11:12+0700",
        updatedAt: "2020-07-15T11:11:22+0700",
        transaction_cash_amount: 0,
        transaction_cash_change: 0,
        connote_id: "5e96cbe292b97300fc902222",
        koli_data: [
            { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') },
            { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
        ],
        origin_data: {
            customer_name: 'PT. Furoka Soka',
            customer_address: 'JL. Mumpung ada no. 50 Jakarta Selatan',
            customer_email: 'info@naraoka.co.id',
            customer_phone: '021-4456789',
            customer_address_detail: null,
            customer_zip_code: '12420',
            zone_code: 'BBFA',
            location_id: '5cecb20b6c49615b174c3e75'
        },
        destination_data: {
            customer_name: 'PT Otsindo Prima',
            customer_address: 'JL. Duren tiga no.101 Jakarta Utara',
            customer_email: null,
            customer_phone: '021-443567',
            customer_address_detail: '',
            customer_zip_code: '50241',
            zone_code: 'RIFFLE',
            location_id: '5cecb20b6c49615b174c3e75'
        },
        custom_field: {
            catatan_tambahan: 'JANGAN DI BANTING / DI TINDIH'
        }
      }
      
    ]
  }

  // end image
  // start feature
];