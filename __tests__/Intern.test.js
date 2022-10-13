const { Intern } = require('../lib/Intern');

//create a new intern
test('create a new intern', () => {
    const intern = new Intern('John Sheridan', 282, 'john@email.com', 'Longwood');
    expect(intern.school).toEqual(expect.any(String));
});

//get the school for intern
test('get intern school', () => {
    const intern = new Intern('John Sheridan', 282, 'john@email.com', 'Longwood');
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

//get role
test('get role', () => {
    const intern = new Intern('John Sheridan', 282, 'john@email.com', 'Longwood');
    expect(intern.getRole()).toEqual("Intern");
});