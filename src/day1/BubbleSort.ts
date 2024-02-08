const swap = (arr: number[], num1: number, num2: number): void => {
    let temp = arr[num2];
    arr[num2] = arr[num1];
    arr[num1] = temp;
}
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1])
                swap(arr, j, j + 1);
        }
    }
}