document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
}
import { Stack } from './stack.js';
let undoStack = new Stack();
let redoStack = new Stack();
const saveButton = document.getElementById("saveButton");
const undoButton = document.getElementById("undoButton");
const redoButton = document.getElementById("redoButton");
const textareaValue = document.getElementById("textareaValue");


saveButton.onclick = function () {
    undoStack.push(textareaValue.value);
    console.log("undo ----", undoStack.items);

}

undoButton.onclick = function () {
    const redoItem = undoStack.pop();
    if (redoItem !== "Stack is empty") {
        redoStack.push(redoItem);
        const previousValue = undoStack.peek();
        if (previousValue !== "Stack is empty") {
            console.log("redo ----", redoStack.items);
            console.log("undo ----", undoStack.items);
            textareaValue.value = previousValue;
        }
    } else {
        textareaValue.value = '';
    }
}

redoButton.onclick = function () {
    const previousValue = redoStack.peek();
    if (previousValue !== "Stack is empty") {
        textareaValue.value = previousValue;
        const undoItem = redoStack.pop();
        console.log("redo ----", redoStack.items);
        console.log("undo ----", undoStack.items);
        undoStack.push(undoItem);
    }
}
