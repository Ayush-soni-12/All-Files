//  reverse an array without space 
#include <iostream>
using namespace std;
void print(int arr[], int n){
     for (int i =0; i<n ;i++){
          cout << arr[i] <<endl;
     }
}
int main (){
     int arr[]={2,6,3,5,4};
     int n = sizeof(arr)/sizeof(int);
     int start = 0, end=n-1;
     while(start < end){
     int temp = arr[start];// we can also use swap function (swap (arr[start],arr[end]))
     arr[start] =arr[end];
     arr[end] =temp;
     start++;
     end--;
     }

     print(arr ,n);
     
     return 0;

}