const { Engineer } = require('../lib/Engineer');

//create a new engineer
test('create a new engineer', () => {
    const engineer = new Engineer('John Sheridan', 282, 'john@email.com', 'github');
    expect(engineer.github).toEqual(expect.any(String));
});

//get the github for new engineer
test('get engineer github', () => {
    const engineer = new Engineer('John Sheridan', 282, 'john@email.com', 'github');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//get role
test('get role', () => {
    const engineer = new Engineer('John Sheridan', 282, 'john@email.com', 'github');
    expect(engineer.getRole()).toEqual("Engineer");
});