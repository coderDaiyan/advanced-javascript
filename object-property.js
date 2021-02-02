const students = [
    {id: 21, name: 'Freelancer setu'}, 
    {id: 31, name: 'Jamal Uddin'}, 
    {id: 41, name: 'Jhankar Bhai'}, 
    {id: 51, name: 'Deepjol'}, 
    {id: 61, name: 'Sumit dada'}, 
]

// const newArray = []
// for (let i = 0; i < students.length; i++){
//     const element = students[i]
//     newArray.push(element.name)
// }
// console.log(newArray);

// const names = students.map(s => s.name)
// const id = students.map(s => s.id)
const bigger = students.filter( s => s.id > 40 )
const bigger1 = students.find(s => s.id > 40)
console.log(bigger);
console.log(bigger1);