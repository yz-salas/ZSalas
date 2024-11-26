import React from 'react';

const Design = () => {
    return (
        <>

            {/* Hero Section */}
            <section  className="relative flex justify-center items-center bg-black text-white py-24 md:py-32 text-center h-screen">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container px-6 md:px-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Digital Presence</h1>
                    <p className="text-lg mb-6">We create unique experiences that connect your brand with your audience.</p>
                    <a href="#services" className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                        View Services
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white flex justify-center items-center text-center h-screen">
                <div className="container px-6 md:px-12">
                    <h2 className="text-3xl font-bold text-black mb-10">Our Web Design Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-black mb-4">Custom Web Design</h3>
                            <p className="text-black mb-6">We create visually appealing and functional websites that reflect your brand's identity.</p>
                            <a href="#" className="text-cyan-500 hover:text-cyan-600 font-semibold">Learn More</a>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-black mb-4">Responsive Web Development</h3>
                            <p className="text-black mb-6">We ensure your website looks amazing on any device, from mobile to desktop.</p>
                            <a href="#" className="text-cyan-500 hover:text-cyan-600 font-semibold">Learn More</a>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-black mb-4">SEO Optimization</h3>
                            <p className="text-black mb-6">Boost your visibility in search engines with our advanced SEO strategies.</p>
                            <a href="#" className="text-cyan-500 hover:text-cyan-600 font-semibold">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-black flex justify-center items-center py-24 text-center text-white h-screen">
                <div className="container px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
                    <div className="flex justify-center space-x-12">
                        <div className="max-w-xs bg-white p-6 rounded-xl shadow-lg">
                            <p className="text-lg text-black mb-4">"Thanks to their amazing web design, our site became much more attractive and functional. Highly recommended!"</p>
                            <div className="text-lg font-semibold text-black">Maria Lopez</div>
                            <p className="text-sm text-gray-500">Creative Director</p>
                        </div>
                        <div className="max-w-xs bg-white p-6 rounded-xl shadow-lg">
                            <p className="text-lg text-black mb-4">"Our website traffic has significantly increased thanks to the design and SEO improvements. Excellent work!"</p>
                            <div className="text-lg font-semibold text-black">Carlos Sanchez</div>
                            <p className="text-sm text-gray-500">CEO - Digital Agency</p>
                        </div>
                        <div className="max-w-xs bg-white p-6 rounded-xl shadow-lg">
                            <p className="text-lg text-black mb-4">"The web design team created an excellent user experience, and our customers noticed the difference!"</p>
                            <div className="text-lg font-semibold text-black">Ana Torres</div>
                            <p className="text-sm text-gray-500">Founder - Online Store</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 flex justify-center items-center bg-white text-center text-black h-[70vh]">
                <div className="container px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-6">Start Your Project with Us!</h2>
                    <p className="text-lg mb-8">We're ready to take your idea to the next level. Contact us for a free consultation.</p>
                    <a href="mailto:contact@yourwebsite.com" className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container px-6 text-center">
                    <p>&copy; 2024 Creative Web Design. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Design;