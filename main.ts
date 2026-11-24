// Two-Sentence Horror — @westi7460 entry.
// Writes one original two-sentence horror story to /output/entry.txt.
// Exactly two sentences, under 400 characters, no trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I planted the row of sunflowers along the fence the week we moved in, so the kitchen window would have something yellow to look at. This morning every one of them had turned to face the house, and not a single flower has turned back since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
