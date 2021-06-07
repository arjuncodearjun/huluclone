This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



---------------------------------------------------------------------------
#### Installing next js app
npm i create-next-app

👉 npx create-next-app hulu-clone

### Delete Previous package-lock.json
npm install


#### Setting up tailwind
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Create your configuration files
👉  npx tailwindcss init -p
 
# Add this below 👇 to remove the unused css during production in ./tailwind.config.js purge[]

👉 './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'

# Include Tailwind in your CSS
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;



### To give asset domains access 
Create a file: next.config.js
// next.config.js
module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
}


#### Add heroicons into your project

npm install @heroicons/react


##### Create a Utility folder --- util

create a requests.js in that folder

##### Create .env.local environment variable

##### In-routing 
import {useRouter} from "next/router"

#### Error debug when wasn't able to do padding and margin to child elements

https://github.com/tailwindlabs/tailwindcss/issues/1930


// tailwind.config.js
module.exports = {
  variants: {
    // ...
   margin: ['responsive', 'hover', 'first'],
  }
}