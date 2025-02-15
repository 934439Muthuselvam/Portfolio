"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";
import { Loadinganimation } from "@/components/Loadinganimation";
import Image from "next/image";
import { SiVercel } from "react-icons/si";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // 🔥 Track loading state

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formState.name) newErrors.name = "Name is required";
    if (!formState.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Invalid email format";
    if (!formState.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        toast.success("Your message has been sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-8 flex justify-center gap-6">
                <motion.a
                  href="https://github.com/934439Muthuselvam"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="h-6 w-6 text-gray-500 hover:text-black" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muthuselvam73/"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin className="h-6 w-6 text-gray-500 hover:text-blue-600" />
                </motion.a>
                <motion.a
                  href="https://vercel.com/muthuselvam123s-projects"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <SiVercel className="h-6 w-6 text-gray-500 hover:text-black" />
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>





      

      {/* 🔥 Loading Overlay */}
      {loading && (
        <div className=" fixed inset-0 bg-[#00000056] flex items-center justify-center z-50">
          <Image src={"/loading.gif"} alt="" width={100} height={100} />
        </div>
      )}
    </section>
  );
}
