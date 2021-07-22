let person=[
    {
        name: 'Mateo',
        age: '30',
        work: 'it'
    },
    {
        name:'Yelena',
        age: '23',
        work: 'teacher'
    },
    {
        name:'Cati',
        age:'34',
        work:'dog walker'
    },
    {
        name:'Yelena',
        age: '23',
        work: 'teacher'
    },
    {
        name:'Yelena',
        age: '23',
        work: 'teacher'
    }
];

const info=document.querySelector('#info')

let details= person.map(function(item){
    return '<div>'+ item.name + ' is '+item.age+' years old and it\'s working as a '+item.work+'.</div>';
    
});

info.innerHTML=details.join('\n');

