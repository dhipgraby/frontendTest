## GUIDELINES

You should spend no more than 2 hours undertaking this test make as much progress as
you feel you can within the time allowed; you are not required to produce a final product.
Your code will be reviewed on a system with the following installed:

• Node v18

If you have any specific comments or instructions regarding your code, please also
include them in the project readme file.

## WHAT SHOULD YOU DO

Given the current website (https://demos.inbonis.com/coach-es-informa/), it is
requested to layout the home page as faithfully as possible.
It must be able to fill in the form fields (NIF and sector of activity), with its corresponding
validation and return the API data in flat format.
There is no need to layout another page, it will be enough to display them on the
screen.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First install all libraries:

```bash
npm install
# or
yarn 
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

# React Component Documentation

This documentation provides an overview of a React component used in a web application. The component is responsible for rendering a form that allows users to evaluate and improve their business by selecting an activity sector.

## Usage

The `Form` component is responsible for rendering the form, allowing users to input their NIF (Tax ID) and select an activity sector. It provides a predictive search feature for the activity sector.

## Component Structure

The component consists of two main files:

1. `Form.js`: This file contains the `Form` component responsible for rendering the user interface.
2. `useForm.js`: This file contains the `useForm` custom hook, which handles the form's state and user interactions.

## Props

The `Form` component accepts the following prop:

- `activities` (Array of ACTIVITY objects): An array of activity sectors to be used for predictive search.

## Form Component

The `Form` component is a functional React component that renders the main form for the user to input data. It contains the following elements:

- Input field for NIF (Tax ID).
- Predictive search input field for selecting an activity sector.
- Predictive search results (activity list) when the input field is active.
- A "Continuar" (Continue) button to submit the form.

## Form Hooks

The `useForm` custom hook handles the form's state and user interactions. It provides the following functions and states:

- `handleNifChange`: Function to handle changes in the NIF (Tax ID) input field.
- `handleActivitySelect`: Function to handle the selection of an activity sector.
- `handleActivityInputChange`: Function to handle changes in the activity sector input field.
- `selectedActivity`: State to store the selected activity sector.
- `nif`: State to store the NIF (Tax ID) input.
- `searchInput`: State to store the user's input in the activity sector field.
- `filteredActivities`: State to store the filtered activity sectors based on user input.
- `isActivityListVisible`: State to control the visibility of the predictive search results.

## Conclusion

This React component and custom hook allow users to input their NIF and select an activity sector. The predictive search feature enhances user experience by suggesting activity sectors as users type. You can integrate this component into your React application to gather essential information for business evaluation and improvement.

