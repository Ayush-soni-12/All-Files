// space complexity is O(1)
// time complexity is O(nlogn)
// worst timeComplexity is O(N^2)

#include <iostream>
using namespace std;
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << endl;
    }
}
int partition(int arr[], int si, int ei)
{
    int i = si - 1;
    int pivot = arr[ei];
    for (int j = si; j < ei; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    i++;
    swap(arr[i], arr[ei]);
    // pivotIndx =i
    return i;
}

void quickSort(int arr[], int si, int ei)
{
    if (si >= ei)
    {
        return;
    }

    int pivotIndx = partition(arr, si, ei);
    quickSort(arr, si, pivotIndx - 1); // left half
    quickSort(arr, pivotIndx + 1, ei); // right half
}

int main()
{
    int arr[6] = {6, 3, 7, 5, 2, 4};
    int n = 6;
    quickSort(arr, 0, n - 1);
    printArray(arr, n);
}