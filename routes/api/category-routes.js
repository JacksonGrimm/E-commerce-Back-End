const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    let tableData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tableData);
  } catch {
    res.status(500).json("Something went wrong :(");
  }
});
// http://localhost:3001/api/categories/2
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    let tableData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tableData);
  } catch {
    res.status(500).json("Something went wrong :(");
  }
});

router.post("/", async (req, res) => {
  // create a new category
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const tableData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(tableData);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong :(");
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const tableData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tableData);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong :(");
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const tableData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tableData);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong :(");
  }
});

module.exports = router;
