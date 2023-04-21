import itertools

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def build(S):
            skip = 0
            for x in reversed(S):
                if x == '#':
                    skip += 1
                elif skip:
                    skip -= 1
                else:
                    yield x        
        return all(x == y for x, y in itertools.zip_longest(build(s), build(t)))