// src/__tests__/App.test.js
// Mock the posts module
jest.mock('../components/data/posts', () => [
  {
    id: 1,
    title: "Mock Post 1",
    content: "Mock content 1"
  },
  {
    id: 2,
    title: "Mock Post 2",
    content: "Mock content 2"
  }
]);

import App from '../components/App';

