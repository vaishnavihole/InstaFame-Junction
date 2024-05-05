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

const apiV1Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
  
      if (user.password !== password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
};

const apiV1Update = async (req, res) => {
    try {
      const { name, email, mobile, city, password, role } = req.body;
  
      if (!name || !email || !mobile || !city || !password || !role) {
        return res.status(400).json({ message: "Please provide all fields" });
      }
  
      const updatedUser = await User.findOneAndUpdate({ email }, { name, mobile, city, password, role }, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
}


export { apiV1Signup, apiV1Login, apiV1Update};
    
