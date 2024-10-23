let students = require("./data.json");

let getAllStudents = () => {
  return students;
};

let getFirstStudent = () => {
  return students[0];
};

let getLastStudent = () => {
  //1
  return students[students.length - 1];
};
// console.log(getLastStudent());

let getStudentById = (id) => {
  //2
  return students.find((student) => student.id === id);
};
// console.log(getStudentById(7));

let getStudentsByStage = (stage) => {
  //3
  return students.filter((student) => student.stage === stage);
};
// console.log(getStudentsByStage("Grade 9"));

let addStudent = (newStudent) => {
  //4
  return (students[students.length] = newStudent);
};
//  addStudent({ id: 21, name: "Alicon Tom" , stage: "Grade 10" , age: 16 }); 
// console.log(getAllStudents());



let removeStudentById = (id) => {
  //5
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].id == id) {
  //     students.splice(i, 1);
  //     break;
  //   }
  // }
  // return students;
  return students.filter((student) => student.id !== id);
};
// removeStudentById(19); 
// console.log(getAllStudents());

let updateStudentById = (id, updatedData) => {
  //6
    students = students.map(student => {
      if (student.id === id) {
        student.name = updatedData.name;
        student.age = updatedData.age;
        student.stage = updatedData.stage;
      }
      return student;
    });
    return students;
};
// updateStudentById(19, { name: "Ava King" , stage: "Grade 10" , age: 15 });
// console.log(getAllStudents());

let getAverageAge = () => {
  //7:
  let sum = 0, avg = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  avg = sum / students.length;

  return avg
};
// console.log(getAverageAge());

let getStudentsAboveAge = (age) => {
  //8
  return students.filter((student) => student.age > age);
};
// console.log(getStudentsAboveAge(15));

let getStudentsBelowAge = (age) => {
  //9
  return students.filter((student) => student.age < age);
};
// console.log(getStudentsBelowAge(15));

let getStudentByName = (name) => {
  //10
  return students.find((student) => student.name === name);
};
// console.log(getStudentByName("Grace Lee"));

let sortStudentsByName = () => {
  //11
  // var temp;
  // for (let i = 0; i < students.length - 1; i++) {
  //   for (let j = 0; j < students.length - 1 - i; j++) {
  //     if (students[j].name > students[j + 1].name) {
  //       temp = students[j];
  //       students[j] = students[j + 1];
  //       students[j + 1] = temp;
  //     }
  //   }
  // }
  // return students;
  return students.sort((a, b) => a.name.localeCompare(b.name));
};
// console.log(sortStudentsByName());

let sortStudentsByAge = () => {
  //12
  // var temp;
  // for (let i = 0; i < students.length - 1; i++) {
  //   for (let j = 0; j < students.length - 1 - i; j++) {
  //     if (students[j].age > students[j + 1].age) {
  //       temp = students[j];
  //       students[j] = students[j + 1];
  //       students[j + 1] = temp;
  //     }
  //   }
  // }
  // return students;
  return students.sort((a, b) => a.age - b.age);
};
// console.log(sortStudentsByAge());

let filterStudentsByAge = (age) => {
  //13
  return students.filter((student) => student.age === age);
};
// console.log(filterStudentsByAge(15));

let filterStudentsByStage = (stage) => {
  //14
  return students.filter((student) => student.stage === stage);
};
// console.log(filterStudentsByStage("Grade 10"));

let countStudents = () => {
  //15
  return students.length;
};
// console.log(countStudents());

let countStudentsByStage = (stage) => {
  //16
  return filterStudentsByStage(stage).length;
};
// console.log(countStudentsByStage("Grade 10"));

let incrementStudentAgeById = (id) => {
  //17
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].id == id) {
  //     students[i].age++;
  //     break;
  //   }
  // }
  // return students;
  return students.map((student) => {
    if (student.id === id) {
      return { ...student, age: student.age + 1 };
    }
    return student;
  });
};
// console.log(getStudentById(19));
// console.log(incrementStudentAgeById(19));
// console.log(getStudentById(19));

