const express = require("express");

const {
  CUNDINAMARCA,
  BOLIVAR,
  ATLANTICO,
  MAGDALENA,
  SINCELEJO,
  ERROR,
} = require("../constants.js");
const checkCity = require("../utils/checkCity.js");
const normalizeString = require("../utils/normalizeString.js");

const router = express.Router();

router.get("/:city", (req, res) => {
  const cityParam = normalizeString(req.params.city);

  if (checkCity("bogota", cityParam)) {
    res.json(CUNDINAMARCA);
  } else if (checkCity("cartagena", cityParam)) {
    res.json(BOLIVAR);
  } else if (checkCity("barranquilla", cityParam)) {
    res.json(ATLANTICO);
  } else if (checkCity("santa marta", cityParam)) {
    res.json(MAGDALENA);
  } else if (checkCity("sincelejo", cityParam)) {
    res.json(SINCELEJO);
  } else {
    res.status(404).json(ERROR);
  }
});

module.exports = router;
