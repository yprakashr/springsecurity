import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

describe('Calculator service', () => {
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    const calculator = new CalculatorService(loggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    const calculator = new CalculatorService(loggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
