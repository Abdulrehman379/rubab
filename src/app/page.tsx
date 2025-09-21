"use client"
import React from "react"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold text-center text-blue-600">Next.js Info</h1>
      </header>

      {/* Hero Section */}
      <main className="pt-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Next.js</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Next.js ek React framework hai jo modern aur fast web applications banane ke liye use hota hai.
          Ye SEO-friendly aur developer-friendly features provide karta hai.
        </p>
        <img
          src="/herojs.jpg"
          alt="Next.js"
          className="mx-auto rounded-lg shadow-md w-full max-w-md"
        />

        {/* Features */}
        <section className="mt-12 max-w-3xl mx-auto text-left space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600 text-center">Key Features</h3>
          <div className="bg-white p-4 rounded-md shadow">
            <h4 className="font-semibold">⚡ Server-Side Rendering</h4>
            <p className="text-gray-600">Fast rendering aur SEO ke liye best.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h4 className="font-semibold">📄 Static Site Generation</h4>
            <p className="text-gray-600">Scalable aur optimized static pages.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h4 className="font-semibold">🔗 API Routes</h4>
            <p className="text-gray-600">Same project ke andar backend APIs create karne ki facility.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner text-center py-4 mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Next.js Info
      </footer>
    </div>
  )
}

export default HomePage
