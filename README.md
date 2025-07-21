# Natheetorn Marketplace

A modern, full-stack e-commerce marketplace built with React, TypeScript, and Supabase.

## 🚀 Features

- **Modern UI/UX**: Sleek design with Tailwind CSS and glass morphism effects
- **Full Authentication**: Sign up, sign in, and user management
- **Product Management**: Add, edit, and delete products (Admin)
- **Shopping Cart**: Add to cart, manage quantities, and checkout
- **Categories**: Organize products by categories
- **Responsive Design**: Works perfectly on all devices
- **Real-time Updates**: Powered by Supabase real-time subscriptions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd natheetorn-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your Supabase credentials in `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

The application includes SQL migrations in the `supabase/migrations` folder that will set up:

- User profiles and authentication
- Product categories and products
- Shopping cart functionality
- Order management
- Product reviews
- Sample data for testing

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Update your `.env` file with these credentials
4. The database schema will be automatically applied

### Demo Mode

The application works in demo mode without Supabase configuration, showing:
- Mock product data
- Simulated authentication
- Local cart management
- Limited admin functionality

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard
4. Enable form handling for contact forms

### Other Platforms

The application can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📱 Features Overview

### For Customers
- Browse products by category
- Search functionality
- Add items to cart
- User authentication
- Order history (with Supabase)

### For Sellers/Admins
- Product management dashboard
- Add/edit/delete products
- View sales statistics
- Manage inventory
- User management

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Authenticated routes protection
- Input validation and sanitization
- Secure API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify your Supabase configuration
3. Ensure all environment variables are set
4. Check the network tab for API errors

For additional help, please open an issue on GitHub.

## 🎯 Roadmap

- [ ] Payment integration (Stripe)
- [ ] Advanced search and filtering
- [ ] Product recommendations
- [ ] Multi-vendor support
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Social media integration

---

Built with ❤️ by the Natheetorn team