# dmd-clear

plugin for jsdoc-to-markdown for clearer output

## History

I began this plugin before discovering [`dmd-clean`](https://github.com/Rantanen/dmd-clean) by accidentally installing "dmd-clean" instead of "dmd-clear". I found that `dmd-clean` had already made some of the changes that I wanted, but it lacked some of my improvements, and I lacked some of its improvements.

`dmd-clear` now selectively borrows from [`dmd-clean`](https://github.com/Rantanen/dmd-clean).

## Usage

```
npm install dmd-clear --save-dev
jsdoc2md --plugin dmd-clean
```