export default function (req, res) {
  console.log("TEST ROUTE HIT");
  res.status(200).json({ message: "API is working" });
}
