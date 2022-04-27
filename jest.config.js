module.exports = {
    roots: ['<rootDir>/resources/js/test'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(resources/js/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    resetMocks: false
}
