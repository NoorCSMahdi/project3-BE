const UserType = [
    { id: 1, UserType_name: "Admin" },
    { id: 2, UserType_name: "SubAdmin" },
    { id: 3, UserType_name: "User" },
  ];

  module.exports = {
    getAll: function () {
      return UserType;
    }
  };