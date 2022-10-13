const text = 'Acest string contine un text';

// at
const index = 11;
console.log(text.at(index));

// charAt
const index2 = 9;
const charAtIndex = text.charAt(index2);
console.log(charAtIndex);

// charCodeAt (valoarea convertita in numar intreg reprezentand valoarea in UTF-16 a caracterului)
const charCodeAt = text.charCodeAt(index2);
console.log(charCodeAt);

// concat
const firstName = 'Andrei';
const lastName = 'Popescu';

const fullName = firstName.concat(' ', lastName);
console.log(fullName);

// endsWith
const str = 'Imi place Web Development-ul si Web Design-ul!';
const endsWith = 'ul!';

console.log(str.endsWith(endsWith));

// includes
console.log(str.includes('Web'));

// indexOf
console.log(str.indexOf('Web'));
console.log(str.indexOf('web'));

if (str.indexOf('web') >= 0) {
    console.log('Include Web');
} else {
    console.log('Cuvantul sau caracterul nu a fost gasit!');
}

// lastIndexOf
console.log(str.lastIndexOf('Web'));

// padEnd / padStart
const str2 = 'Imi place Web Development-ul si';
console.log(str2.padEnd(34, '.'));
console.log(str2.padEnd(34));
console.log(str2.padStart(34, '*'));

// repeat
const examen = 'Vreau sa iau examenul de Web Development!';
console.log(examen.repeat(10));

// replace
const str3 = 'Imi place Web Development-ul!';
console.log(str3.replace('Development-ul', 'Design-ul'));

console.log(str.replace(' Web ', ' '));

// replaceAll
console.log(str.replaceAll(' Web ', ' '));

// slice
console.log(str3.slice(10, 25));
console.log(str3.slice());

// split
const grades = '9/8.50/7.30/10/5.40';
const gradesArray = grades.split('/');
console.log(grades.split('/'));
console.log(gradesArray[3]);

console.log(str2.split(' '));

// startsWith
console.log(str3.startsWith('Imi'));
console.log(str3.startsWith('place', 4));

// substring
console.log(examen.substring(13));
console.log(examen.substring(0));

// toLowerCase
console.log(str3.toLowerCase());

// toUpperCase
console.log(str3.toUpperCase());

// case insensitive search
console.log(str.includes('web'));
console.log(str.toLowerCase().includes('web'));

// trim
const stringThatNeedsTrimming = '      Hello World!              ';
console.log(stringThatNeedsTrimming);
console.log(stringThatNeedsTrimming.trim());

// trimStart / trimEnd
console.log(stringThatNeedsTrimming.trimStart());
console.log(stringThatNeedsTrimming.trimEnd());

// toString
const stringObject = new String('Imi place Web Development-ul!');
console.log(stringObject);
console.log(typeof stringObject);
console.log(stringObject.toString());
console.log(typeof stringObject.toString());