let decrementStudentAgeById = (id) => {
  //18
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].id == id) {
  //     students[i].age--;
  //     break;
  //   }
  // }
  // return students;
  return students.map((student) => {
    if (student.id === id) {
       return { ...student, age: student.age - 1 };
     }
     return student;
   });
};
// console.log(getStudentById(3));
// console.log(decrementStudentAgeById(3));
// console.log(getStudentById(3));

let getStudentsWithIdGreaterThan = (id) => {
  //19
  return students.filter((student) => student.id > id);
};
// console.log(getStudentsWithIdGreaterThan(10));

let getStudentsWithIdLessThan = (id) => {
  //20
  return students.filter((student) => student.id < id);
};
// console.log(getStudentsWithIdLessThan(10));

let getStudentsInRangeOfIds = (startId, endId) => {
  //21
  return students.filter((student) => student.id >= startId && student.id <= endId);
};
// console.log(getStudentsInRangeOfIds(5, 10));

let getTotalAgeOfStudents = () => {
  //22
  var sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return sum;
};
// console.log(getTotalAgeOfStudents());

let getAverageAgeByStage = (stage) => {
  //23
  var sum = 0, avg = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].stage === stage) {
      sum += students[i].age;
    }
  }
  avg = sum / countStudentsByStage(stage);
  return avg;
};
// console.log(getAverageAgeByStage("Grade 10"));

let getYoungestStudent = () => {
  //24
  var min = students[0].age;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < min) {
      min = students[i].age;
    }
  }
  return students.filter((student) => student.age === min);
};
// console.log(getYoungestStudent());

let getOldestStudent = () => {
  //25
  var max = students[0].age;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age > max) {
      max = students[i].age;
    }
  }
  return students.filter((student) => student.age === max);
};
// console.log(getOldestStudent());

let hasStudentWithName = (name) => {
  //26
  // var fullName, firstName;
  // for (let i = 0; i < students.length; i++) {
  //   fullName = students[i].name
  //   firstName = fullName.split(" ")[0];
  //   if (firstName === name || fullName === name) {
  //     return true;
  //   }
  // }
  // return false;
  return students.some((student) => student.name.includes(name));
};
// console.log(hasStudentWithName("Sophi"));

let getNamesOfAllStudents = () => {
  //27
  // var names = [];
  // for (let i = 0; i < students.length; i++) {
  //   names.push(students[i].name);
  // }
  // return names;
  return students.map((student) => student.name);
};
// console.log(getNamesOfAllStudents());


let getAllStudentIds = () => {
  //28
  // var ids = [];
  // for (let i = 0; i < students.length; i++) {
  //   ids.push(students[i].id);
  // }
  // return ids;
  return students.map((student) => student.id);
};
// console.log(getAllStudentIds());

let getAllStudentStages = () => {
  //29
  // var stages = [];
  // for (let i = 0; i < students.length; i++) {
  //   if (!stages.includes(students[i].stage)) {
  //     stages.push(students[i].stage);
  //   }
  // }
  // return stages;
  return students.map((student) => student.stage).filter((stage, index, array) => array.indexOf(stage) === index);
};
// console.log(getAllStudentStages());

let getStudentsWithNamesStartingWith = (letter) => {
  //30
  // var names = [];
  // letter = letter.toUpperCase();
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].name[0] === letter) {
  //     names.push(students[i]);
  //   }
  // }
  // return names;
  return students.filter((student) => student.name[0] === letter.toUpperCase());
};
// console.log(getStudentsWithNamesStartingWith("j"));


let getStudentsWithNamesEndingWith = (letter) => {
  //31
  // var names = [];
  // letter = letter.toLowerCase();
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].name[students[i].name.length - 1] === letter) {
  //     names.push(students[i]);
  //   }
  // }
  // return names;
  return students.filter((student) => student.name[student.name.length - 1] === letter.toLowerCase());
};
// console.log(getStudentsWithNamesEndingWith("n"));

