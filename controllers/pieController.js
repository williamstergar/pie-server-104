const router = require("express").Router();
const { PieModel } = require("../models");
const { validateSession } = require("../middleware");
const chalk = require("chalk");

//router.get('/', (req, res) => res.send('I love pie!'));

//! GET ALL PIES
router.get("/", async (req, res) => {
  try {
    const allPies = await PieModel.findAll();

    res.status(200).json(allPies);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//! CREATE PIE
router.post("/create", validateSession, async (req, res) => {
  try { 
    const { nameOfPie, baseOfPie, crust, timeToBake, servings, rating } =
      req.body;

    const Pie = await PieModel.create({
      nameOfPie,
      baseOfPie,
      crust,
      timeToBake,
      servings,
      rating,
    });

    res.status(201).json({
      message: "Pie successfully created!",
      Pie,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to create pie: ${err}`,
    });
  }
});

//! GET PIES BY NAME

router.get("/:nameOfPie", async (req, res) => {
  try {
    const locatedPie = await PieModel.findAll({
      where: { nameOfPie: req.params.nameOfPie },
    });
    res
      .status(200)
      .json({ message: "Pies successfully retrieved", locatedPie });
  } catch (err) {
    res.status(500).json({ message: `Failed to retrieve pies: ${err}` });
  }
});

//! UPDATE PIE BY ID
router.put("/:id", async (req, res) => {
  const { nameOfPie, baseOfPie, crust, timeToBake, servings, rating } =
    req.body;
  try {
    await PieModel.update(
      { nameOfPie, baseOfPie, crust, timeToBake, servings, rating },
      { where: { id: req.params.id }, returning: true }
    ).then((result) => {
      res
        .status(200)
        .json({ message: "Pie successfully updated", updatedPie: result });
    });
  } catch (err) {
    res.status(500).json({ message: `Failed to update pie: ${err}` });
  }
});

//! DELETE PIE BY ID
router.delete("/:id", async(req, res) => {
    try{
        const query = {where: {
            id: req.params.id
        }}
        await PieModel.destroy(query)
        res.status(200).json({
            message: "Pie has successfully been deleted"
        })
    } catch(err){
        res.status(500).json({
            message: "Error"
        })
    }
}) 

module.exports = router;