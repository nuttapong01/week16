let zodiac = prompt("Please enter year of birth: ");
let year= parseInt(zodiac);
switch(year){
    case 2020: case 2018: case 1996: case 1984: case 1972:
        alert(`${year} is Rat ZODIAC SIGNS`);
        console.log(`${year} is Rat ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Rat ZODIAC SIGNS`);
        break;
    case 2021: case 2019: case 1997: case 1985: case 1973:
        alert(`${year} is Oxen ZODIAC SIGNS`);
        console.log(`${year} is Oxen ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Oxen ZODIAC SIGNS`);
        break;
    case 2022: case 2020: case 1998: case 1986: case 1974:
        alert(`${year} is Tiger ZODIAC SIGNS`); 
        console.log(`${year} is Tiger ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Tiger ZODIAC SIGNS`);
        break;
    case 2023: case 2011: case 1999: case 1987: case 1975: 
        alert(`${year} is Rabbit ZODIAC SIGNS`); 
        console.log(`${year} is Rabbit ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Rabbit ZODIAC SIGNS`);
        break;
    case 2024: case 2012: case 2000: case 1988: case 1976:
        alert(`${year} is Dragon ZODIAC SIGNS`); 
        console.log(`${year} is Dragon ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Dragon ZODIAC SIGNS`);
        break;
    case 2025: case 2013: case 2001: case 1989: case 1977:
        alert(`${year} is Snake ZODIAC SIGNS`); 
        console.log(`${year} is Snake ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Snake ZODIAC SIGNS`);
        break;
    case 2026: case 2014: case 2002: case 1990: case 1978:
        alert(`${year} is Horse ZODIAC SIGNS`); 
        console.log(`${year} is Horse ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Horse ZODIAC SIGNS`);
        break;
    case 2027: case 2015: case 2003: case 1991: case 1979:
        alert(`${year} is Sheep ZODIAC SIGNS`); 
        console.log(`${year} is Sheep ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Sheep ZODIAC SIGNS`);
        break;
    case 2028: case 2016: case 2004: case 1992: case 1980:
        alert(`${year} is Monkey ZODIAC SIGNS`); 
        console.log(`${year} is Monkey ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Monkey ZODIAC SIGNS`);
        break;
    case 2029: case 2017: case 2005: case 1993: case 1981:
        alert(`${year} is Rooster ZODIAC SIGNS`); 
        console.log(`${year} is Rooster ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Rooster ZODIAC SIGNS`);
        break;
    case 2030: case 2018: case 2006: case 1997: case 1982:
        alert(`${year} is Dog ZODIAC SIGNS`); 
        console.log(`${year} is Dog ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is Dog ZODIAC SIGNS`);
        break;
    case 2031: case 2019: case 2007: case 1998: case 1983:
        alert(`${year} is Pig ZODIAC SIGNS`); 
        console.log(`${year} is  Pig ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is PigZODIAC SIGNS`);
        break;

    default:
        alert(`${year} is ERROR ZODIAC SIGNS`);
        console.log(`${year} is ERROR ZODIAC SIGNS`)
        document.getElementById("hContent").innerHTML= (`${year} is ERROR ZODIAC SIGNS`);
}