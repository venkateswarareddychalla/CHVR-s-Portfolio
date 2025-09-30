import {
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";

const ContactSection = () => {

    const handleSubmit = (e) => {
        event.preventDefault();

        setTimeout(() => {

        }, 1500)
    }

  return (
    <section className=" py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities and ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"></h3>
            <div className="space-y-8">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    venkateswarareddychalla6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919347375821"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9347375821
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Ongole, Andhra Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-2">
              <h4 className="text-xl font-semibold"><span className="text-primary">Connect</span> With <span>Me</span></h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/venkateswara-reddy-challa" className="" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/venkateswara_reddy_2004" className="" target="_blank">
                  <Instagram />
                </a>
                <a href="https://x.com/venky_reddy_143" className="" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring:primary"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john123@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring:primary"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <input
                  type="textarea"
                  id="message"
                  required
                  placeholder="Hello I'd like to talk about"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring:primary resize-none"
                />
              </div>
              <button
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 "
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
