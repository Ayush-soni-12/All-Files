#include<iostream>
#include<vector>
using namespace std;
 
 int firstOccurence(vector<int> arr, int i, int tar){
    if (i==-1){
        return -1;
    }
    if (arr[i]==tar){
      return i;
    }
    return firstOccurence(arr,--i ,tar);
 }
  

int main (){
    vector<int> arr ={1,2,1,4,5};
    int tar = 6;
  cout << firstOccurence(arr ,arr.size()-1,tar);
    return 0;
}