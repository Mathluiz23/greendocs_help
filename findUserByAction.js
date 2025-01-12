const users = [
    { id: 1, name: "Alice", actions: ["login", "purchase"] },
    { id: 2, name: "Bob", actions: ["login"] },
    { id: 3, name: "Charlie", actions: ["purchase", "logout"] },
  ];
  
  function findUsersByAction(action) {
    return users.filter(user => user.actions.includes(action));
  }
  
console.log(findUsersByAction("purchase"));
  