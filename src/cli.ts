#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { parseGGN, serializeGGN } from "./ggn/index.js";

const [, , domain, action, ...args] = process.argv;

function getArg(flag: string) {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
}

async function main() {
  if (domain !== "ggn") {
    throw new Error("Unknown domain");
  }

  const input = getArg("-i");
  const output = getArg("-o");

  if (!input || !output) {
    throw new Error("Missing -i or -o");
  }

  const raw = await readFile(input, "utf8");

  if (action === "parse") {
    const json = parseGGN(raw);
    await writeFile(output, JSON.stringify(json, null, 2));
    return;
  }

  if (action === "serialize") {
    const data = JSON.parse(raw);
    const ggn = serializeGGN(data);
    await writeFile(output, ggn);
    return;
  }

  throw new Error("Unknown action");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
