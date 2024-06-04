const fs = require('fs');

// Load the current dependabot.yml file
const configPath = '.github/dependabot.yml';
let config = fs.readFileSync(configPath, 'utf8');

// Logic to update the dependabot.yml configuration
// For example, update the schedule interval to daily
config = config.replace('interval: "weekly"', 'interval: "daily"');

// Save the updated configuration
fs.writeFileSync(configPath, config, 'utf8');

console.log('Dependabot configuration updated');
