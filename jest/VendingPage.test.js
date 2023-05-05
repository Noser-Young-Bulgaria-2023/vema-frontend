/**
 * @jest-environment jsdom
 */


import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VendingPage from '../src/components/pages/VendingPage/VendingPage.tsx'

test('renders component', () => {
  render(<VendingPage />)
  expect(screen.getByText('VEMA')).toBeInTheDocument()
})
