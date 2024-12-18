
//  second method its time complexity is better than first one  time complexity is o(n ki power 2)
#include <iostream>
#include <climits>

using namespace std;
   
   void maxSubarray(int arr[] , int n){
    int maxSum =INT_MIN;
    for (int start = 0 ; start<n; start++){
        int currSum =0;
        for (int end = start; end<n; end++){
            
            currSum += arr[end];
        
        
            maxSum =max(maxSum,currSum);
        }
           cout << endl;
    }
    cout << "max sub array is "<<maxSum <<endl;
   }


int main () {
    int arr[]= {2,-3,6,-5,4,2};
    int n= sizeof(arr)/sizeof(int);
     maxSubarray(arr,n);
    
    return 0;
}