import { mkdir, writeFile } from "node:fs/promises";

const ENTRY_LINE = "fix: Friday 4:59pm — prod was slow, so I replaced the database with a JSON file. Merging now, happy weekend!";

function printUsage(): void {
  console.log(
    "ship-it-friday-30bd407a\n" +
      "Usage: node main.ts [--help | -h]\n" +
      "Writes the constant commit-message entry line to /output/entry.txt"
  );
}

async function main(): Promise<void> {
  if (process.argv[2] === "--help" || process.argv[2] === "-h") {
    printUsage();
    process.exit(0);
  }

  if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 159) {
    throw new Error(
      `Entry line must be 1 to 159 characters long, got ${ENTRY_LINE.length}.`
    );
  }

  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", ENTRY_LINE + "\n", "utf8");
}

void main();
