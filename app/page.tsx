"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Carrot,
  ChefHat,
  Facebook,
  Instagram,
  Leaf,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Day1Meal1 from "@/components/recipes/day1meal1";
import Day1Meal2 from "@/components/recipes/day1meal2";
import Day2Meal1 from "@/components/recipes/day2meal1";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ChefHat className="h-6 w-6" />
          <span className="sr-only">Healthy Recipes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Recipes
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <section className="flex flex-col w-full py-10">
          <div className="container m-auto">
            <h1 className="text-center py-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Recipes for a Healthy Week
            </h1>
            <p className="text-center py-4 text-muted-foreground md:text-xl">
              Discover delicious and nutritious recipes that are easy to make at
              home. Elevate your cooking game and boost your health.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#FF6F61] justify-center">
                <a className="py-2" href="#day1-meal1">
                  One-Pot Chicken and Vegetable Stir-Fry
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#6B5B95] justify-center">
                <a className="py-2" href="#day1-meal2">
                  One-Pot Lentil Soup
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#88B04B] justify-center">
                <a className="py-2" href="#day2-meal1">
                  One-Pot Salmon with Vegetables
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#F7CAC9] justify-center">
                <a className="py-2" href="">
                  Day 2 - Meal 2
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#92A8D1] justify-center">
                <a className="py-2" href="">
                  Day 3 - Meal 1
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#955251] justify-center">
                {" "}
                <a className="py-2" href="">
                  Day 3 - Meal 2
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#B565A7] justify-center">
                {" "}
                <a className="py-2" href="">
                  Day 4 - Meal 1
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#009B77] justify-center">
                <a className="py-2" href="">
                  Day 4 - Meal 2
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#DD4124] justify-center">
                <a className="py-2" href="">
                  Day 5 - Meal 1
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#45B8AC] justify-center">
                <a className="py-2" href="">
                  Day 5 - Meal 2
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#EFC050] justify-center">
                <a className="py-2" href="">
                  Day 6 - Meal 1
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#5B5EA6] justify-center">
                {" "}
                <a className="py-2" href="">
                  Day 6 - Meal 2
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#9B2335] justify-center">
                {" "}
                <a className="py-2" href="">
                  Day 7 - Meal 1
                </a>
              </Button>
              <Button className="mr-2 mt-2 inline-flex items-center bg-[#DFCFBE] justify-center">
                <a className="py-2" href="">
                  Day 7 - Meal 2
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16" id="day1-meal1">
          <div className="text-center">
            {" "}
            <h1 className="text-3xl font-bold  text-gray-800 mb-6">
              One-Pot Chicken and Vegetable Stir-Fry
            </h1>
            <p>Calories: ~600</p>
            <p>Protein: ~43.6g</p>
            <p>Fat: ~19.3g</p>
            <p>Carbohydrates: ~71.9g (Fiber: ~11.7g)</p>
          </div>
          <Day1Meal1 />
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16" id="day1-meal2">
          <div className="text-center">
            {" "}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              One-Pot Lentil Soup
            </h1>
            <p> Calories: ~649 kcal</p>
            <p>Protein: ~29.4g</p>
            <p>Fat: ~17.2g</p>
            <p>Carbohydrates: ~95g (Fiber: ~28g)</p>
          </div>
          <Day1Meal2 />
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16" id="day2-meal1">
          <div className="text-center">
            {" "}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              One-Pot Salmon with Vegetables
            </h1>
            <p> Calories: ~584 kcal</p>
            <p>Protein: ~42.5g</p>
            <p>Fat: ~36g</p>
            <p>Carbohydrates: ~21g (Fiber: ~4g)</p>
          </div>
          <Day2Meal1 />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Healthy Recipes. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 sm:gap-6">
          <Link
            className="text-muted-foreground hover:text-foreground"
            href="#"
          >
            <Facebook className="h-4 w-4" />
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground"
            href="#"
          >
            <Twitter className="h-4 w-4" />
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground"
            href="#"
          >
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
