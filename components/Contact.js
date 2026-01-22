'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiPhone, FiMapPin, FiGlobe } from 'react-icons/fi';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I\'ll get back to you within 24 hours.');
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900 dark:text-white">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  <FiSend />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-300">Feel free to reach out through any of these channels</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-lg flex items-center justify-center text-[#00B894] dark:text-[#00B894] text-xl flex-shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">+91 9079393821</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Available Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 dark:bg-[#FF6B35]/20 rounded-lg flex items-center justify-center text-[#FF6B35] dark:text-[#FF6B35] text-xl flex-shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-700 dark:text-gray-300">vikashjain2205@gmail.com</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Response within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-lg flex items-center justify-center text-[#00B894] dark:text-[#00B894] text-xl flex-shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Gurgaon, India</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Open to remote and hybrid opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-[#FF6B35]">Send me a message</h3>
            
            {submitStatus && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitStatus === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-center gap-2">
                  {submitStatus === 'success' ? <FiCheck className="text-green-600 dark:text-green-400" /> : <FiAlertCircle className="text-red-600 dark:text-red-400" />}
                  <span>{submitMessage}</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                I'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}