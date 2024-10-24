import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the 'toBeInTheDocument' matcher
import { StepButton, StepButtonTypes } from './datacomm-step-button';

// Define the type for the step change handler
type HandleStepChange = (step: number) => void;

describe('StepButton Component', () => {
 let handleStepChange: jest.Mock<HandleStepChange>;

 beforeEach(() => {
  handleStepChange = jest.fn(); // Mock the handler function
 });

 it('renders correctly with the forward icon and correct styles', () => {
  render(
   <StepButton type={StepButtonTypes.FORWARD} onStepChange={handleStepChange} />
  );
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(screen.getByAltText('Forward')).toBeInTheDocument();
  expect(button).toHaveClass(
   'w-fit h-fit bg-transparent border-none p-0 rounded-full'
  );
 });

 it('renders correctly with the back icon and correct styles', () => {
  render(
   <StepButton type={StepButtonTypes.BACK} onStepChange={handleStepChange} />
  );
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(screen.getByAltText('Back')).toBeInTheDocument();
  expect(button).toHaveClass(
   'w-fit h-fit bg-transparent border-none p-0 rounded-full'
  );
 });

 it('calls onStepChange with -1 when clicking back', () => {
  render(
   <StepButton type={StepButtonTypes.BACK} onStepChange={handleStepChange} />
  );
  const button = screen.getByRole('button');

  fireEvent.click(button); // Simulate click event
  expect(handleStepChange).toHaveBeenCalledWith(-1); // Expect -1 for BACK button
 });

 it('calls onStepChange with 1 when clicking forward', () => {
  render(
   <StepButton type={StepButtonTypes.FORWARD} onStepChange={handleStepChange} />
  );
  const button = screen.getByRole('button');

  fireEvent.click(button); // Simulate click event
  expect(handleStepChange).toHaveBeenCalledWith(1); // Expect 1 for FORWARD button
 });
});
