import { LoggerService } from './logger.service';

describe('logger service()', () => {
  it('should not have any messages at starting', () => {
    const service = new LoggerService();

    let result = service.messages.length;
    expect(result).toBe(0);
  });
});
