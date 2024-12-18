#include<iostream>
using namespace std;
 
 int factorial(int n ){
    if (n ==0){
        return 1;

    }
    int a = factorial(n-1)*n;
    return a;
 }

int main(){
    int n = 5;
     int ans =factorial(n);
    cout << ans;
    return 0;

}