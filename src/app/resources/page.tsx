import { ResourcesView } from "@/components/resources/ResourcesView"

export default function ResourcesPage() {
  return (
    <div className="relative min-h-dvh bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(46,230,214,0.05),transparent_50%)]"
      />
      <main className="relative z-10">
        <ResourcesView />
      </main>
    </div>
  )
}
