// reverse stack
#include<iostream>
#include<stack>
using namespace std;
 void pushatBottom(stack<int> &s,int val){
    if(s.empty()){
        s.push(val);
        return;
    }
 
 }

    void reverse(stack<int> &s ){
        if(s.empty()){
            return;
        }
        int temp = s.top();
        s.pop();
        reverse(s);
        pushatBottom(s,temp);
    }
    
    void print(stack<int> s){
        while(!s.empty()){
            cout<<s.top()<<" ";
            s.pop();
        }
        cout<< endl;
    }
int main(){
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    print(s);
    reverse(s);
    print(s);
    return 0;

}

//   int temp = s.top();
//     s.pop();
//     pushatBottom(s,val);
//     s.push(temp);