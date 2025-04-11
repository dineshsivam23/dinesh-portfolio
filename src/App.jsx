import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <img
            src="/Dk-img.jpg"
            alt="Dineshkumar P"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold">DINESHKUMAR P</h1>
          <p className="text-lg text-gray-600">Java Full Stack Developer</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm a recent Electronics and Communication Engineering graduate with a strong
            interest in software development. I've completed a Java Full Stack Development
            course and built hands-on projects using Java, Spring Boot, HTML, CSS, and JavaScript.
            I'm eager to start my career in the IT industry and contribute to building efficient,
            real-world applications while continuously learning and growing as a developer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">E-commerce Website</h3>
                <p className="text-gray-700">
                  Built responsive web pages for user-friendly online shopping experience. Integrated basic cart and checkout system. Used JavaScript for form validation and UI interactivity.
                </p>
                <p className="mt-2 text-sm text-gray-600">Tech Used: HTML, CSS, JavaScript</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">RFID Based Secured Transformer Control System</h3>
                <p className="text-gray-700">
                  Designed a system to improve lineman safety during power line maintenance using RFID and GSM. Implemented OTP via SMS to control power ON/OFF securely.
                </p>
                <p className="mt-2 text-sm text-gray-600">Tech Used: Embedded system, RFID, GSM module</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Java, C</li>
            <li>HTML, CSS, JavaScript, React</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>Eclipse, VS Code, Tinkercad, Fusion360</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">📧 dineshsivam23@gmail.com</p>
          <p className="text-gray-700">🔗 <a href="https://www.linkedin.com/in/dineshsivam23" className="text-blue-600">LinkedIn</a></p>
          <p className="text-gray-700">📱 9361031783</p>
        </section>

        <div className="text-center">
          <Button className="bg-blue-600 text-white">Download Resume</Button>
        </div>
      </div>
    </div>
  );
}
