import { render, screen } from '@testing-library/react'
import HomePage from '../pages/HomePage'
import { expect, test } from 'vitest'

test( 'render test', () => {
    const result = render ( <HomePage /> )
    const title = result.getByLabelText('Home')
    expect( title ).toBeInTheDocument()
} )
