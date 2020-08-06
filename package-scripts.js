const ultra = require('ultra-runner')
//const oao = require('oao')
const bolt = require('bolt')
const ntl = require('ntl')


module.exports = {
  scripts: {
    default: 'nps',
    bootstrap: 'ultra --pretty --raw oao bootstrap',
    clean: 'ultra --pretty oao clean',
    status: 'ultra --pretty oao status',
    docs: 'ultra --pretty bolt doc',
    check: 'ultra --pretty bolt check',
    build: 'ultra --pretty bolt build',
    monit: 'ultra --monitor',
    info: 'ultra --info',
    tasks: 'ntl -A -s Infinity --exclude tasks default'
  }
};
