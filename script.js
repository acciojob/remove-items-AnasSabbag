document.querySelector('input[type="button"]').addEventListener('click', function() {
    
    let dropdown = document.getElementById('colorSelect');
    let selectedIndex = dropdown.selectedIndex;
    if (selectedIndex !== -1) {
        dropdown.remove(selectedIndex);
    }
});