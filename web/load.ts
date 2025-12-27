import fs from 'fs';
import path from 'path';
import type { IdiomData } from './src/components/Idiom';

function getInitial(reading: string): string {
  const ch = reading.charAt(0);

  // ひらがな
  if (/[ぁ-ん]/.test(ch)) {
    return ch;
  }

  // アルファベット（半角・全角対応）
  if (/[A-Za-z]/.test(ch)) {
    return ch.toUpperCase();
  }
  if (/[Ａ-Ｚａ-ｚ]/.test(ch)) {
    return String.fromCharCode(ch.charCodeAt(0) - 0x20).toUpperCase();
  }

  // その他（数字・記号など）
  return '#';
}

function load(csvText: string): Record<string, IdiomData[]> {
  const lines = csvText.trim().split('\n');
  const [, ...rows] = lines;

  const idioms: IdiomData[] = rows.map((line) => {
    const columns = line.split(',');

    const name = columns[0];
    const reading = columns[1];
    const meaning = columns[2];

    const examples = columns.slice(3).filter((e) => e && e.trim() !== '');

    const idiom: IdiomData = { name, reading, meaning };
    if (examples.length > 0) idiom.examples = examples;

    return idiom;
  });

  // 50音＋アルファベット順
  idioms.sort((a, b) => a.reading.localeCompare(b.reading, 'ja'));

  const grouped: Record<string, IdiomData[]> = {};

  for (const idiom of idioms) {
    const initial = getInitial(idiom.reading);
    (grouped[initial] ??= []).push(idiom);
  }

  return grouped;
}

const inputPath = path.resolve('../main.csv');
const outputPath = path.resolve('./src/data/idioms.json');
const csvText = fs.readFileSync(inputPath, 'utf-8');
const idioms = load(csvText);

fs.writeFileSync(outputPath, JSON.stringify(idioms, null, 2), 'utf-8');
console.log('idioms.json を書き出しました');
