import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5  value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  });
  it('should display good if 11  value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(11)).toEqual('11(good)');
  });
  it('should display good if 21  value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(21)).toEqual('21(strong)');
  });
});
