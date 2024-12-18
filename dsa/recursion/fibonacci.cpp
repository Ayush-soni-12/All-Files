#include<iostream>
using namespace std;

int fibonacci(int n){
    if (n == 0 || n ==1){
        return n;
    }
    int ans ;
    ans =fibonacci(n-1) +fibonacci(n-2);
    return ans;
}

int main (){
    int n;
    cout << "enter number"<< endl;
    cin>> n;
    cout <<" Number is "<< fibonacci(n)<< endl;
    return 0;
}