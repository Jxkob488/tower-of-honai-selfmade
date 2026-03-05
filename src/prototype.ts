


        if (typeof from !== "number" || typeof to !== "number" || from === to || stack[from - 1]?.length === 0) {
            alert("Invalid input or move!");
            return;
        }

        if (!fromStack || !toStack) {
            alert("Invalid move! One of the stacks does not exist.");
            return;
        }

        const disk = fromStack[fromStack.length - 1]; // Peek at the top disk
        if (disk === null || disk === undefined) {
            alert("Invalid move! The disk is null or undefined.");
            return;
        }

        if (toStack.length && !(disk < (toStack[toStack.length - 1] ?? Infinity))) {
            alert("Invalid move! You cannot place a larger disk on a smaller one.");
            return;
        }

        toStack.push(fromStack.pop()!); // Pop and push only if valid
    