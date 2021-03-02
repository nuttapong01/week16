let zodiac = prompt("Please enter year of birth: ");
let year= parseInt(zodiac);
function myZodiac(year,ily){
    const name = {
        name1 : 'Rat',
        name2 : 'Oxen',
    }
    switch(year){
        case 2020: case 2018: case 1996: case 1984: case 1972:
            alert(`${year} is ${name.name1}Rat ZODIAC SIGNS ${ily}`);
            console.log(`${year} is ${name.name1} Rat ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is ${name.name1} Rat ZODIAC SIGNS ${ily}`);
            break;
        case 2021: case 2019: case 1997: case 1985: case 1973:
            alert(`${year} is ${name.name2} Oxen ZODIAC SIGNS ${ily}`);
            console.log(`${year} is ${name.name2} Oxen ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is  ${name.name2} Oxen ZODIAC SIGNS ${ily}`);
            break;
        case 2022: case 2020: case 1998: case 1986: case 1974:
            alert(`${year} is Tiger ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Tiger ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Tiger ZODIAC SIGNS ${ily}`);
            break;
        case 2023: case 2011: case 1999: case 1987: case 1975: 
            alert(`${year} is Rabbit ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Rabbit ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Rabbit ZODIAC SIGNS ${ily}`);
            break;
        case 2024: case 2012: case 2000: case 1988: case 1976:
            alert(`${year} is Dragon ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Dragon ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Dragon ZODIAC SIGNS ${ily}`);
            break;
        case 2025: case 2013: case 2001: case 1989: case 1977:
            alert(`${year} is Snake ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Snake ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Snake ZODIAC SIGNS ${ily}`);
            break;
        case 2026: case 2014: case 2002: case 1990: case 1978:
            alert(`${year} is Horse ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Horse ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Horse ZODIAC SIGNS ${ily}`);
            break;
        case 2027: case 2015: case 2003: case 1991: case 1979:
            alert(`${year} is Sheep ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Sheep ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Sheep ZODIAC SIGNS ${ily}`);
            break;
        case 2028: case 2016: case 2004: case 1992: case 1980:
            alert(`${year} is Monkey ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Monkey ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Monkey ZODIAC SIGNS ${ily}`);
            break;
        case 2029: case 2017: case 2005: case 1993: case 1981:
            alert(`${year} is Rooster ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Rooster ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Rooster ZODIAC SIGNS ${ily}`);
            break;
        case 2030: case 2018: case 2006: case 1997: case 1982:
            alert(`${year} is Dog ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is Dog ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is Dog ZODIAC SIGNS ${ily}`);
            break;
        case 2031: case 2019: case 2007: case 1998: case 1983:
            alert(`${year} is Pig ZODIAC SIGNS ${ily}`); 
            console.log(`${year} is  Pig ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is PigZODIAC SIGNS ${ily}`);
            break;
    
        default:
            alert(`${year} is ERROR ZODIAC SIGNS ${ily}`);
            console.log(`${year} is ERROR ZODIAC SIGNS ${ily}`)
            document.getElementById("hContent").innerHTML= (`${year} is ERROR ZODIAC SIGNS ${ily}`);
    }
}
myZodiac(year,"I Love You")

// Function in javascript(ES6)
// 1.Declaration Function
// let data1 = prompt("Enter any value1: ");
// let data2 = prompt("Enter any value2: ");
// let cdata1 = parseInt(data1);
// let cdata2 = parseInt(data2);
// function myZodiac(a,b,liy)// formal parameter
// {
//     let z = a + b;
//     console.log(`${z} = ${a} + ${b} ${liy}`);
//     document.getElementById("hContent").innerHTML=(`${z} = ${a} + ${b} ${liy}`);
// }

// myZodiac(cdata1,cdata2,"I Love You");// argument parameter(Active parameter)