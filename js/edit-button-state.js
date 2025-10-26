export const editButtonState = (counter) => {
    document.querySelectorAll('.action-buttons__handle-edit').forEach(eachEditButton => {
    eachEditButton.disabled = counter !== 1
    })
}