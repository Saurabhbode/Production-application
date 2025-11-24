document.addEventListener('DOMContentLoaded', () => {
    const departmentSelect = document.getElementById('department-select');
    const projectSelect = document.getElementById('project-select');
    const loadFieldsBtn = document.getElementById('loadFieldsBtn');
    const entryFormContainer = document.getElementById('entryFormContainer');
    const promptMessage = document.getElementById('promptMessage');

    // Function to show the prompt and hide the form
    const hideForm = () => {
        entryFormContainer.classList.add('hidden-content');
        promptMessage.classList.remove('hidden-content');
    };

    // Function to hide the prompt and show the form
    const showForm = () => {
        entryFormContainer.classList.remove('hidden-content');
        promptMessage.classList.add('hidden-content');
    };

    // Initial State: Hide the form
    hideForm();

    // Attach the logic to the Load Entry Fields button
    loadFieldsBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const deptValue = departmentSelect.value;
        const projectValue = projectSelect.value;

        if (deptValue && projectValue) {
            // Both are selected, show the form
            showForm();
            // In a real application, you would make an AJAX call here 
            // to load fields specific to the selected department and project.
            console.log(`Loading fields for Dept: ${deptValue} and Project: ${projectValue}`);
        
        } else {
            // One or both are missing, hide the form and show the prompt
            hideForm();
            alert('Please select both a Department and a Project.');
        }
    });

    // Optional: Reset form visibility if user changes a selection after loading
    departmentSelect.addEventListener('change', hideForm);
    projectSelect.addEventListener('change', hideForm);
});