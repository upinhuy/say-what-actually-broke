# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/upinhuy/say-what-actually-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/upinhuy/say-what-actually-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun/r/hv9zk8y5) — one line of software error copy, at most 200 characters, that tells the user the brutal truth about what went wrong and makes them laugh.

## The entry

> Out of memory. This app tried to hold your whole project in RAM at once and dropped it. Close a few tabs — it juggles better with less.

**135 characters** (counted in Unicode code points), one single line.

The failure is concrete — the app ran out of memory — and the line says so in plain words instead of hiding behind "something went wrong". The twist is the image of an app juggling your whole project and dropping it, and the next step is right there in the line: close a few tabs. It is written to survive being pasted into a real product's error dialog.

## How it works

`main.ts` holds the entry line as a string constant, validates it, and writes it to `/output/entry.txt`:

- 1–200 characters, counted in Unicode code points
- exactly one line (no `\n` or `\r`)
- not only whitespace, no control characters
- creates `/output` if it does not exist yet
- logs the character count after writing

Node standard library only — no dependencies, no network access.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the TypeScript runs as-is). On Node 22.6–22.17, use `node --experimental-strip-types main.ts`.

## Referral

Built on make.fun — join with my referral link: https://make.fun/r/hv9zk8y5 (code `hv9zk8y5`).
