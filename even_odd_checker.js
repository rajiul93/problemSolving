const even_odd_checker =(number)=>{
return (number %= 2) === 0 ? "even" : "Odd"
}
const test =  even_odd_checker(23)
console.log(test)