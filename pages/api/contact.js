import connectDB from "../../lib/mongodb";
import Contact from "../../models/Contact";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Only POST allowed" });
  }

  try {
    await connectDB();

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields required" });
    }

    await Contact.create({ name, email, subject, message });

    res.status(201).json({ msg: "Saved successfully ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error saving data" });
  }
}