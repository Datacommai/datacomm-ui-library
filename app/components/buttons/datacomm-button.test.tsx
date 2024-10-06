// DatacommButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the 'toBeInTheDocument' matcher
import { ButtonTypes, DatacommButton } from './datacomm-button';

describe('DatacommButton', () => {
 test('renders the button with the correct title and default style', () => {
  render(<DatacommButton type={ButtonTypes.PRIMARY} title="Primary Button" />);

  // Check if the button is in the document
  const buttonElement = screen.getByText('Primary Button');
  expect(buttonElement).toBeInTheDocument();

  // Check if the button has the correct default styles
  expect(buttonElement).toHaveClass('bg-[#6AB9BE]');
 });

 test('calls the onClick function when clicked', () => {
  const handleClick = jest.fn();
  render(
   <DatacommButton
    type={ButtonTypes.PRIMARY}
    title="Clickable Button"
    onClick={handleClick}
   />
  );

  const buttonElement = screen.getByText('Clickable Button');

  // Simulate a click event
  fireEvent.click(buttonElement);

  // Ensure the click handler was called
  expect(handleClick).toHaveBeenCalledTimes(1);
 });

 test('applies the correct style based on the button type', () => {
  render(
   <DatacommButton type={ButtonTypes.SECONDARY} title="Secondary Button" />
  );

  const buttonElement = screen.getByText('Secondary Button');

  // Check if the button is in the document
  expect(buttonElement).toBeInTheDocument();

  // Since both PRIMARY and SECONDARY buttons have the same styles,
  // we can adjust this test case if you change the style later.
  expect(buttonElement).toHaveClass('bg-[#6AB9BE]');
 });
});
