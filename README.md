## Frontend Developer Technical Test

### Objective

Your primary goal is to develop a frontend application that interfaces with the Verifik OCR service to scan documents and display the scan results.

### Technical Requirements

1. Use either Angular or React as the frontend framework.
2. Use TypeScript for development.
3. The application should be compiled and hosted on a cloud platform for testing. (For instance: Netlify, Vercel, or Firebase Hosting, or any of your choice)
4. API keys provided for integration:
   - _OPENAI_KEY_: `**********`
   - _VERIFIK_KEY_: `**************`
5. Endpoint for backend: https://api.verifik.co
6. OCR endpoints: [
   /v2/ocr/scan-prompt
   /v2/ocr/scan-zero
   /v2/ocr/scan-studio
   ]
   params: {
   "image": "https://cdn.verifik.co/ocr/samples/cc2.jpg"
   }

### Features

1. _List of OCR Scans_:

   - Display a list showing the types of OCR scans available (`scan-prompt`, `scan-zero`, `scan-studio`).
   - Clicking on a scan type should allow the user to upload a document for that particular scan.

2. _Document Upload Modal_:

   - Develop a modal that opens when a user clicks on a scan type.
   - The modal should allow users to upload a document (image).
   - Upon uploading, the application should call the respective endpoint of the Verifik API to get the scan results.

3. _Display Scan Details_:
   - After a scan, redirect users to a results page showing the details of the scan.
   - If the user accesses the list of previous scans, they should be able to click on an individual scan to view its details.
   - If the scan result returns data like coordinates, utilize this data to highlight or annotate the scanned area on the displayed image.

### Steps to Complete

1. _Setup_:

   - Bootstrap an application using Create React App (with TypeScript) or Angular CLI.
   - Set up the necessary routing and state management solutions (e.g., React Router and Redux for React, or Angular Routing and NgRx for Angular).

2. _UI Development_:

   - Design a clean and intuitive interface for displaying the list of scan types.
   - Implement the document upload modal with appropriate UI feedback (like spinners) for async operations.
   - Develop the scan results page to display the scan details, including annotations based on coordinates (if returned).

3. _API Integration_:

   - Use the provided API keys and endpoints to fetch scan types and post document scans.
   - Handle possible errors and provide feedback to users.

4. _Cloud Deployment_:
   - Compile and build the project for production.
   - Deploy the application to a cloud platform of your choice.
   - Share the link for testing.

### Evaluation Criteria

- Code Quality: Efficient, readable, and organized code.
- UI/UX: Intuitive design and smooth user experience.
- Error Handling: Robust handling of potential errors or exceptions.
- Completion: All features are fully implemented and functional.

### Estimated Time of Development:

- _Setup_: 1 hour
- _UI Development_: 3-4 hours
- _API Integration_: 2-3 hours
- _Cloud Deployment_: 1 hour
- _Testing & Iteration_: 2 hours
- _Total_: 9-11 hours (Consider giving 2 days for the task completion to account for uncertainties.)

_Note_: Ensure you treat the provided API keys with utmost confidentiality and not expose them in client-side code. Always use environment variables or similar mechanisms to keep such details secure.
