#include<iostream>
using namespace std;
 
 int pow(int x ,int n){
    if( n== 0){
        return 1;
    }
    int halfPow =pow(x,n/2);
    int halfPowsquare = halfPow*halfPow;
    if(n % 2 !=0){
        return x* halfPowsquare;

    }
    return halfPowsquare;
 }

int main(){
    int x , n;
    cout << "enter base"<< endl;
    cin >> x;
    cout << "enter power"<< endl;
    cin >> n;
    cout << "Answer is "<< pow(x,n)<< endl;
    return 0;

}