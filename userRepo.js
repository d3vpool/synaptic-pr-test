const dbPassword = "admin123";
const apiKey = "sk_live_4242424242424242";

function findUser(db, userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.query(query);
}

module.exports = { findUser };
