# Function Chain Calculator App

A dynamic web application that allows users to execute a chain of five mathematical functions. In this setup, the output (y) of each function seamlessly becomes the input (x) for the next function, creating a computational flow that’s easy to visualize and understand.

## Features

- **Function Chaining**: Connects five mathematical functions, where each output becomes the subsequent input, allowing for a continuous computation flow.
- **Smooth SVG Paths**: Utilizes SVG for both straight and curved paths, creating a clear, visually appealing flow between functions.
- **Real-time Calculation**: Dynamically updates results as each function is calculated.
- **Responsive Design**: Adjusts positioning and alignment using refs and window event listeners to maintain an accurate layout on resize.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repo_url>

   ```

2. Install dependencies:

   ```bash
   yarn

   ```

3. Start the application in development mode:
   ```bash
   yarn dev
   ```

## Technologies Used

Only three essential dependencies have been used to keep the application lightweight and efficient:

- **React and React-DOM**: For the core client-side functionality.
- **@fontsource/inter**: For applying the “Inter” font across the application.
  Apart from these dependencies, the app is entirely custom-built, without any additional libraries, providing an optimized experience.

## Implementation Details

# UI and Flow

- **SVG Paths**: Straight and curved SVG paths visually connect each function, enhancing user understanding of the function chain.
- **Refs for Positioning**: Utilizes ref to get the bounding box positions of each element, dynamically updating their positions based on the layout and window resizing to ensure a consistent, organized UI.

# Computation Logic

- **Exponentiation Handling**: In JavaScript, ^ is a bitwise XOR operator rather than an exponent operator. To handle exponents, we replaced ^ with \*\* to achieve correct mathematical calculations.
- **Centralized Computation Function**: The computation is managed by a single function, enabling streamlined updates and accurate results for each step in the function chain.

# Type Safety

-**TypeScript**: Employed for type checking across the application, ensuring reliability and reducing runtime errors.
