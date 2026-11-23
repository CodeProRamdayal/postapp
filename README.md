# Post App

A React post-list application built with Vite.

## Features

- View a list of posts
- Navigate between the post list and the new-post form
- Add a post by submitting the new-post form

## Getting Started
<img width="1472" height="757" alt="image" src="https://github.com/user-attachments/assets/f35f20e4-b590-4d30-b1c7-622923c701c5" />


### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

- `src/main.jsx` - application routes
- `src/routes/RootLayout.jsx` - shared app header and nested route outlet
- `src/App.jsx` - post-list route
- `src/component/MainHeader.jsx` - app header and create-post link
- `src/component/PostList.jsx` - post collection
- `src/component/Post.jsx` - individual post card
- `src/component/NewPost.jsx` - new-post form
