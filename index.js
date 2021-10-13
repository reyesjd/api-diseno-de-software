const express = require("express");
const app = express();

const normalize = (s) => {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u0301]/g, "")
    .toLowerCase();
};

const check = (city, param) => {
  return param.indexOf(city) > -1;
};

app.get("/", function (req, res) {
  res.json({ message: "Adivina el departamento ;)" });
});

app.get("/:city", function (req, res) {
  const cityParam = normalize(req.params.city);

  res.setHeader("Content-Type", "application/json");

  if (check("bogota", cityParam)) {
    res.json({ departamento: "cundinamarca" });
  } else if (check("cartagena", cityParam)) {
    res.json({ departamento: "bolivar" });
  } else if (check("barranquilla", cityParam)) {
    res.json({ departamento: "atlantico" });
  } else if (check("santa marta", cityParam)) {
    res.json({ departamento: "magdalena" });
  } else if (check("sincelejo", cityParam)) {
    res.json({ message: "¿Estás bien? No existe." });
  } else {
    res.json({ message: "Ciudad inválida" });
  }
});

app.listen(process.env.PORT || 3000);
