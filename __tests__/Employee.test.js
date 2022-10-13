const Employee = require('../lib/Employee');

//create a new employee
test('create a new employee', () => {
    const employee = new Employee('John Sheridan', 282, 'john@email.com');

    expect(employee.name).toBe('John Sheridan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//get name of employee
test('get employee name', () => {
    const employee = new Employee('John Sheridan', 282, 'john@email.com');

    expect(employee.getName()).toBe(employee.name);
});

//get id of employee
test('get employee id', () => {
    const employee = new Employee('John Sheridan', 282, 'john@email.com');

    expect(employee.getId()).toBe(employee.id);
});

//get email of employee
test('get employee email', () => {
    const employee = new Employee('John Sheridan', 282, 'john@email.com');

    expect(employee.getEmail()).toBe(employee.email);
});

//get name of employee
test('get employee role', () => {
    const employee = new Employee('John Sheridan', 282, 'john@email.com');

    expect(employee.getRole()).toEqual("Employee");
});