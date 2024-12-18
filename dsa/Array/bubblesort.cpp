#include <iostream>
using namespace std;
  
  void bubblesort(int arr[], int n){
    for (int i = 0;i<n-1;i++){
        for (int j= 0; j<n-i-1;j++){
            if(arr[j]> arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
  }
  
 int main (){
    int arr[] = {5,4,1,2,3};
    int n = sizeof(arr)/sizeof(int);
    bubblesort(arr, n);
    cout << "array is =";
    for (int i = 0; i<n; i++){
        cout << arr[i];
    }
    return 0;
 }

//  time complexity of bubble sort is O (n ki power 2)