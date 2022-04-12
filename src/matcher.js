/**
 * Matches a given text with a specified pattern.
 * Uses KMP algorithm when the specified pattern
 * is not too long, i.e. consists of more than
 * 50 characters or longer than half of the text,
 * and uses BM algorith when the specified pattern
 * is considerably long.
 * @param {string} text     text to match with a pattern
 * @param {string} pattern  pattern to search within the text
 * @return {number} the first index where the pattern is
 *                  found in the text, or -1 if the pattern
 *                  is not found
 */
function match(text, pattern) {
  if (pattern.length > 50 || pattern.length > text.length / 2) {
    return bmMatch(text, pattern);
  } else {
    return kmpMatch(text, pattern);
  }
}

/**
 * Matches a given text with a specified pattern
 * using Knuth-Morris-Pratt algorithm.
 * @param {string} text     text to match with a pattern
 * @param {string} pattern  pattern to search within the text
 * @return {number} the first index where the pattern is
 *                  found in the text, or -1 if the pattern
 *                  is not found
 */
function kmpMatch(text, pattern) {
  let n = text.length;
  let m = pattern.length;
  let border = calcKmpBorder(pattern);

  let i = 0;
  let j = 0;

  while (i < n) {
    if (text[i] == pattern[j]) {
      if (j == m - 1) {
        return i - m + 1;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = border[j - 1];
    } else {
      i++;
    }
  }
  return -1;
}

/**
 * Calculates the value of KMP border function
 * for a given string pattern.
 * @param {string} string string to calculate the KMP
 *                        border function value of
 * @returns an array of KMP border function values
 *          for the given string at all indices
 */
function calcKmpBorder(string) {
  let border = new Array(string.length);
  border[0] = 0;

  let m = string.length;
  let j = 0;
  let i = 1;

  while (i < m) {
    if (string[j] == string[i]) {
      border[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = border[j - 1];
    } else {
      border[i] = 0;
      i++;
    }
  }

  return border;
}

/**
 * Matches a given text with a specified pattern
 * using Boyer-Moore algorithm.
 * @param {string} text     text to match with a pattern
 * @param {string} pattern  pattern to search within the text
 * @return {number} the first index where the pattern is
 *                  found in the text, or -1 if the pattern
 *                  is not found
 */
function bmMatch(text, pattern) {
  let lastCharIndices = lastIndices(pattern);

  let n = text.length;
  let m = pattern.length;
  let i = m - 1;
  let j = m - 1;

  if (i > n - 1) {
    return -1;
  }

  do {
    if (text[i] == pattern[j]) {
      if (j == 0) {
        return i;
      } else {
        i--;
        j--;
      }
    } else {
      let lastIndex = lastCharIndices[text[i]];
      lastIndex = lastIndex == undefined ? -1 : lastIndex;
      i = i + m - Math.min(j, 1 + lastIndex);
      j = m - 1;
    }
  } while (i <= n - 1);

  return -1;
}

/**
 * Calculates the last index of occurrences of
 * every occuring character in a given string.
 * @param {string} string string to calculate the last index
 *                        of occurrences of its consisting
 *                        characters
 * @returns the last index of occurrences of all
 *          consisting characters of the given string,
 *          within the given string
 */
function lastIndices(string) {
  let lastIndices = {};

  for (let i = 0; i < string.length; i++) {
    lastIndices[string[i]] = i;
  }

  return lastIndices;
}

/**
 * Calculates the levenshtein distance of two
 * given strings.
 * @param {string} string1  the first string
 * @param {string} string2  the second string
 * @return {number} levenshtein distance of the
 *                  specified strings
 *
 * @see {@link https://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_full_matrix}
 */
function levenshteinDistance(string1, string2) {
  if (string1.length < string2.length) {
    return levenshteinDistance(string2, string1);
  }

  let v0 = [];
  let v1 = new Array(string2.length + 1);

  for (let i = 0; i <= string2.length; i++) {
    v0.push(i);
  }

  for (let i = 0; i < string1.length; i++) {
    v1[0] = i + 1;

    for (let j = 0; j < string2.length; j++) {
      let deletionCost = v0[j + 1] + 1;
      let insertionCost = v1[j] + 1;
      let substitutionCost = string1[i] == string2[j] ? v0[j] : v0[j] + 1;
      v1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
    }

    let v = v0;
    v0 = v1;
    v1 = v;
  }

  return v0[string2.length];
}

module.exports = { match, kmpMatch, bmMatch, levenshteinDistance };
