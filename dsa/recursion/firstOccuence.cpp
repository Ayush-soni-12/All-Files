#include<iostream>
#include<vector>
using namespace std;
 
 int firstOccurence(vector<int> arr, int i, int tar){
    if (i==arr.size()){
        return -1;
    }
    if (arr[i]==tar){
      return i;
    }
    return firstOccurence(arr,i+1 ,tar);
 }
  

int main (){
    vector<int> arr ={1,2,3,4,5};
    int tar = 7;
  cout<<   firstOccurence(  arr ,0,tar);
    return 0;
}