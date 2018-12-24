
const triggers =
[
  {
    key: 15,
    val: 'FizzBuzz'
  },
  {
    key: 3,
    val: 'Fizz'
  },
  {
    key: 5,
    val: 'Buzz'
  }
];

const checker = (i) => {
  const finder = triggers.find((element) => i % element.key === 0);
  if (finder) {
    return finder.val;
  }
  return i;
};

const generateList = () => {
  let arr = [];
  for (let i = 1; i < 100; i++) {
    arr.push(checker(i));
  }
  return arr;
};

const list = generateList();
console.log(list);

module.exports = { checker, generateList };
