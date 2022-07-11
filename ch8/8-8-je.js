/**
 * 8.8 반복문을 파이프라인으로 바꾸기
 */
function getLines (input) {
  return input.split('\n');
}
function find (lines, country) {
  const result = [];
  for (const line of lines.slice(1).filter((item)=>!!item)) {
    const record = line.split(',');
    const [_city, _country, _phone] = record;
    if (_country.trim() === country) {
      result.push({ city: _city.trim(), phone: _phone.trim() });
    }
  }
  return result;
}
export function acquireData(input) {
  const lines = getLines(input);
  return find(lines, 'India');
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
