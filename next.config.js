require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");


// Define all environment variables
const environmentVars = Object.keys(process.env).reduce((acc, curr) => {
    if (process.env.NODE_ENV === 'development' && curr.includes('NEXT_DEV_')) {
      acc[`${curr.replace('NEXT_DEV_', '')}`] = process.env[curr];
    } else if (process.env.NODE_ENV === 'production' && curr.includes('NEXT_PROD_')) {
      acc[`${curr.replace('NEXT_PROD_', '')}`] = process.env[curr];
    }
    return acc;
  }, {});

  
module.exports = withCSS({
  env: environmentVars,
});