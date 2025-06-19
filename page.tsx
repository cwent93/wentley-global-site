
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

export default function WentleyGlobalSite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-10">
        <Image src="/logo.png" alt="Wentley Global LLC Logo" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Wentley Global LLC</h1>
        <p className="text-lg mt-2">Smart Home & IoT Monitoring Solutions</p>
        <p className="text-md">Serving Columbia, SC and surrounding areas</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Smart Thermostats</h2>
            <p>Energy-efficient control integrated with Alexa and iPhone apps.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Smart Locks</h2>
            <p>Remote entry control and monitoring for rentals and Airbnbs.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">IoT Building Sensors</h2>
            <p>Track temperature, leaks, and occupancy via cloud dashboards.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p>Smart Home Install: $1,500 - $3,000</p>
        <p>IoT Building Setup: $3,000 - $7,000</p>
        <p>Monitoring Plan: $150 - $400/month</p>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <p className="italic">"Marcello and his team made my Airbnb totally hands-off with remote locks and leak sensors. Highly recommend!"</p>
              <p className="mt-2 font-semibold">- Lauren T., Columbia, SC</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="italic">"Wentley Global helped us install smart systems in our rental properties. We now get alerts before tenants even notice issues!"</p>
              <p className="mt-2 font-semibold">- David P., Lexington, SC</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Button variant="outline">
            <Phone className="mr-2 h-4 w-4" /> 803-730-2103
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> wentleyglobal@gmail.com
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/marcello-wentley-953504134" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
