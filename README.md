# Mary's Daycare

Website for Mary's Daycare, a licensed family child care home in Foster City, CA: https://marykoptidaycare.com

Built with React and Vite, deployed on Netlify.

## Development

```bash
npm install
npm run dev
```

## Updating the site

Almost everything a visitor reads (hours, phone, address, holidays, About text, highlights) lives in [`src/content.js`](src/content.js).

- **Photos:** put images in `public/photos/` and list them in the `photos` array in `content.js`. A gallery section appears automatically.
- **License number:** set `licenseNumber` in `content.js` and it shows in the footer.
- **Enrollment packet:** replace `public/daycare-contract.pdf`.
- **Contact form:** messages are sent through [EmailJS](https://www.emailjs.com/) (keys in `src/components/ContactUs.jsx`).
