function getUserName(user) {
  return user.profile.name.trim();
}

module.exports = { getUserName };
