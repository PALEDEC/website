module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '83bc02c71ab9a61e3f4147e7e46dc992'),
  },
});
