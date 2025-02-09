import { readFileSync, writeFileSync } from "fs";
import * as csv from "csv/sync";

const targetFile = 'live/latest.csv';

const csvFile = readFileSync(targetFile, 'utf8');

const parsed = csv.parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
});

const is0Alphabet = c => {
    const code = c.codePointAt(0);
    return (
        ('A'.codePointAt(0) <= code && 'Z'.codePointAt(0) >= code) ||
        ('a'.codePointAt(0) <= code && 'z'.codePointAt(0) >= code)
    );
};

// const withSortKey = new Map(parsed.map(s => [
//     is0Alphabet(s.名称) ? s.名称.toLowerCase() : (s.よみがな + '_' + s.名称),
//     s
// ]));

const sorted = parsed
    .toSorted((a, b) => {
        const aSortKey = is0Alphabet(a.名称) ? a.名称.toLowerCase() : a.よみがな;
        const bSortKey = is0Alphabet(b.名称) ? b.名称.toLowerCase() : b.よみがな;
        return new Intl.Collator('ja-JP').compare(aSortKey, bSortKey);
    });

const sortedCsvFile = csv.stringify(sorted, { quote: false, header: true, columns: ['名称', 'よみがな', '説明', '補足'] });

writeFileSync(targetFile, sortedCsvFile, 'utf8');
