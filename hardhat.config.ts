// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
require("@nomicfoundation/hardhat-toolbox"); //CommonJs env

require("dotenv").config(); // For demonstration purposes only, not recommended

const config = {
  solidity: "0.8.24",
  networks: {
    localhost: {}
  }
};

/* export default config; */
module.exports = config; //CommonJS env

/*
Accessing variables from .env file without copying them directly here...
Hardhat offers a built-in system for managing environment variables, which is the preferred method.

Here's how to use it:

Create a .env file: Place your environment variables in a .env file at the root of your project.
Use Hardhat's Configuration Variables: Access these variables using the hre object within your Hardhat tasks.
*/