#include <iostream>
using namespace std;

 void diagonalMatrix(int matrix[][4] ,int n,int m ){
    int sum=0;
    
    // for (int i =0;i<n;i++){   (time complexity of this method is o(n kipower2) for less time complexity we do this problem in another method)
    //     for(int j=0;j<m;j++){
    //         if(i==j){
    //             sum+=matrix[i][j];

    //         }
    //         else if(j==n-i-1){
    //             sum+=matrix[i][j];

    //         }
    //     }
    // }
  
  for (int i =0;i<n;i++){
    sum +=matrix[i][i];
    if (i!=n-i-1){
        sum+=matrix[i][n-i-1];
    }

  }


    cout << "sum of  diagonal  is "<< sum<<endl;
 }
int main(){
    int matrix[4][4] ={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};

    diagonalMatrix(matrix ,4 ,4);
}