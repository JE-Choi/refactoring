/**
 * 8.7 반복문 쪼개기
 */
export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${getTotalSalary()}, totalSalary: ${getYoungestAge()}`;

  function getTotalSalary () {
    return people.reduce((prev, curr) => prev.salary + curr.salary, 0);
  }

  function getYoungestAge () {
    return Math.min(...people.map((p)=>p.age));
  }
}
