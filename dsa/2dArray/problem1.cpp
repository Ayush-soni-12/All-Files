// print the number of all 7's that are in the 2d array

#include <iostream>
using namespace std; 
  
void search(int mat[][3],int n, int m, int num){
    int count =0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
        if (mat[i][j]==num){
            count++;
        }
        }
    }
    cout << "number is found "<<count<<" times"<<endl;
}

int main(){
    int matrix[2][3]={{4,7,8},{8,8,7}};
    int num =7;
    search(matrix ,2,3,num);
    return 0;
}