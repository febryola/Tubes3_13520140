const { expect } = require("chai");
const matcher = require("../src/backend/matcher");
const { describe, it } = require("mocha");

describe("matcher", () => {
    describe("kmpMatch", () => {
        it("should return -1 when pattern is longer", () => {
            let pattern = "a very long pattern to match";
            let string = "string to match";

            expect(matcher.kmpMatch(string, pattern)).equal(string.indexOf(pattern));
        });

        it("should return -1 when pattern does not match", () => {
            let pattern1 = "loren";
            let pattern2 = "ipp";
            let pattern3 = "sit  ";
            let string = "lorem ipsum dolor sit amet";

            expect(matcher.kmpMatch(string, pattern1)).to.equal(
                string.indexOf(pattern1)
            );
            expect(matcher.kmpMatch(string, pattern2)).to.equal(
                string.indexOf(pattern2)
            );
            expect(matcher.kmpMatch(string, pattern3)).to.equal(
                string.indexOf(pattern3)
            );
        });

        it("should return index when pattern does match", () => {
            let pattern1 = "ipsum";
            let pattern2 = "dol";
            let pattern3 = "it ";
            let string = "lorem ipsum dolor sit amet";

            expect(matcher.kmpMatch(string, pattern1)).to.equal(
                string.indexOf(pattern1)
            );
            expect(matcher.kmpMatch(string, pattern2)).to.equal(
                string.indexOf(pattern2)
            );
            expect(matcher.kmpMatch(string, pattern3)).to.equal(
                string.indexOf(pattern3)
            );
        });

        it("should return first index when pattern matches multiple substrings", () => {
            let pattern = "this";
            let string = "pattern should match this, but not this.";

            expect(matcher.kmpMatch(string, pattern)).to.equal(
                string.indexOf(pattern)
            );
        });

        it("should be able to match prefixes", () => {
            let pattern = "lorem";
            let string1 = "lorem ipsum dolor sit amet";
            let string2 = "lorem ";
            let string3 = "lorem";

            expect(matcher.kmpMatch(string1, pattern)).to.equal(
                string1.indexOf(pattern)
            );
            expect(matcher.kmpMatch(string2, pattern)).to.equal(
                string2.indexOf(pattern)
            );
            expect(matcher.kmpMatch(string3, pattern)).to.equal(
                string3.indexOf(pattern)
            );
        });

        it("should be able to match suffixes", () => {
            let pattern = "amet";
            let string1 = "lorem ipsum dolor sit amet";
            let string2 = " amet";
            let string3 = "amet";

            expect(matcher.kmpMatch(string1, pattern)).to.equal(
                string1.indexOf(pattern)
            );
            expect(matcher.kmpMatch(string2, pattern)).to.equal(
                string2.indexOf(pattern)
            );
            expect(matcher.kmpMatch(string3, pattern)).to.equal(
                string3.indexOf(pattern)
            );
        });
    });

    describe("bmMatch", () => {
        it("should return -1 when pattern is longer", () => {
            let pattern = "a very long pattern to match";
            let string = "string to match";

            expect(matcher.bmMatch(string, pattern)).equal(string.indexOf(pattern));
        });

        it("should return -1 when pattern does not match", () => {
            let pattern1 = "loren";
            let pattern2 = "ipp";
            let pattern3 = "sit  ";
            let string = "lorem ipsum dolor sit amet";

            expect(matcher.bmMatch(string, pattern1)).to.equal(
                string.indexOf(pattern1)
            );
            expect(matcher.bmMatch(string, pattern2)).to.equal(
                string.indexOf(pattern2)
            );
            expect(matcher.bmMatch(string, pattern3)).to.equal(
                string.indexOf(pattern3)
            );
        });

        it("should return index when pattern does match", () => {
            let pattern1 = "ipsum";
            let pattern2 = "dol";
            let pattern3 = "it ";
            let string = "lorem ipsum dolor sit amet";

            expect(matcher.bmMatch(string, pattern1)).to.equal(
                string.indexOf(pattern1)
            );
            expect(matcher.bmMatch(string, pattern2)).to.equal(
                string.indexOf(pattern2)
            );
            expect(matcher.bmMatch(string, pattern3)).to.equal(
                string.indexOf(pattern3)
            );
        });

        it("should return first index when pattern matches multiple substrings", () => {
            let pattern = "this";
            let string = "pattern should match this, but not this.";

            expect(matcher.bmMatch(string, pattern)).to.equal(
                string.indexOf(pattern)
            );
        });

        it("should be able to match prefixes", () => {
            let pattern = "lorem";
            let string1 = "lorem ipsum dolor sit amet";
            let string2 = "lorem ";
            let string3 = "lorem";

            expect(matcher.bmMatch(string1, pattern)).to.equal(
                string1.indexOf(pattern)
            );
            expect(matcher.bmMatch(string2, pattern)).to.equal(
                string2.indexOf(pattern)
            );
            expect(matcher.bmMatch(string3, pattern)).to.equal(
                string3.indexOf(pattern)
            );
        });

        it("should be able to match suffixes", () => {
            let pattern = "amet";
            let string1 = "lorem ipsum dolor sit amet";
            let string2 = " amet";
            let string3 = "amet";

            expect(matcher.bmMatch(string1, pattern)).to.equal(
                string1.indexOf(pattern)
            );
            expect(matcher.bmMatch(string2, pattern)).to.equal(
                string2.indexOf(pattern)
            );
            expect(matcher.bmMatch(string3, pattern)).to.equal(
                string3.indexOf(pattern)
            );
        });
    });

    describe("levenshteinDistance", () => {
        it("should calculate correctly", () => {
            let string1 = "sitting";
            let string2 = "kitten";

            expect(matcher.levenshteinDistance(string1, string2)).to.equal(3);
            expect(matcher.levenshteinDistance(string2, string1)).to.equal(3);
        });
    });
});