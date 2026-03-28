import type { ResourceItem } from "@/lib/resources-data"

interface RulesBodyProps {
  code: string
}

function RulesBody({ code }: RulesBodyProps) {
  return (
    <div className="overflow-x-auto font-mono text-[11px] leading-relaxed">
      {code.split("\n").map((line, i) => {
        const t = line.trim()
        if (t.startsWith("#")) {
          return (
            <p key={i} className="text-zinc-600">
              {line}
            </p>
          )
        }
        if (line.includes("=") && !t.startsWith("#")) {
          const eq = line.indexOf("=")
          const k = line.slice(0, eq)
          const v = line.slice(eq + 1)
          return (
            <p key={i}>
              <span className="text-emerald-300/85">{k}</span>
              <span className="text-zinc-600">=</span>
              <span className="text-violet-300/90">{v}</span>
            </p>
          )
        }
        return (
          <p key={i} className="text-zinc-400">
            {line || "\u00a0"}
          </p>
        )
      })}
    </div>
  )
}

interface PromptBodyProps {
  code: string
}

function PromptBody({ code }: PromptBodyProps) {
  return (
    <div className="overflow-x-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-zinc-400">
      {code.split(/(`[^`]+`)/g).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <span
            key={i}
            className="rounded bg-white/5 px-1 text-emerald-300/90"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </div>
  )
}

interface CodeBodyProps {
  item: ResourceItem
}

export function CodeBody({ item }: CodeBodyProps) {
  if (item.codeKind === "rules") return <RulesBody code={item.code} />
  if (item.codeKind === "prompt") return <PromptBody code={item.code} />
  return (
    <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-zinc-400">
      {item.code}
    </pre>
  )
}
