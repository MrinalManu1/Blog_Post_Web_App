import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Database connection using DATABASE_URL
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('localhost') 
    ? false // Disable SSL for localhost
    : { rejectUnauthorized: false } // Enable SSL for deployment platforms like Render
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM posts ORDER BY id ASC");
    res.render("home", { posts: result.rows });
  } catch (err) {
    console.error(err);
  }
});


app.get("/create", (req, res) => {
  res.render("create");
});


app.post("/create", async (req, res) => {
  const { title, content } = req.body;
  await db.query("INSERT INTO posts (title, content) VALUES ($1, $2)", [
    title,
    content,
  ]);
  res.redirect("/");
});


app.post("/view", async (req, res) => {
  const postId = parseInt(req.body.id);
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);
  if (result.rows.length > 0) {
    res.render("view", { post: result.rows[0] });
  } else {
    res.status(404).send("Post not found");
  }
});


app.post("/edit", async (req, res) => {
  const postId = parseInt(req.body.id);
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);
  if (result.rows.length > 0) {
    res.render("edit", { post: result.rows[0] });
  } else {
    res.status(404).send("Post not found");
  }
});


app.post("/update", async (req, res) => {
  const { id, title, content } = req.body;
  await db.query("UPDATE posts SET title = $1, content = $2 WHERE id = $3", [
    title,
    content,
    id,
  ]);
  res.redirect("/");
});


app.post("/delete", async (req, res) => {
  const postId = parseInt(req.body.id);
  await db.query("DELETE FROM posts WHERE id = $1", [postId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
