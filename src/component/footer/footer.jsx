import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold mb-4">Build & Find</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Build your Porsche</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Find Your Porsche</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Find a Porsche Centre</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Online Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign up for News</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Behind the Scenes</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Passion Motorsports</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Porsche Classic</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Visit Porsche Museum</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Porsche Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Latest News</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">At a Glance</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Jobs & Careers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact & Information</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Christophorus - The Porsche Magazine</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
