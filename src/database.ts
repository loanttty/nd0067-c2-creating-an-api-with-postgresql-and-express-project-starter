import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_DEV_USER,
    POSTGRES_TEST_USER,
    POSTGRES_PASSWORD,
    ENV
} = process.env 

let client : Pool = new Pool()
console.log(ENV)

if(ENV === 'dev') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_DEV_USER,
    password: POSTGRES_PASSWORD,
  })
}

if(ENV === 'test') {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_TEST_USER,
    password: POSTGRES_PASSWORD,
  })
}

export default client
