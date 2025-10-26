export const deleteButtonState = (counter) => {
    document.querySelectorAll('.action-buttons__handle-delete').forEach(deleteButton => {
        deleteButton.disabled = counter === 0;
    })
}