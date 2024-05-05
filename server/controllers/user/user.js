import User from "../../models/User.js";

const apiV1Signup = async (req, res) => {
    try {
      const { name, email, mobile, city, password, role } = req.body;
  
      if (!name || !email || !mobile || !city || !password || !role) {
        return res.status(400).json({ message: "Please provide all fields" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newUser = new User({ name, email, mobile, city, password, role });
      await newUser.save();
  
      return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
};


export { apiV1Signup };
    

