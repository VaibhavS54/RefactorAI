export default function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;
    const review = `✅ Code looks fine. It has ${code.split("\n").length} lines.`;
    res.status(200).json(review);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
