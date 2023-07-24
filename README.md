This app shows an issue using `basePath` where a page redirects to another page and then if you navigate to the page that made the redirect it will duplicate the `basePath` in the browser URL.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Open [http://localhost:3000/d/service-hub](http://localhost:3000/d/service-hub), you'll be redirected to [http://localhost:3000/d/service-hub/frontpage](http://localhost:3000/d/service-hub/frontpage)
- Click one of the bottom buttons to navigate back to [http://localhost:3000/d/service-hub](http://localhost:3000/d/service-hub), one uses `Link` and the other uses `useRouter().push()`
- The browser URL switches from [http://localhost:3000/d/service-hub](http://localhost:3000/d/service-hub) to [http://localhost:3000/d/service-hub/d/service-hub/frontpage](http://localhost:3000/d/service-hub/d/service-hub/frontpage) instead of [http://localhost:3000/d/service-hub/frontpage](http://localhost:3000/d/service-hub/frontpage) after the redirect.
