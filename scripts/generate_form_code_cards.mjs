import { mkdirSync, writeFileSync } from "node:fs";

const output = new URL("../assets/forms/csharp-01-04-v2/", import.meta.url);
mkdirSync(output, { recursive: true });

const cards = {
  "01-hello": ["Что выведет этот код?", ["Console.WriteLine(\"Привет\");"]],
  "02-score": ["Что будет храниться в переменной score?", ["int score = 0;", "score = 10;", "score = score + 5;"]],
  "03-int-division": ["Что выведет этот код?", ["Console.WriteLine(10 / 3);"]],
  "04-remainder": ["Что выведет этот код?", ["Console.WriteLine(10 % 3);"]],
  "05-age-condition": ["Что выведет этот код?", ["int age = 18;", "", "if (age >= 18)", "{", "    Console.WriteLine(\"Да\");", "}", "else", "{", "    Console.WriteLine(\"Нет\");", "}"]],
  "06-grade-condition": ["Что выведет этот код?", ["int score = 75;", "", "if (score >= 90)", "{", "    Console.WriteLine(\"5\");", "}", "else if (score >= 70)", "{", "    Console.WriteLine(\"4\");", "}", "else", "{", "    Console.WriteLine(\"3\");", "}"]],
  "07-discount": ["Какое значение получит переменная discount?", ["int total = 3500;", "bool hasCard = false;", "int discount = 0;", "", "if (total >= 3000 && hasCard)", "{", "    discount = 15;", "}", "else if (total >= 3000 || hasCard)", "{", "    discount = 5;", "}"]],
  "08-for-three": ["Сколько раз выполнится тело цикла?", ["for (int i = 1; i <= 3; i++)", "{", "    Console.WriteLine(i);", "}"]],
  "09-for-zero": ["Что выведет цикл?", ["for (int i = 0; i < 3; i++)", "{", "    Console.WriteLine(i);", "}"]],
  "10-for-sum": ["Чему равно sum после выполнения кода?", ["int sum = 0;", "", "for (int i = 1; i <= 4; i++)", "{", "    sum += i;", "}"]],
  "11-while": ["Что будет в переменной number после выполнения кода?", ["int number = 1;", "", "while (number < 4)", "{", "    number++;", "}"]],
  "12-foreach": ["Чему равно sum после выполнения кода?", ["int[] numbers = { 2, 4, 6 };", "int sum = 0;", "", "foreach (int number in numbers)", "{", "    sum += number;", "}"]],
  "13-add-function": ["Что выведет этот код?", ["int Add(int a, int b)", "{", "    return a + b;", "}", "", "Console.WriteLine(Add(4, 7));"]],
  "14-total-function": ["Чему равно total после выполнения кода?", ["double CalculateTotal(double price, int quantity)", "{", "    return price * quantity;", "}", "", "double total = CalculateTotal(1250, 2);"]],
  "15-array-length": ["Чему равно grades.Length?", ["int[] grades = { 5, 4, 3, 5 };"]],
  "16-function-parameter": ["Как называется name в коде?", ["void PrintGreeting(string name)", "{", "    Console.WriteLine(name);", "}"]],
  "17-is-adult": ["Что вернёт функция при вызове IsAdult(17)?", ["bool IsAdult(int age)", "{", "    return age >= 18;", "}"]],
};

const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

for (const [name, [prompt, lines]] of Object.entries(cards)) {
  const height = 156 + lines.length * 42;
  const text = lines.map((line, index) => `<text x="76" y="${146 + index * 42}" class="code">${escape(line || " ")}</text>`).join("\n");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="${height}" viewBox="0 0 1400 ${height}">
  <rect width="1400" height="${height}" rx="22" fill="#101828"/>
  <circle cx="48" cy="45" r="10" fill="#ff605c"/><circle cx="80" cy="45" r="10" fill="#ffbd44"/><circle cx="112" cy="45" r="10" fill="#00ca4e"/>
  <line x1="0" y1="72" x2="1400" y2="72" stroke="#25334a" stroke-width="2"/>
  <text x="76" y="112" class="prompt">${escape(prompt)}</text>
  <style>.prompt { font: 700 26px Arial, sans-serif; fill: #f8fafc; } .code { font: 30px Menlo, Monaco, Consolas, monospace; fill: #e5efff; white-space: pre; }</style>
  ${text}
</svg>`;
  writeFileSync(new URL(`${name}.svg`, output), svg);
}
