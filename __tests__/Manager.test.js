const { Manager } = require('../lib/Manager');

//create a new employee
test('create a new manager', () => {
    const manager = new Manager('John Sheridan', 282, 'john@email.com', 1234);

    // expect(employee.name).toBe('John Sheridan');
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//get office number of manager
test('get employee office number', () => {
    const manager = new Manager('John Sheridan', 282, 'john@email.com', 1234);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//get role of manager
test('get employee role', () => {
    const employee = new Manager('John Sheridan', 282, 'john@email.com', 1234);

    expect(employee.getRole()).toEqual("Manager");
});