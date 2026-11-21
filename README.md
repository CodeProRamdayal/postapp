# Post App

A React post-list application built with Vite.

## Features

- View a list of posts
- Open a modal to create a new post
- Add a post by submitting the new-post form
- Close the modal using the backdrop or after submission

## Getting Started

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

- `src/App.jsx` - application state and modal visibility
- `src/component/MainHeader.jsx` - app header and create-post button
- `src/component/PostList.jsx` - post collection and post submission logic
- `src/component/Post.jsx` - individual post card
- `src/component/NewPost.jsx` - new-post form
- `src/component/Modal.jsx` - modal and backdrop
