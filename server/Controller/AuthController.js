const UserModel = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const sendEmail = require("../Utils/sendEmail");
const genToken = require("../Utils/generateToken");
const cookie = require("cookie-parser");

/**
 * methode => post
 * url => api/auth/login
 * access => public
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send("please add all fildes");

  const user = await UserModel.findOne({ where: { email } });
  if (!user) return res.status(400).send("User dose not exist");
  console.log(user);

  const compPassword = await bcrypt.compare(password, user.password);

  if (user && compPassword) {
    if (user.Status == false) {
      return res.status(400).send("your email is not validated");
    }
    const cookiesExp = new Date(new Date().getTime() + 15 * 60 * 1000);
    const token = genToken(user.id_user);
    console.log(token);
    res
      .cookie("access_token", token, {
        expires: cookiesExp,
      })
      .status(200)
      .json({
        id: user.id_user,
        first_Name: user.first_Name,
        last_Name: user.last_Name,
        email: user.email,
        phone_number: user.phone_number,
        city: user.city,
        adresse: user.adresse,
        message: "user is logened",
        role: user.role,
      });
  } else {
    res.status(400).send("Opps!! Email or Password is not correct");
  }
});

/**
 * methode => post
 * url => api/auth/register
 * access => public
 */
const register = asyncHandler(async (req, res) => {
  const {
    first_Name,
    last_Name,
    email,
    password,
    phone_number,
    city,
    adresse,
  } = req.body;
  console.log(req.body);

  if (!first_Name || !last_Name || !email || !password || !phone_number || !city || !adresse) {
      res.status(400).send('please add all fields')
  }

  const emailExist = await UserModel.findOne({ where: { email } });
  if (emailExist) {
    return res.status(400).send("Opps!! Email has been already Exist");
  }


  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const data = {
    first_Name,
    last_Name,
    email,
    password: hashPassword,
    phone_number,
    city,
    adresse,
    ValidateToken: crypto.randomBytes(64).toString("hex"),
  };

  const user = await UserModel.create(data);

  const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:8080/api/auth/verifierEmail/${data.ValidateToken}">validation</a></h2>`;
  const subject = "Email Validation";
  sendEmail(data.email, data.ValidateToken, subject, url);

  if (user) {
    // res.status(201).send('user created successufly')
    res.status(201).json({
      user,
      mess: "User create successfuly Please check your email for validation",
    });
  } else {
    res.status(400).send("somthing is wrong");
  }
});

/**
 * methode => post
 * url => api/auth/forgetPassword
 * access => public
 */
const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send("Please add your Email");
  }
  const user = await UserModel.findOne({ where: { email } });

  if (!user) {
    return res.status(400).send("User dose not exist");
  }

  const token = genToken(user.id_user);
  console.log(token);

  const subject = "Reset Password";
  const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:3000/resetPassword/${token}">Reset Your Password</a></h2>`;
  sendEmail(user.email, token, subject, url);

  res
    .status(200)
    .json({ mess: "Re-send the password, please check your email" });
});

/**
 * methode => post
 * url => api/auth/resetPassword
 * access => public
 */
const resetPassword = asyncHandler(async (req, res) => {
  const { password, password2 } = req.body;
  if (!password || !password2) {
    res.status(400).send("please Enter New password");
  } else if (password != password2) {
    res.status(400).send("Password not match");
  }
  const token = req.params.token;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const verifierToken = await jwt.verify(token, process.env.JWT_SECRET);
  console.log(verifierToken);
  await UserModel.update(
    { password: hashPassword },
    { where: { id_user: verifierToken.id } }
  );
  res.status(200).json({ mess: "password has update successfuly" });
});

/**
 * methode => get
 * url => api/auth/verifierEmail/:token
 * access => public
 */

const verifierEmail = asyncHandler(async (req, res) => {
  const token = req.params.token;
  const user = await UserModel.findOne({ where: { ValidateToken: token } });

  if (user) {
    user.Status = true;
    user.ValidateToken = null;
    await user.save();
    res.status(201).send("Validation Saccssefuly");
  } else {
    throw new Error("somthing is wrong");
  }
});

/**
 * methode => post
 * url => api/auth/logout
 * access => public
 */
const logout = asyncHandler(async (req, res) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    const error = new Error("Invalid token");
    error.status = 400;
  }
  res
    .clearCookie("access_token", { httpOnly: true })
    .localStorage.clear()
    .status(200)
    .json({
      success: true,
    });
});

module.exports = {
  login,
  register,
  forgetPassword,
  resetPassword,
  verifierEmail,
  logout,
};
