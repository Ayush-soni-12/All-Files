#include <iostream>
using namespace std;
 
 int main (){
    int students[3][4];
    int n= 3,m=4;
    for(int i=0;i<n; i++){
        for (int j= 0; j<m;j++){
            cin >>students[i][j];
        }
   
    }
 for(int i=0;i<n; i++){
        for (int j= 0; j<m;j++){
            cout  << students[i][j]<<" ";
        }
        cout<< endl;
   
    }
 

 return 0;
 }