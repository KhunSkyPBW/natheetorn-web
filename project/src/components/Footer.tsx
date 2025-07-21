import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-blue-500/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Natheetorn Marketplace
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              The future of e-commerce is here. Join millions of users discovering amazing products 
              from verified sellers in our cutting-edge marketplace platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Sell on Natheetorn</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Press & News</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-blue-500/30 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">support@natheetorn.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">+66 (0) 123-456-789</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500/30 mt-8 pt-6 text-center">
          <p className="text-slate-400">
            © 2025 Natheetorn Marketplace. All rights reserved. | 
            <a href="#" className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-blue-400 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;