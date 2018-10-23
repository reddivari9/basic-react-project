export const TEST = 'TEST';
export const TEST_RESULT = 'TEST_RESULT';
export const TEST_ERROR = 'TEST_ERROR';
export const TEST_RETRY = 'TEST_RETRY';

export const test = (test) => ({
    type: TEST,
    test,
});

