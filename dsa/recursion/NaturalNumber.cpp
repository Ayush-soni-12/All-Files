#include<iostream>
using namespace std;
  
  int sum(int n){
    int sumNumber ;
    if(n==1){
        return 1 ;
    }
    sumNumber = n+sum(n-1);
    return sumNumber;
  }
 
 int main(){
    int n;
    cout << "enter number"<< endl;
    cin>> n;
    
    cout<<" sum of "<<n<<" number is = "<<sum(n)<< endl;
    return 0;
 }