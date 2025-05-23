let cities = [];

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        cities.push('Vienna')
        cities.push('San Juan')
        resolve();
    }, 100)
}

function clearCityDatabase() {
    return new Promise((resolve, reject) => {
        cities = [];
        resolve();
    }, 100)
}
function isCity(name) {
    return cities.includes(name)
}

beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});
