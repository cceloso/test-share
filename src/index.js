// HTML code for the component
const componentHtml = `
    <button class="icon-button" onclick="redirectToBuiltaMart()">
        <!-- <img src="./assets/builtamart-logo.svg" /> -->
        <span>
            Add to cart
        </span>
    </button>
`;

// CSS code for the component
const componentCss = `
    .icon-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        background-color: #FB7511; 
        color: #FAFAFA; 
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    .icon-button:hover {
        background-color: #D55D04;
    }

    .icon-button img {
        height: 16px;
        margin-right: 10px;
    }

    .icon-button span {
        font-size: 16px;
    }
`;

// Combine HTML, CSS, and JavaScript
const componentCode = `
    <script src="script.js" defer></script>
    <style>${componentCss}</style>
    ${componentHtml}
`;

// Insert the component code into the document
document.write(componentCode);
