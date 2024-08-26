import { CurrencyNoDecimalPipe } from './currency-no-decimal.pipe';

describe('CurrencyNoDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyNoDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
