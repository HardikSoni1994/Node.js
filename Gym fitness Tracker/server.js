const express = require("express");
const path = require("path"); // Path module add kiya
const GymMember = require("./model/GymMember");
const db = require("./config/db.config");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// Middleware for Form Data
app.use(express.urlencoded());

// public css folder path connect karne ke liye**
app.use(express.static('public'));


// 1. Home Route (Show Table/Website)
app.get("/", async (req, res) => {
  const allMembers = await GymMember.find();
  return res.render("table", { allMembers });
});

// 2. Add Member Page Route
app.get("/addMemberPage", (req, res) => {
  return res.render("form");
});

// 3. Create/Insert Logic
app.post("/addMember", async (req, res) => {
  try {
    console.log("Form data received:", req.body);
    const newMember = await GymMember.create(req.body);
    console.log("Member Added Successfully:", newMember);
    return res.redirect("/");
  } catch (error) {
    console.log("Error adding member:", error.message);
    console.log("Full error:", error);
    return res.redirect("/addMemberPage");
  }
});

// 4. Edit Page Route
app.get('/editMember/:id', async (req, res) => {
  const member = await GymMember.findById(req.params.id);
  if (member) {
    return res.render('edit', { member });
  }
  return res.redirect('/');
});

// 5. Update Logic
app.post('/updateMember', async (req, res) => {
  await GymMember.findByIdAndUpdate(req.body.id, req.body, { new: true });
  console.log("Member Updated");
  return res.redirect('/');
});

// 6. Delete Logic
app.get("/deleteMember", async (req, res) => {
  await GymMember.findByIdAndDelete(req.query.id);
  console.log("Member Deleted");
  return res.redirect("/");
});

app.listen(PORT, (error) => {
  if (error) console.log("Error:", error);
  console.log(`Gym Server running at http://localhost:${PORT}`);
});