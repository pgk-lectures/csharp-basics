import { mkdirSync, writeFileSync } from "node:fs";

const output = new URL("../assets/forms/csharp-01-04/", import.meta.url);
mkdirSync(output, { recursive: true });

const cards = {
  "01-hello": ["Console.WriteLine(\"Привет\");"],
  "02-score": ["int score = 0;", "score = 10;", "score = score + 5;"],
  "03-int-division": ["Console.WriteLine(10 / 3);"],
  "04-remainder": ["Console.WriteLine(10 % 3);"],
  "05-age-condition": ["int age = 18;", "", "if (age >= 18)", "{", "    Console.WriteLine(\"Да\");", "}", "else", "{", "    Console.WriteLine(\"Нет\");", "}"],
  "06-grade-condition": ["int score = 75;", "", "if (score >= 90)", "{", "    Console.WriteLine(\"5\");", "}", "else if (score >= 70)", "{", "    Console.WriteLine(\"4\");", "}", "else", "{", "    Console.WriteLine(\"3\");", "}"],
  "07-discount": ["int total = 3500;", "bool hasCard = false;", "int discount = 0;", "", "if (total >= 3000 && hasCard)", "{", "    discount = 15;", "}", "else if (total >= 3000 || hasCard)", "{", "    discount = 5;", "}"],
  "08-for-three": ["for (int i = 1; i <= 3; i++)", "{", "    Console.WriteLine(i);", "}"],
  "09-for-zero": ["for (int i = 0; i < 3; i++)", "{", "    Console.WriteLine(i);", "}"],
  "10-for-sum": ["int sum = 0;", "", "for (int i = 1; i <= 4; i++)", "{", "    sum += i;", "}"],
  "11-while": ["int number = 1;", "", "while (number < 4)", "{", "    number++;", "}"],
  "12-foreach": ["int[] numbers = { 2, 4, 6 };", "int sum = 0;", "", "foreach (int number in numbers)", "{", "    sum += number;", "}"],
  "13-add-function": ["int Add(int a, int b)", "{", "    return a + b;", "}", "", "Console.WriteLine(Add(4, 7));"],
  "14-total-function": ["double CalculateTotal(double price, int quantity)", "{", "    return price * quantity;", "}", "", "double total = CalculateTotal(1250, 2);"],
};

const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

for (const [name, lines] of Object.entries(cards)) {
  const height = 102 + lines.length * 42;
  const text = lines.map((line, index) => `<text x="76" y="${92 + index * 42}" class="code">${escape(line || " ")}</text>`).join("\n");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="${height}" viewBox="0 0 1400 ${height}">
  <rect width="1400" height="${height}" rx="22" fill="#101828"/>
  <circle cx="48" cy="45" r="10" fill="#ff605c"/><circle cx="80" cy="45" r="10" fill="#ffbd44"/><circle cx="112" cy="45" r="10" fill="#00ca4e"/>
  <line x1="0" y1="72" x2="1400" y2="72" stroke="#25334a" stroke-width="2"/>
  <style>.code { font: 30px Menlo, Monaco, Consolas, monospace; fill: #e5efff; white-space: pre; }</style>
  ${text}
</svg>`;
  writeFileSync(new URL(`${name}.svg`, output), svg);
}
