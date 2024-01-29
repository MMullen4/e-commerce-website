const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product
      }]
    })
    res.json(categories) // sends categories back to front-end
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category_data = await Category.findByPk(req.params.id,  // finds product id and include assoc prods
      {
        include: [{
          model: Product
        }]
      })
    if (!category_data) {
      return res.status(404).json({
        message: `Can't find Category by id Number`
      })
    }
    res.json(category_data)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body) // requests new object of data
    res.status(200).json(newCategory)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!updateCategory) {
      return res.status(404).json({
        message: `Can't update or category id not found`
      })
    }
    res.status(200).json(updateCategory)

  }
  catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!deleteCategory) {
      return res.status(404).json({
        message: `Unable to find category by id`
      })
    }
    res.status(200).json(deleteCategory)  // send deleted category to fron-end
  }
  catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
