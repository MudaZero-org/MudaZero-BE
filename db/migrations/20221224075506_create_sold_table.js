/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sold", (table) => {
    table
      .integer("meal_pack_id")
      .references("meal_pack_id")
      .inTable("meal_packs")
      .onDelete("CASCADE");
    table
      .integer("business_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("consumer_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("quantity").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("sold");
};
