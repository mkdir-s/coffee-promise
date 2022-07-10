const family = [
    {member: 'mother', id: 111, coffee: 'Latte'},
    {member: 'father', id: 222, coffee: 'Espresso'},
    {member: 'son', id: 333, coffee: 'Cappucino'},
]

const getCofffe = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            const coffee = list.find(res => res.title === member.coffee);
            return {
                ...member,
                coffee
            }
        })
}

const getFamilyMember = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            if(member) {
                resolve(member);
            } else {
                reject(Error('Член семьи не найден!'));
            }
        }, 1500);
    })
}

getFamilyMember(111)
    .then(data => getCofffe(data))
    .then(newMember => {
    console.log(newMember);
}).catch(err => {
    console.error(err);
})