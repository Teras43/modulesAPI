export function toggleNightMode() {
    if (document.body.classList.contains('bodyChange1')) {
        document.body.removeAttribute('bodyChange1');
        document.body.className = 'bodyChange2';
    } else {
        document.body.removeAttribute('bodyChange2');
        document.body.className = 'bodyChange1';
    };
};