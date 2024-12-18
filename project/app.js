function averageEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) return 0;  // To avoid division by zero
  const sumOfEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);
  return sumOfEvenNumbers / evenNumbers.length;
}
function longestWord(words) {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}
function averagePages(books) {
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  return totalPages / books.length;
}
function stringFrequency(strings) {
  return strings.reduce((freq, str) => {
    freq[str] = (freq[str] || 0) + 1;
    return freq;
  }, {});
}
function countPeopleByCity(people) {
  return people.reduce((cityCount, person) => {
    cityCount[person.city] = (cityCount[person.city] || 0) + 1;
    return cityCount;
  }, {});
}
// 1. Average of even numbers
console.log(averageEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 4 (because 2, 4, 6 are even)

// 2. Longest word
console.log(longestWord(["apple", "banana", "kiwi", "orange"])); // Output: "banana"

// 3. Average pages of books
const books = [
  { title: "Book 1", author: "Author A", pages: 100 },
  { title: "Book 2", author: "Author B", pages: 200 },
  { title: "Book 3", author: "Author C", pages: 150 }
];
console.log(averagePages(books)); // Output: 150

// 4. String frequency
console.log(stringFrequency(["hello", "world", "hello", "world", "world"])); 
// Output: { hello: 2, world: 3 }

// 5. People count by city
const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" }
];
console.log(countPeopleByCity(people)); 
// Output: { "New York": 2, "Chicago": 1 }
