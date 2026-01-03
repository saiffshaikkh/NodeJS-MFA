import User from "../model/user.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password" });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    console.log("New User", newUser);
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Registering User" });
  }
};

export const login = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Logging In" });
  }
};

export const status = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Checking Status" });
  }
};

export const logout = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Logging Out" });
  }
};

export const setup2fa = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Setting Up 2FA" });
  }
};

export const verify2fa = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Verifying 2FA" });
  }
};

export const reset2fa = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Resetting 2FA" });
  }
};
