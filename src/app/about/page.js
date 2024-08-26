"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function About() {
  // Scroll Animation Effect
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-element");

    const elementInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - VisaExperts</title>
        <meta name="description" content="Learn more about VisaExperts and our mission to provide top visa services." />
      </Head>
      <div className="bg-gray-50 px-5 md:px-15 lg:px-20 text-gray-900 min-h-screen">
        <div className="container mx-auto py-12 px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Welcome to VisaExperts! We simplify your visa process with expertise and dedication to ensure your journey is smooth.
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            className="flex flex-col md:flex-row items-center mb-12 scroll-element"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Journey</h2>
              <p className="text-gray-700">
                Since 2010, VisaExperts has been providing reliable visa services. Our goal is to make the application process as easy as possible.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* <Image
                src="https://via.placeholder.com/500x300"
                alt="Our journey"
                className="rounded-lg shadow-md"
              /> */}
              <img src="/img/VisaMiniCard.avif" className='w-[50%]' height={200} width={200} alt='wait for '/>
            </div>
          </motion.div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              className="scroll-element"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted visa service provider, known for our expertise and customer-focused approach.
              </p>
            </motion.div>
            <motion.div
              className="scroll-element"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional visa services with efficiency and accuracy, making every client&apos;s journey easier.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            className="p-6 bg-blue-100 rounded-lg mb-12 scroll-element"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Core Values</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Integrity:</strong> We are transparent and honest in all our dealings.</li>
              <li><strong>Excellence:</strong> We strive to deliver the best service possible.</li>
              <li><strong>Customer Focus:</strong> We put our clients’ needs at the center of everything we do.</li>
            </ul>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="text-center scroll-element"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-6">Meet Our Team</h3>
            <p className="text-gray-700 max-w-xl mx-auto mb-8">
              Our team of experts is dedicated to providing top-notch visa services and assisting you with every step of the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md w-60">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team member"
                  className="rounded-full mb-4"
                />
                <h4 className="text-blue-600 text-lg font-medium">John Doe</h4>
                <p className="text-gray-700">Founder & CEO</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md w-60">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team member"
                  className="rounded-full mb-4"
                />
                <h4 className="text-blue-600 text-lg font-medium">Jane Smith</h4>
                <p className="text-gray-700">Visa Consultant</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md w-60">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team member"
                  className="rounded-full mb-4"
                />
                <h4 className="text-blue-600 text-lg font-medium">Mike Johnson</h4>
                <p className="text-gray-700">Client Relations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
