export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

// first have to check if the list is oredered, if you wanna
// search a list, applicable more for the coming algorithms.
// this is just the base.