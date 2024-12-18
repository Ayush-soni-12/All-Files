//print out the sum of the numbers in the second row of the nums array


#include <iostream>
using namespace std; 
 
 void sum(int arr[][3],int n, int m){
    int sum =0;
for(int j=0;j<m;j++){
    sum+=arr[1][j];
}
cout <<"sum of second row is "<<sum<<endl;
 }

int main(){
 
 int arr[3][3]={{1,4,9},{11,4,3},{2,2,3}};
 sum(arr,3,3);
 return 0;

}