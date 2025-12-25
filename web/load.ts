import fs from "fs";
import path from "path";
import type { IdiomData } from "./src/components/Idiom";

function load(csvText: string): IdiomData[] {
  const lines = csvText.trim().split("\n");
  const [, ...rows] = lines;

  return rows.map((line) => {
    const columns = line.split(",");

    const name = columns[0];
    const reading = columns[1];
    const meaning = columns[2];

    const examples = columns.slice(3).filter((e) => e && e.trim() !== "");

    const idiom: IdiomData = {
      name,
      reading,
      meaning,
    };

    if (examples.length > 0) {
      idiom.examples = examples;
    }

    return idiom;
  });
}

const inputPath = path.resolve("../main.csv");
const outputPath = path.resolve("./src/data/idioms.json");
const csvText = fs.readFileSync(inputPath, "utf-8");
const idioms = load(csvText);

fs.writeFileSync(outputPath, JSON.stringify(idioms, null, 2), "utf-8");
console.log("idioms.json を書き出しました");
