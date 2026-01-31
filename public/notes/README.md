# EterniEdu Study Notes Repository

Welcome to the central repository for your copyrighted study materials.

## How to add actual PDF files:

1.  **Prepare your PDF**: Ensure your PDF is optimized for web (compressed) and contains the EterniEdu watermark/copyright notice.
2.  **Naming Convention**: Use the following naming convention (recommended, but you can change it in `src/data/gradesData.js`):
    - `10th_Science_Ch1.pdf`
    - `11th_Physics_Ch1.pdf`
    - `neet_Biology_Summary.pdf`
3.  **Upload**: Place your PDF files directly into this directory (`public/notes/`).
4.  **Update Data**: Open `src/data/gradesData.js` and update the `pdfUrl` property for the corresponding note:
    ```javascript
    pdfUrl: '/notes/your_file_name.pdf'
    ```

## Currently Configured Demos:
- **Class 10th Chapter 1**: Currently points to a working remote PDF for demonstration.
- **Class 11th Chapter 1**: Currently points to a working remote PDF for demonstration.
- **Class 12th Chapter 1**: Currently points to a working remote PDF for demonstration.

The frontend is already configured to show a "Preview" modal and a "Download" button for any note that has a valid `pdfUrl`. If the `pdfUrl` is `#`, it will show a "Coming Soon" notification.
