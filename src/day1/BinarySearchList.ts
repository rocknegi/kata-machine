export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;

    do {
        let mid = Math.floor((low + high) / 2);
        let value = haystack[mid];

        if (value === needle)
            return true;
        if (value > needle) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    } while (low < high);


    return false;
}