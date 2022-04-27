const { match, kmpMatch, bmMatch, levenshteinDistance } = require("./matcher");
const express = require("express");
const bp = require("body-parser");
const app = express();

const origin = "http://localhost:3000";
const port = 8080;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Allow CORS requests
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/match", (req, res) => {
  /**
   * @type {{name: string,
   *  disease: string,
   *  dnaSequence: string,
   *  method: string
   * }}
   */
  let { name, disease, dnaSequence, method } = req.body;

  if (!name) {
    res
      .status(400)
      .send({
        code: 400,
        message: "No 'name' was provided!",
      })
      .end();
    return;
  }

  if (!disease) {
    res
      .status(400)
      .send({
        code: 400,
        message: "No 'disease' was provided!",
      })
      .end();
    return;
  }

  if (!dnaSequence) {
    res
      .status(400)
      .send({
        code: 400,
        message: "No 'dnaSequence' was provided!",
      })
      .end();
    return;
  }

  let dnaMatch = dnaSequence.match(/[ACGT]+/g);
  if (dnaMatch.length != 1 || dnaMatch[0].length != dnaSequence.length) {
    res
      .status(422)
      .send({
        code: 422,
        message: "Invalid dna sequence!",
      })
      .end();
    return;
  }

  method = method || "auto";

  // TODO: Retrieve disease DNA sequence from database
  /**
   * @type {string}
   */
  let diseaseSequence;

  let foundAt = -1;
  switch (method) {
    case "auto":
      foundAt = match(dnaSequence, diseaseSequence);
      break;
    case "kmp":
      foundAt = kmpMatch(dnaSequence, diseaseSequence);
      break;
    case "bm":
      foundAt = bmMatch(dnaSequence, diseaseSequence);
      break;
    default:
      res
        .status(422)
        .send({
          code: 422,
          message: "Invalid method!",
        })
        .end();
      return;
  }

  let distance = levenshteinDistance(dnaSequence, diseaseSequence);
  let maxLength = Math.max(dnaSequence.length, diseaseSequence.length);
  // TODO: Cap maxLength so that 100% match should get at least 80% similarity
  let similarity = (maxLength - distance) / maxLength;
  let result = similarity >= 0.8;

  // TODO: Add result to database

  res
    .status(200)
    .send({
      code: 200,
      match: foundAt != -1,
      name,
      foundAt,
      similarity,
      result,
    })
    .end();
});

app.listen(port);
console.log(`listening to port ${port}`);
