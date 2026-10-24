<img src="/coding-challenges.gif" alt="Coding Challenges">

During this current landscape of AI, it's very important not to fall into the trap of outsourcing your ability to reason about problems to AI. This repo contains over 500 coding challenge solutions from [codewars](https://www.codewars.com), [leetcode](https://leetcode.com), [hackerrank](https://www.hackerrank.com), [codeforces](https://codeforces.com) and others, that I try to tackle every single day.

Most solutions in Javascript or Python, but see the list below for others I've used while learning syntax or just to satisfy my curiosity.

[![Languages](https://skillicons.dev/icons?i=js,ts,python,java,coffeescript,postgres,c,cpp,cs,ruby,php,go)](https://skillicons.dev)

## Why I still do this

I've always been a puzzle person. Over the years, I've went through multiple spells of solving challenges everyday. Sudoku, cryptograms, crosswords, chess. You get the point. Coding challenges slid into that same daily rotation, except these ones keep my technical skills in shape too.

That matters more now that AI writes a lot of my code. I'm still the one who has to decide whether it's right, whether it scales, and what breaks at the edges. That judgment comes from working problems out myself.

## How it's organized

```
.
├── 6kyu/
│   ├── find-the-missing-letter.js
│   └── ...
├── 7kyu/
│   ├── shortest-word.js
│   └── ...
├── 8kyu/
│   ├── counting-sheep.js
│   └── ...
├── binary-search.java
├── binary-search.js
├── binary-search.py
├── two-sum.js
├── valid-parentheses.js
└── ... challenges from all platforms
```

Each file is one problem, named after it. Some Codewars katas are sorted into kyu folders by difficulty, and everything else sits at the root. You'll sometimes find the same problem in more than one language when I wanted to compare how each handles it.

Most files open with a link to the original challenge, plus the description and examples. If you want to try one yourself, start there before you scroll down to my solution.

## Optimizations

I go back to old solutions a lot. The early ones are often brute force that passes the tests and falls over on bigger input. When I refactor, I'm usually swapping nested loops for a hash map or two pointers, cutting intermediate arrays, or expanding a clever one-liner back into something readable.

## Lessons learned

**Pattern recognition beats memorization.** Most problems are a sliding window, a graph walk or a DP table in disguise. Spotting which one is most of the work.

**Clever isn't always right.** Plenty of top voted solutions would be a pain to maintain. In production codebases, engineers would typically prefer the readable version.

**Don't spend too long throwing sh*t at the wall, hoping something will stick.** There are plenty of solutions and walkthroughs out there. Give each problem a real college try, and if you're still stuck, watch a walkthrough and learn the approach. Banging your head against the keyboard won't get you anywhere.

**There's always more to learn.** With years in, some problems still humble me.

---

If you want to chat about any specific challenge or want to do a mock interview, reach out at [jsmalls.net](https://jsmalls.net) or <a href="mailto:hi@jsmalls.net">email me</a>.