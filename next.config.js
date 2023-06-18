module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    NEXT_PUBLIC_DB_DRIVER: process.env.NEXT_PUBLIC_DB_DRIVER,
    NEXT_PUBLIC_DB_HOST: process.env.NEXT_PUBLIC_DB_HOST,
    NEXT_PUBLIC_DB_USERNAME: process.env.NEXT_PUBLIC_DB_USERNAME,
    NEXT_PUBLIC_DB_PASSWORD: process.env.NEXT_PUBLIC_DB_PASSWORD,
    NEXT_PUBLIC_DB_DATABASE: process.env.NEXT_PUBLIC_DB_DATABASE,
    NEXT_PUBLIC_DB_PORT: process.env.NEXT_PUBLIC_DB_PORT,
  },
};
