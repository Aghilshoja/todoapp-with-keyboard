export const copyButtonState = (counter) => {
    document.querySelectorAll('.action-buttons__handle-copy').forEach(copyButton => {
        copyButton.disabled = counter !== 1
    })
}