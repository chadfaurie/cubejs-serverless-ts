// KibanaSampleDataEcommerces
cube(`KibanaSampleDataEcommerce`, {
  // Remove .main
  sql: `SELECT * FROM kibana_sample_data_ecommerce`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        customerFirstName,
        customerFullName,
        customerId,
        customerLastName,
        orderId,
        customerBirthDate,
        orderDate
      ]
    },

    totalQuantity: {
      sql: `total_quantity`,
      type: `sum`
    }
  },

  dimensions: {
    category: {
      sql: `category`,
      type: `string`
    },

    currency: {
      sql: `currency`,
      type: `string`
    },

    customerFirstName: {
      sql: `customer_first_name`,
      type: `string`
    },

    customerFullName: {
      sql: `customer_full_name`,
      type: `string`
    },

    customerGender: {
      sql: `customer_gender`,
      type: `string`
    },

    customerId: {
      sql: `customer_id`,
      type: `string`
    },

    customerLastName: {
      sql: `customer_last_name`,
      type: `string`
    },

    customerPhone: {
      sql: `customer_phone`,
      type: `string`
    },

    dayOfWeek: {
      sql: `day_of_week`,
      type: `string`
    },

    email: {
      sql: `email`,
      type: `string`
    },

    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },

    orderId: {
      sql: `order_id`,
      type: `string`
    },

    sku: {
      sql: `sku`,
      type: `string`
    },

    taxfulTotalPrice: {
      sql: `taxful_total_price`,
      type: `string`
    },

    taxlessTotalPrice: {
      sql: `taxless_total_price`,
      type: `string`
    },

    type: {
      sql: `type`,
      type: `string`
    },

    user: {
      sql: `user`,
      type: `string`
    },

    customerBirthDate: {
      sql: `customer_birth_date`,
      type: `time`
    },

    orderDate: {
      sql: `order_date`,
      type: `time`
    }
  }
});
