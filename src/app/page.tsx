'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images, testimonials, calculators, faqs, companies, blogPosts } from '@/constants/content';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt="Financial Planning"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center pt-20 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary-100 text-lg font-heading mb-4 block">Welcome to</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-heading">
              Finocalci
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-6 font-heading">
              भारत का अपना Finance Tools Platform
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto font-body">
              Empowering Indian investors with smart financial calculators and planning tools
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-700 transition-all"
            >
              Start Calculating
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Calculator Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-700 mb-4 font-heading">Smart Financial Tools</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {calculators.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-6 text-secondary-700 font-heading">{category.title}</h3>
                  <div className="space-y-4">
                    {category.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary-600">{tool.name}</h4>
                          <p className="text-sm text-secondary-500">{tool.description}</p>
                        </div>
                        {tool.popular && (
                          <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-700 mb-4 font-heading">What Our Users Say</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary-700">{testimonial.name}</h4>
                    <p className="text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-600 italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-700 mb-4 font-heading">Latest Insights</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <span className="text-sm text-primary-600 font-semibold">{post.category}</span>
                    <h3 className="text-xl font-bold text-secondary-700 mt-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary-500 mt-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-secondary-400 text-sm">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-700 mb-4 font-heading">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-6"
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-secondary-700 mb-2">{faq.question}</h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-700 mb-4 font-heading">Trusted By Leading Banks</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-bold text-secondary-400"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Stay Updated</h2>
            <p className="text-primary-100 mb-8">Get the latest updates on financial tools and market insights.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
