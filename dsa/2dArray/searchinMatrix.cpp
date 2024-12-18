// staircase search only apply when row and column both sorted
// time complexity is O(n+m)

#include <iostream>
using namespace std;
 
  bool search(int mat[][4] ,int n,int m,int key){
    int i=0,j=m-1;

  
  while( i <n &&j>=0){
      int cell = mat[i][j];
   if (cell==key){
    cout <<" found at cell ("<<i<<","<<j<<")\n";
    return true;
   }else if(cell<key){
    i++;
   }else{
    j--;
   }
  }
  cout <<"key not found"<<endl;
  return false;
 }

int main(){
int matrix[4][4]={{10,20,30,40,},{15,25,35,45},{27,29,37,48},{32,33,39,50}};
int key =33;
search(matrix,4,4,key);
    return 0;
}