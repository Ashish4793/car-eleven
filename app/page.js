'use client';
import Link from "next/link"
import Image from "next/image"
import { Car, Calendar, Phone, MapPin, Clock, CheckCircle, Mail, Send } from "lucide-react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function Home() {

  return (
    <div className="flex  min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 md:py-48">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 to-transparent" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="container max-w-4xl relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Elevate Your <span className="text-rose-500">Car&#39;s</span> Appearance
              </h1>
              <p className="mt-6 text-xl text-white/70 md:text-2xl">
                Premium car washing services that transform your vehicle with meticulous attention to detail.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href={'/appointment'} className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full sm:min-w-[180px] focus:outline-none text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-md px-5 py-2.5"
                  >
                    Book Now
                  </button>
                </Link>

                <Link href={'#services'} className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full sm:min-w-[180px] text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5"
                  >
                    Explore Services
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-zinc-900 py-24">
          <div className=" mx-auto px-4 lg:px-12">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="rounded-full bg-rose-500/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold">Quick Service</h3>
                <p className="text-white/60 text-lg mt-2">
                  Get your car washed and detailed in under 30 minutes with our efficient process.
                </p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="rounded-full bg-purple-500/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Quality Results</h3>
                <p className="text-white/60 text-lg mt-2">
                  Professional equipment and eco-friendly products for the best possible finish.
                </p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="rounded-full bg-blue-500/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Easy Booking</h3>
                <p className="text-white/60 text-lg mt-2">Book your appointment online in seconds, anytime and anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-black py-24 md:py-32">
          <div className="px-4 md:px-6 lg:px-12">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-rose-500/10 px-4 py-1 text-sm font-medium text-rose-500">
                  About Us
                </div>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Redefining Car Care with Excellence</h2>
                <p className="text-zinc-200 text-xl leading-relaxed">
                  Car Eleven is committed to delivering top-quality car washing services with precision and care. Our skilled team uses modern equipment and eco-friendly products to give your vehicle the attention it deserves. Experience a spotless shine every time!
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-rose-500" />
                    <span className="text-lg">Expert detailers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-rose-500" />
                    <span className="text-lg">Eco-friendly products</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-rose-500" />
                    <span className="text-lg">Advanced equipment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-rose-500" />
                    <span className="text-lg">Satisfaction guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image width={800} height={800} alt="washing-car" src="https://cdn.whichcar.com.au/assets/w_4096/af3f09a3/2021-hyundai-i30-n-dct-engine-red-australia-static-front-car-wash-reviewer-cbrunelli.jpg" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-zinc-900 py-24 md:py-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center mb-16">
              <div className="inline-block rounded-full bg-rose-500/10 px-4 py-1 text-sm font-medium text-rose-500">
                Our Services
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Premium Washing Services</h2>
              <p className="mt-6 text-zinc-200 text-xl">
                Choose from our range of professional washing and detailing services.
              </p>
            </div>
            <Card />

          </div>
        </section>

        {/* Testimonials Section */}

        <section className="bg-black text-white py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block rounded-full bg-rose-500/10 px-4 py-1 text-sm font-medium text-rose-500">
              Testimonials
            </div>
            <h2 className="text-5xl font-bold mt-4">What Our Customers Say</h2>
            <p className="text-zinc-200 text-xl mt-2">Don&#39;t just take our word for it. Here&#39;s what our satisfied customers have to say.</p>
          </div>
          <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-avatar" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Yashvardhan Singh</h3>
                  <div className="text-red-500">★★★★★</div>
                </div>
              </div>
              <p className="text-zinc-100 mt-4">
                &#34;Car Eleven did an amazing job on my SUV. It hadn&#39;t been detailed in years, and they made it look brand new again. Highly recommend!&#34;
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-avatar" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Niel</h3>
                  <div className="text-purple-500">★★★★★</div>
                </div>
              </div>
              <p className="text-zinc-100 mt-4">
                &#34;The premium detail package is worth every penny. My car hasn&#39;t looked this good since I drove it off the lot. The team is professional and thorough.&#34;
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-avatar" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Allen Reeves</h3>
                  <div className="text-blue-500">★★★★★</div>
                </div>
              </div>
              <p className="text-zinc-100 mt-4">
                &#34;I love how easy it is to book online. The service is always fast and the results are consistently excellent. Car Eleven is my go-to car wash!&#34;
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-avatar" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Suyash Brahamane</h3>
                  <div className="text-amber-500">★★★★★</div>
                </div>
              </div>
              <p className="text-zinc-100 mt-4">
                &#34;Loved the service. The team is very professional and the results are amazing. I would definitely recommend Car Eleven to my friends and family.&#34;
              </p>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-black text-white py-32 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="inline-block rounded-full bg-rose-500/10 px-4 py-1 text-sm font-medium text-rose-500">
                Contact Us
              </div>
              <h2 className="text-4xl font-bold mt-4">Get In Touch</h2>
              <p className="text-zinc-100 mt-2">
                Have questions or need assistance? Reach out to our friendly team.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-rose-500/10 p-3">
                    <MapPin className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-zinc-100">EA 63, Ring Rd, near Nipania, Scheme No 94 Sector EB, Indore, MP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <Phone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-zinc-100">+91 9201070439</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-zinc-100">careleven11@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-green-500/10 p-3">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-zinc-100">Monday-Friday: 8:30AM-9PM</p>
                    <p className="text-zinc-100">Saturday-Sunday: 8AM-9PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Send Us a Message</h3>
              <form className="mt-6 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-md mb-2 font-medium text-white">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3 text-white placeholder:text-white/40 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-md mb-2 font-medium text-white">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3 text-white placeholder:text-white/40 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-md mb-2 font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3 text-white placeholder:text-white/40 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  ></textarea>
                </div>
                <button type="submit" className="text-white justify-center inline-flex w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message</button>
              </form>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="relative bg-zinc-900 py-24 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Ready to Experience the Car Eleven Difference?
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-zinc-200 text-xl">
              Book your appointment today and see why we&#39;re the most trusted car wash in town.
            </p>
            <Link href={'/appointment'}>
              <button type="button" className="text-zinc-50 my-12 bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Book Your Appointment Now</button>
            </Link>
          </div>
        </section>

      </main>

      <footer className="bg-black py-8 text-white border-t border-white/10">
        <div className="px-4 md:px-6 lg:px-14">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Car className="h-6 w-6 text-rose-500" />
                <span className="text-xl font-bold text-white">Car Eleven</span>
              </div>
              <p className="mt-4 text-white/60 text-lg">
                Premium car washing services that transform your vehicle with meticulous attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#booking" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Basic Wash
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Deluxe Wash
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Premium Detail
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Interior Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-rose-500 transition-colors text-lg">
                    Waxing & Polishing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 lg:h-12 lg:w-12 text-rose-500" />
                  <span className="text-white/60 text-lg">EA 63, Ring Rd, near Nipania, Scheme No 94 Sector EB, Indore, MP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span className="text-white/60 text-lg">+91 92010-70439</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="text-white/60 text-lg">careleven11@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-white/60 text-lg">Mon-Fri: 8:30AM-9PM,<br></br> Sat-Sun: 8AM-9PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-white/60 text-lg">&copy; {new Date().getFullYear()} Car Eleven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}