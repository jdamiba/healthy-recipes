'use client'

import React, { Suspense, useRef, useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Carrot, ChefHat, Facebook, Instagram, Leaf, Twitter } from "lucide-react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const fruitColors = [
  '#ff6b6b', // Red (Apple)
  '#feca57', // Yellow (Lemon)
  '#ff9ff3', // Pink (Peach)
  '#54a0ff', // Blue (Blueberry)
  '#5f27cd', // Purple (Plum)
  '#ff6b6b', // Red (Cherry)
]

const Fruit = ({ position }) => {
  const meshRef = useRef()
  const [speed] = useState(() => 0.1 + Math.random() * 0.2)
  const [rotationSpeed] = useState(() => Math.random() * 0.02 - 0.01)
  const color = useMemo(() => fruitColors[Math.floor(Math.random() * fruitColors.length)], [])

  useFrame((state, delta) => {
    meshRef.current.position.y -= speed
    meshRef.current.rotation.x += rotationSpeed
    meshRef.current.rotation.z += rotationSpeed

    if (meshRef.current.position.y < -10) {
      meshRef.current.position.y = 15
      meshRef.current.position.x = (Math.random() - 0.5) * 10
      meshRef.current.position.z = (Math.random() - 0.5) * 10
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.2 + Math.random() * 0.3, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  )
}

const FallingFruit = () => {
  const fruitCount = 20
  const fruits = useMemo(() => {
    return Array.from({ length: fruitCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 20,
        (Math.random() - 0.5) * 10
      ]
    }))
  }, [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {fruits.map((fruit, index) => (
        <Fruit key={index} position={fruit.position} />
      ))}
    </>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center p-4">Unable to load 3D content.</div>
    }

    return this.props.children
  }
}

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ChefHat className="h-6 w-6" />
          <span className="sr-only">Healthy Recipes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Recipes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Healthy Recipes for Your Home Kitchen
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover delicious and nutritious recipes that are easy to make at home. Elevate your cooking game and boost your health.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center">
                    Get Started
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[400px] h-[400px]">
                  <ErrorBoundary>
                    <Canvas>
                      <Suspense fallback={null}>
                        <FallingFruit />
                      </Suspense>
                    </Canvas>
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the benefits of our healthy recipe collection
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <Leaf className="h-12 w-12" />
                <h3 className="text-xl font-bold">Nutritious Ingredients</h3>
                <p className="text-sm text-muted-foreground text-center">
                  All recipes feature wholesome, nutrient-rich ingredients for optimal health.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Carrot className="h-12 w-12" />
                <h3 className="text-xl font-bold">Easy to Prepare</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Step-by-step instructions make cooking a breeze, even for beginners.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Apple className="h-12 w-12" />
                <h3 className="text-xl font-bold">Diverse Menu</h3>
                <p className="text-sm text-muted-foreground text-center">
                  From quick breakfasts to gourmet dinners, we have recipes for every occasion.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your Healthy Cooking Journey Today
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of health-conscious home cooks. Sign up for our newsletter to receive weekly recipes and cooking tips.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Healthy Recipes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 sm:gap-6">
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}