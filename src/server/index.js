const express = require("express");

const app = express();

app.use(express.static("dist"));
app.get("/api/users", (req, res) =>
  res.send({
    users: [
      {
        id: 1,
        name: "Braedon",
        favouriteColor: "green",
      },
      {
        id: 2,
        name: "Younes",
        favouriteColor: "orange",
      },
      {
        id: 3,
        name: "Fernando",
        favouriteColor: "purple",
      },
    ],
  })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
