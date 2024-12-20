// kadan's Algorithm
// its time complexity is o(n)

#include <iostream>
#include <climits>

using namespace std;
   
   void maxSubarray(int arr[] , int n){
    int maxSum =INT_MIN;
    int currSum =0;
    for (int i =0; i<n ; i++){
        currSum +=arr[i];
        maxSum =max(currSum , maxSum);
        if(currSum <0){
            currSum =0;
        }
    }
    cout << "max sub array is "<<maxSum <<endl;
   }


int main () {
    int arr[]= {2,-3,6,-5,4,2};
    int n= sizeof(arr)/sizeof(int);
     maxSubarray(arr,n);
    
    return 0;
}