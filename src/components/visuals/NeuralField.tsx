"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { damp } from "maath/easing"
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react"
import * as THREE from "three"

interface CloudProps {
  mouse: MutableRefObject<{ x: number; y: number }>
  count: number
}

function Cloud({ mouse, count }: CloudProps) {
  const ref = useRef<THREE.Points>(null!)
  const spin = useRef(0)

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const a = new THREE.Color("#2ee6d6")
    const b = new THREE.Color("#a855f7")
    const c = new THREE.Color("#f0b27a")

    /* eslint-disable react-hooks/purity -- one-off particle seed per `count` */
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.68 + Math.random() * 0.58
      const sp = Math.sin(phi)
      positions[i * 3] = r * sp * Math.cos(theta)
      positions[i * 3 + 1] = r * sp * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const col = new THREE.Color().lerpColors(
        i % 3 === 0 ? a : i % 3 === 1 ? b : c,
        i % 3 === 0 ? b : i % 3 === 1 ? c : a,
        Math.random() * 0.62,
      )
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }
    /* eslint-enable react-hooks/purity */

    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return g
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    spin.current += delta * 0.06
    damp(ref.current.rotation, "x", mouse.current.y * 0.34, 0.48, delta)
    damp(
      ref.current.rotation,
      "y",
      spin.current + mouse.current.x * 0.44,
      0.38,
      delta,
    )
    damp(ref.current.rotation, "z", mouse.current.x * 0.1, 0.55, delta)
  })

  return (
    <points ref={ref} frustumCulled geometry={geometry}>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        opacity={0.88}
        size={0.024}
        sizeAttenuation
        transparent
        vertexColors
      />
    </points>
  )
}

interface SceneProps {
  mouse: MutableRefObject<{ x: number; y: number }>
  count: number
}

function Scene({ mouse, count }: SceneProps) {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.12} />
      <Cloud count={count} mouse={mouse} />
    </>
  )
}

export interface NeuralFieldProps {
  className?: string
  active?: boolean
}

export function NeuralField({
  className,
  active = true,
}: NeuralFieldProps) {
  const mouse = useRef({ x: 0, y: 0 })
  const [count, setCount] = useState(2400)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const mq = window.matchMedia("(max-width: 768px)")
    const sync = () => {
      if (reduce.matches) setCount(480)
      else if (mq.matches) setCount(1000)
      else setCount(2400)
    }
    sync()
    mq.addEventListener("change", sync)
    reduce.addEventListener("change", sync)
    return () => {
      mq.removeEventListener("change", sync)
      reduce.removeEventListener("change", sync)
    }
  }, [])

  if (!active) {
    return <div aria-hidden className={className} />
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.35], fov: 42 }}
      className={className}
      dpr={[1, 2]}
      frameloop="always"
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ display: "block", height: "100%", width: "100%" }}
    >
      <Suspense fallback={null}>
        <Scene count={count} mouse={mouse} />
      </Suspense>
    </Canvas>
  )
}
