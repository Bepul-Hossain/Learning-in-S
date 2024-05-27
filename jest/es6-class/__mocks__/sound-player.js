// Import this named export into your test file:
const __mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return { playSoundFile: __mockPlaySoundFile };
});

mock.__mockPlaySoundFile = __mockPlaySoundFile;
module.exports = mock;