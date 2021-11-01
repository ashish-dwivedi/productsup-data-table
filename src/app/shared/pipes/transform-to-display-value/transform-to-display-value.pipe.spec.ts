import { async } from '@angular/core/testing';
import { TransformToDisplayValuePipe } from './transform-to-display-value.pipe';

describe('TransformToDisplayValuePipe', () => {
  let pipe: TransformToDisplayValuePipe;

  beforeEach(async(() => {
    pipe = new TransformToDisplayValuePipe();
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string when no input string is provided', () => {
    expect(pipe.transform()).toEqual('');
  });

  it('should only replace _ in the input strings with space when no value is provided to charactersToReplace argument', () => {
    const input = 'test_input.second_part';
    expect(pipe.transform(input)).toEqual('test input.second part');
  });

  it('should replace all the characters provided as arguments to the pipe as charactersToReplace and should not fallback to _', () => {
    const input = 'test_input.second_part:third.part,fourth_part';
    expect(pipe.transform(input, [':', ',', '.'])).toEqual('test_input second_part third part fourth_part');
    expect(pipe.transform(input, [':', ',', '.', '_'])).toEqual('test input second part third part fourth part');
  });
});
