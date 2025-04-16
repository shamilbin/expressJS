import express from "express";

const app = express();

const PORT = 7777;

// 🔥 HTTP Methods in Thalapathy style
// Thalapathy doesn't just *get*, he *posts* his punch, *puts* his style, and *deletes* the haters!
// Methods: GET, POST, PUT, DELETE

// 💥 MASS ENTRY ROUTE - Home Page
app.get("/", (req, res) => {
  try {
    res.send("🧨 Thalapathy Entry! Welcome to the Home Page!    🧨");
  } catch (error) {
    console.log("💥 Error in Home Route:", error);
  }
});

// 🎯 Registration Route - Fans enrolling
app.get("/register", (req, res) => {
  try {
    res.send("📝 Register here to join Thalapathy Army!");
  } catch (error) {
    console.log("📛 Error in Register Route:", error);
  }
});

// 🧠 Planning to add more routes like /login?
// Don’t worry... Thalapathy has a plan for that too 😎

// 🎬 Server Launch
app.listen(PORT, () => {
  console.log(`🚀 Server is Roaring like Thalapathy on PORT ${PORT}!`);
});

// Quick Routes Recap with Mass Dialogue Style:
// 🔗 http://localhost:7777          → "🧨 Thalapathy Entry! Welcome to the Home Page! 🧨"
// 🔗 http://localhost:7777/register → "📝 Register here to join Thalapathy Army!"
// 🔗 http://localhost:7777/login    → Add route later → "👊 Login Page — Power Packed like a Thalapathy Punch!"