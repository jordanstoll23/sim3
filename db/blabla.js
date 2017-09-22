const { Pool, Client } = require('pg')
const connectionString = 'postgres://fzfmpaihtrclff:80af6da0d757c2e842873730df48d33e39de480a882e3bab093df5323c19e6a6@ec2-54-163-233-201.compute-1.amazonaws.com:5432/d32cqhnter2tpf?ssl=true'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})