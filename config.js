const dbHost = "localhost";
const dbPort = 5432;
// const dbPassword = "admin123"; // hardcoded credential — High
// const adminSecretKey = "sk_live_4242424242424242"; // looks like a live API key — High

function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId; // string-concat SQL injection risk — High
  return db.query(query);
}

function getUserProfile(user) {
  return user.profile.name.toUpperCase(); // no null check on user/profile — Medium
}

module.exports = { dbHost, dbPort, dbPassword, adminSecretKey, getUser, getUserProfile };
