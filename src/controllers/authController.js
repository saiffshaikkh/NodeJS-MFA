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
    console.log("The Auth User Is: ", req.user);
    res.status(200).json({
      message: "User Logged In Successfully",
      username: req.user.username,
      isMfaActive: req.user.isMfaActive,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Logging In" });
  }
};

export const status = (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        message: "User Logged In Successfully",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
      });
    } else {
      res.status(401).json({ message: "User Not Logged In" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Checking Status" });
  }
};

export const logout = (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User Not Logged In" });
    }
    req.logout((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error Logging Out" });
      }
      res.status(200).json({ message: "User Logged Out Successfully" });
    });
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
