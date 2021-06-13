module.exports = {
  apps : [{
    name: "backend",
    script: "yarn start backend",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
