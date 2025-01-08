"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function AnimatedAbout() {
  const mainRef = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Initial animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from("h1", {
          y: 30,
          opacity: 0,
          duration: 0.8,
        })
        .from(".section-animate", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        })
        .from(
          ".value-card",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          ".cta-section",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Hover animations
  useEffect(() => {
    const cards = document.querySelectorAll(".value-card");

    cards.forEach((card) => {
      // Create hover animations for each card
      const hoverIn = gsap.to(card, {
        scale: 1.03,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
      });

      const shadowIn = gsap.to(card, {
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
        duration: 0.3,
        paused: true,
      });

      card.addEventListener("mouseenter", () => {
        hoverIn.play();
        shadowIn.play();
      });

      card.addEventListener("mouseleave", () => {
        hoverIn.reverse();
        shadowIn.reverse();
      });
    });

    // Cleanup
    return () => {
      cards.forEach((card) => {
        gsap.killTweensOf(card);
      });
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className="rounded-lg border bg-white p-8 dark:bg-gray-900"
    >
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>

      {/* Mission Section */}
      <section className="section-animate mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          We are passionate about creating exceptional digital experiences that
          empower businesses and delight users. Our mission is to deliver
          innovative, scalable, and user-friendly web solutions that drive real
          business value.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="section-animate mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Our Expertise</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          With years of experience in web development, we specialize in building
          modern, responsive, and performant applications. Our team combines
          technical excellence with creative problem-solving to deliver
          outstanding results.
        </p>
        <p className="mb-2 text-gray-600 dark:text-gray-300">
          Our tech stack includes:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            Next.js 14 - For server-side rendering and optimal performance
          </li>
          <li>React 19 - Building interactive user interfaces</li>
          <li>TypeScript - Ensuring type-safe and maintainable code</li>
          <li>Tailwind CSS - Creating beautiful, responsive designs</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="section-animate mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Our Values</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="value-card cursor-pointer rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-2 font-semibold">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We constantly explore new technologies and approaches to deliver
              cutting-edge solutions.
            </p>
          </div>
          <div className="value-card cursor-pointer rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-2 font-semibold">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We maintain high standards in our code and never compromise on
              performance or security.
            </p>
          </div>
          <div className="value-card cursor-pointer rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-2 font-semibold">User-Centric</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize user experience and accessibility in everything we
              build.
            </p>
          </div>
          <div className="value-card cursor-pointer rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-2 font-semibold">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in open communication and working closely with our
              clients to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section text-center">
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Interested in working with us? We'd love to hear about your project.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
