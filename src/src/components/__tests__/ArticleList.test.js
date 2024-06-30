import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../ArticleList';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders article list', async () => {
  render(<ArticleList />);

  expect(
    await screen.findByText('NY Times Most Popular Articles'),
  ).toBeInTheDocument();

  const articles = await screen.findAllByRole('heading', { level: 5 });
  expect(articles.length).toBeGreaterThan(0);
});

test('renders article details on click', async () => {
  render(<ArticleList />);

  expect(
    await screen.findByText('NY Times Most Popular Articles'),
  ).toBeInTheDocument();

  const articles = await screen.findAllByRole('heading', { level: 5 });
  articles[0].click();

  expect(await screen.findByText('Read More')).toBeInTheDocument();
});
