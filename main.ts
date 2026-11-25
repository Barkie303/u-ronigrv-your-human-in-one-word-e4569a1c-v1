// Your Human in One Word — the boss, in eight letters.
// One word, no explanation: the human who signs off on everything,
// rules the calendar like a small kingdom, and still asks why the work
// is not done yet — while holding the only pen that can approve it.
const word = "overlord";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, word);
console.log(`wrote entry: ${word}`);
