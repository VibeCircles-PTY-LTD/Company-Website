# VibeCircles Company Website

Welcome to the official website repository for VibeCircles PTY LTD.

## About

VibeCircles is a forward-thinking company dedicated to delivering exceptional solutions that drive business growth and innovation.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Interactive Navigation**: Mobile-friendly hamburger menu
- **Contact Form**: Easy way for clients to get in touch
- **Service Showcase**: Highlighting our core offerings
- **About Section**: Company information and values

## Getting Started

### Prerequisites

No build tools or dependencies required. This is a static HTML website.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VibeCircles-PTY-LTD/Company-Website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Company-Website
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. Visit `http://localhost:8000` in your browser

## File Structure

```
Company-Website/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Sections

- **Home**: Hero section with company tagline
- **About**: Information about VibeCircles
- **Services**: Our core service offerings
- **Contact**: Contact form and company details
- **Footer**: Quick links and company information

## Customization

### Colors

The color scheme can be customized in `styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --dark-color: #1f2937;
    --light-color: #f9fafb;
    --text-color: #374151;
}
```

### Content

Edit `index.html` to update:
- Company information
- Services
- Contact details
- Footer links

## Deployment

This website can be deployed to any static hosting service:

- **GitHub Pages**: Enable in repository settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Import the repository
- **AWS S3**: Upload files to a bucket
- **Traditional hosting**: Upload via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 VibeCircles PTY LTD. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@vibecircles.com
- Phone: +1 (555) 123-4567