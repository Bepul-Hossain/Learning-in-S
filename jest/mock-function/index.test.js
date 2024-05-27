function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}


test('forEach mock function', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});


test('This ', () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log(myMock1.mock.instances);
    // > [ <a> ]

    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock1.bind(b);
    bound();
    console.log(myMock1.mock.contexts);
    // > [ <b> ]
})


test('Mock implementations', () => {
    const myMockFn = jest.fn(cb => cb(null, true));

    myMockFn((err, val) => console.log(val));
    // > true
})



test('mockImplementationOnce', () => {
    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
})


test('Return this', () => {
    const myObj = {
        myMethod: jest.fn().mockReturnThis(),
    };

    // is the same as

    const otherObj = {
        myMethod: jest.fn(function () {
            return this;
        }),
    };

    console.log(myObj.myMethod());
    console.log(otherObj.myMethod());
})