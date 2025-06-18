const isPalindrome = require('./palindromeNumber');

test('isPalindrome(121) should return true', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(-121)).toBe(false);
});