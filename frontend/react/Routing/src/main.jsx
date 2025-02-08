import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost, { CreatePostAction } from '../components/CreatePost.jsx'
import App from '../route/App.jsx'
import PostList,{postloader} from '../components/PostList.jsx'  // Remove `{}` from import

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PostList />, loader: postloader },
      { path: '/create-post', element: <CreatePost />,action:CreatePostAction },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
