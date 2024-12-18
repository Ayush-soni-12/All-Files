#include <iostream>
using namespace std;

int trapWater (int heights[], int n ){
    int leftMax[20000],rightMax[20000];
    leftMax[0] = heights[0];
    for (int i =1;i<n ;i++){
   leftMax[i] = max(leftMax[i-1],heights[i-1]);
    }
    rightMax[n-1] = heights[n-1];
    for (int i = n-2; i>=0; i--){
        rightMax[i] = max(rightMax[i+1],heights[i+1]);
    }
    int waterTrap = 0;
    for (int i = 0; i<n ; i++){
        int Currwater = min(leftMax[i], rightMax[i])-heights[i];
        if(Currwater>0)
        waterTrap+=Currwater;
    }
    cout<< "total trap water is "<< waterTrap<< endl;
    return waterTrap;
}

int main (){
    int heights[] ={4,2,0,6,3,2,5};
    int n= sizeof(heights)/sizeof(int);

   trapWater(heights,n);
}