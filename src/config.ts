import 'dotenv/config.js';

const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = process.env.NODE_ENV === 'production';

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 1234;

const protocol = process.env.PROTOCOL || 'http';
const host = process.env.HOST || `lvh.me:${port}`;

const config = {
  isDevelopment,
  isProduction,

  hostname,
  port,

  protocol,
  host,
};

export default config;
