# Web3Bit - Modern Next.js Application

A modern web application built with Next.js 14, TypeScript, and Tailwind CSS, featuring a beautiful UI, dark mode support, and interactive elements.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)
![GSAP](https://img.shields.io/badge/GSAP-3-green)

## ✨ Features

- 🌓 Dark/Light mode with system preference support
- 🎨 Modern and responsive design with Tailwind CSS
- 🖱️ Custom mouse cursor with GSAP animations
- 📱 Mobile-friendly navigation with sidebar
- ⚡ Fast page loads with Next.js 14 App Router
- 💪 Type-safe development with TypeScript
- 🎯 Interactive UI elements and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
```

To start the production server:

```bash
yarn start
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **State Management**: React Context
- **Package Manager**: Yarn
- **Development Tools**: ESLint, Prettier

## 📁 Project Structure

```
├── public/             # Static files
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable components
│   ├── providers/     # Context providers
│   └── styles/        # Global styles
├── tailwind.config.ts # Tailwind configuration
└── package.json       # Project dependencies
```

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript compiler check

## 🎨 Customization

### Theme

The theme can be customized in `tailwind.config.ts`:

- Colors
- Typography
- Spacing
- Breakpoints

### Components

All reusable components are in the `src/components` directory:

- `Navbar` - Top navigation bar
- `Sidebar` - Side navigation menu
- `ThemeToggle` - Dark/Light mode switch
- `MouseCursor` - Custom cursor animation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Daniel Ancuta - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- GSAP team for the powerful animation library
