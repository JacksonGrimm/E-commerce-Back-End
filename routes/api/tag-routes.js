const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    let tableData = await Tag.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(tableData);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong :(");
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    let tableData = await Tag.findByPk(req.params.id, {
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
  // create a new tag
  try {
    const tableData = await Tag.create({
      tag: req.body.tag_name,
    });
    res.status(200).json(tableData);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong :(");
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tableData = await Tag.update(req.body, {
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
  // delete on tag by its `id` value
  try {
    const tableData = await Tag.destroy({
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
