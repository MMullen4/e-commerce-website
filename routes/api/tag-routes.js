const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags and include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{
        model: Product
      }]
    })
    res.json(tags) // sends tags back to front-end
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` and include its associated Product data
  try {
    const tag_data = await Tag.findByPk(req.params.id,  // finds product id and include assoc prods
      {
        include: [{
          model: Product
        }]
      })
    if (!tag_data) {
      return res.status(404).json({
        message: `Can't find Tag by id Number`
      })
    }
    res.json(category_data)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body) // requests new object of data
    res.status(200).json(newTag)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!updateTag) {
      return res.status(404).json({
        message: `Can't update or tag id not found`
      })
    }
    res.status(200).json(updateCategory)
  }
  catch (error) {
    res.status(500).json(error)
  }
  });

router.delete('/:id', async (req, res) => {
  // delete tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!deleteTag) {
      return res.status(404).json({
        message: `Unable to find Tag by id`
      })
    }
    res.status(200).json(deleteTag)  // send deleted category to fron-end
  }
  catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
