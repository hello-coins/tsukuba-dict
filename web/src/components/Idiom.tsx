/**
 * 単語を表すデータ型。
 */
export type IdiomData = {
  /** 慣用句の表記（原文） */
  name: string;

  /** 慣用句の読み方・発音。原則としてひらがな。*/
  reading: string;

  /** 慣用句の意味・解説 */
  meaning: string;

  /** 慣用句の使用例（例文の配列）。*/
  examples?: string[];
};

/**
 * 英数字 + 一部記号を横向きに戻す
 */
function renderWithLatin(text: string) {
  return text.split(/([A-Za-z0-9()\-._/]+)/).map((part, index) =>
    /^[A-Za-z0-9()\-._/]+$/.test(part) ? (
      <span key={index} style={{ textOrientation: 'mixed' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

/**
 * 使用例番号を丸数字に変換（①②③…）
 * ※ 1〜20 まで対応
 */
function circledNumber(n: number): string {
  if (n >= 1 && n <= 20) {
    return String.fromCharCode(0x2460 + n - 1);
  }
  // 20を超えた場合のフォールバック
  return `(${n})`;
}

export default function Idiom({ name, reading, meaning, examples }: IdiomData) {
  return (
    <div
      className="pl-4 pr-4 mb-0 last:border-l-0"
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
      }}
    >
      {/* 見出し語 */}
      <div className="text-lg font-bold text-stone-900 mb-1 tracking-wide">【{renderWithLatin(name)}】</div>

      {/* 読み */}
      <div className="text-xs text-stone-600 mb-2">〔{renderWithLatin(reading)}〕</div>

      {/* 意味・解説 */}
      <div className="text-sm text-stone-800 mb-3" style={{ lineHeight: '1.8' }}>
        <span className="bg-stone-600 text-white px-1 mb-0.5">解説</span>
        {renderWithLatin(meaning)}
      </div>

      {/* 使用例 */}

      {examples && examples.length > 0 && (
        <div className="mt-3 pt-3 border-t border-stone-300">
          {examples.map((example, index) => (
            <div key={index} className="mb-2 text-xs text-stone-700">
              <span className="text-stone-500 mr-1">{circledNumber(index + 1)}</span>
              {renderWithLatin(example)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
