// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'Category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: 'Tag_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  foreignKey: 'Tag_id',
  onDelete: 'CASCADE',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
