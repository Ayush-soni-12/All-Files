// note : pick the smallest and put in the beginning
//  time complexity is O(n ki power 2)
 #include <iostream>
 using namespace std;
   void selectionSort(int arr[], int n){
    for (int i =0; i<n-1;i++){
        int minIdx = i;
        for (int j=i;j<n;j++){
            if (arr[j]<arr[minIdx]){
                minIdx =j;
            }
            swap(arr[i],arr[minIdx]);
        }
    }
   }
  
  int main (){
    int arr[] ={5,4,1,3,2};
    int n = sizeof(arr)/sizeof(int);
     selectionSort(arr,n);
     cout <<"array is ";
     for (int i = 0; i<n; i++){
        cout << arr[i]<< endl;
     }
     return 0; 
  }