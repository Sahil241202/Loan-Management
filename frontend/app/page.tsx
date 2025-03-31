"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-lg">
        <h1 className="text-3xl font-extrabold text-teal-600 tracking-wide">FINANCE ASSIST</h1>
        <div className="space-x-4">
          <Button 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all"
            onClick={() => router.push('/signup')}
          >
            Create Account
          </Button>
          <Button 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all"
            onClick={() => router.push('/login')}
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-24 bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Financial Freedom At Your Fingertips</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6 font-light">
          Streamlined borrowing solutions with transparent terms and personalized options for your unique needs.
        </p>
        <Button onClick={() => router.push('/login')} size="lg" className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform">Explore Options</Button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          {title: "Tailored Solutions", desc: "Customized financing options that adapt to your specific financial situation."},
          {title: "Transparent Process", desc: "Crystal clear terms with no hidden fees or confusing fine print."},
          {title: "Smart Dashboard", desc: "Intuitive tools to monitor repayments and track your financial progress."}
        ].map((feature, index) => (
          <Card key={feature.title} className="shadow-xl hover:shadow-2xl bg-opacity-90 backdrop-blur-md hover:translate-y-[-5px] transition-all duration-300">
            <CardHeader className="bg-teal-50 dark:bg-teal-900/20 rounded-t-lg">
              <CardTitle className="text-xl font-semibold text-teal-600">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 pt-4">
              {feature.desc}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center py-6 shadow-md">
        <p className="text-xl font-bold">Developed by Sahil Repuriya</p>
      </footer>
    </div>
  );
}