let getStudentsWithNameLengthGreaterThan = (length) => {
  //32
  // var names = [];
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].name.length > length) {
  //     names.push(students[i]);
  //   }
  // }
  // return names;
  return students.filter((student) => student.name.length > length);
};
// console.log(getStudentsWithNameLengthGreaterThan(6));

let getStudentsWithNameLengthLessThan = (length) => {
  //33
  // var names = [];
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].name.length < length) {
  //     names.push(students[i]);
  //   }
  // }
  // return names;
  return students.filter((student) => student.name.length < length);
};
// console.log(getStudentsWithNameLengthLessThan(6));

let getAllStudentsSortedById = () => {
  //34
  // var temp;
  // for (let i = 0; i < students.length - 1; i++) {
  //   for (let j = 0; j < students.length - 1 - i; j++) {
  //     if (students[j].id > students[j + 1].id) {
  //       temp = students[j];
  //       students[j] = students[j + 1];
  //       students[j + 1] = temp;
  //     }
  //   }
  // }
  
  // return students;
  return students.sort((a, b) => a.id - b.id);
};
// console.log(getAllStudentsSortedById());

let reverseStudentList = () => {
  //35
  // var temp;
  // for (let i = 0; i < students.length / 2; i++) {
  //   temp = students[i];
  //   students[i] = students[students.length - 1 - i];
  //   students[students.length - 1 - i] = temp;
  // }
  // return students;
  return students.reverse();
};
// console.log(reverseStudentList());

let getRandomStudent = () => {
  //36
  var random = Math.floor(Math.random() * students.length);
  return students[random];
};
// console.log(getRandomStudent());

let removeStudentsAboveAge = (age) => {
  //37
  return students.filter(student => student.age < age);
};
// console.log(removeStudentsAboveAge(14));

let removeStudentsBelowAge = (age) => {
  //38
  return students.filter(student => student.age > age);
};
// console.log(removeStudentsBelowAge(14));

let getStudentsBetweenAges = (minAge, maxAge) => {
  //39
  return students.filter(student => student.age > minAge && student.age < maxAge);
};

let countStudentsAboveAge = (age) => {
  //40
  return students.filter(student => student.age > age).length;
};
// console.log(countStudentsAboveAge(14));

let countStudentsBelowAge = (age) => {
  //41
  return students.filter(student => student.age < age).length;
};
// console.log(countStudentsBelowAge(14));

let addMultipleStudents = (newStudents) => {
  //42
  students.push(...newStudents);
};
// addMultipleStudents([{ id: 22, name: "James Jhon", age: 15, stage: "Stage 2" }]);
// console.log(students);

let removeMultipleStudentsById = (ids) => {
  //43
  for (let i = 0; i < ids.length; i++) {
    students = students.filter(student => student.id !== ids[i]);
  }
  return students;
};
// console.log(removeMultipleStudentsById([1, 2]));

let updateMultipleStudentsById = (ids, updatedData) => {
  //44
  for (let i = 0; i < ids.length; i++) {
    students = students.map(student => {
      if (student.id === ids[i]) {
        student.name = updatedData.name;
        student.age = updatedData.age;
        student.stage = updatedData.stage;
      }
      return student;
    });
  }
  return students;
};
// console.log(updateMultipleStudentsById([1, 2], { name: "James Jhon", age: 15, stage: "Stage 2" }));

let isAllStudentsAboveAge = (age) => {
  //45
  return students.every(student => student.age > age);
};
// console.log(isAllStudentsAboveAge(14));

let isAllStudentsBelowAge = (age) => {
  //46
  return students.every(student => student.age < age);
};
// console.log(isAllStudentsBelowAge(14));

let hasStudentsInStage = (stage) => {
  //47
  return students.some(student => student.stage === stage);
};
// console.log(hasStudentsInStage("Stage 2"));

let getStudentNamesWithIds = (ids) => {
  //48
  return students.filter(student => ids.includes(student.id)).map(student => student.name);
};
// console.log(getStudentNamesWithIds([1, 2]));
