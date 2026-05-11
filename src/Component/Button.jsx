import { memo } from 'react'

export const Button = memo((props) => {
  return (
    <button
      className="cursor-pointer rounded-full border px-6 py-2 text-sm font-medium transition-all duration-200 hover:opacity-70 max-md:w-full"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--text)",
        color: "var(--text)",
      }}
    >
      {props.children}
    </button>
  );
});
