describe('first test', () => {
  let variable: any;

  beforeEach(() => {
    variable = {};
  });

  it('it should return a value as true', () => {
    variable.a = false;

    variable.a = true;

    expect(variable.a).toBe(true);
  });
});
