const emails = ["alice@example.com", "bob@example.com", "charlie@example.com", "bob@example.com"];

function findDuplicates(data) {
  const seen = new Set();
  const duplicates = new Set();
  data.forEach(item => (seen.has(item) ? duplicates.add(item) : seen.add(item)));
  return Array.from(duplicates);
}

console.log(findDuplicates(emails));