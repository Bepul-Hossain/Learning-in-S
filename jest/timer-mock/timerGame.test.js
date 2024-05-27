jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

// test('waits 1 second before ending the game', () => {
//     const timerGame = require('./timerGame');
//     timerGame();

//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
// });

test('calls the callback after 1 second', () => {
    const timerGame = require('./timerGame');
    const callback = jest.fn();
  
    timerGame(callback);
  
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toHaveBeenCalled();
  
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
  
    // Now our callback should have been called!
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });