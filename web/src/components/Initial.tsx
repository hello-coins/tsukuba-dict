export type InitialData = {
  text: string;
};

export default function Initial({ text }: InitialData) {
  return (
    <div
      className="
        mb-6
        pr-1
        text-xl
        font-semibold
        bg-stone-900
        text-white
        pt-3
        border-r
        border-stone-400
        tracking-widest
      "
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
      }}
    >
      {text}
    </div>
  );
}
