 //create stack using vector
 // is bale stack me kebal integer value hi store kra skte hai 
#include <iostream>
#include<vector>
using namespace std;
 
 class Stack{
    vector<int> vec;
    public :
      
      void push(int val){
        vec.push_back(val);
      }
      void pop(){
        if(isEmpty()){
            cout <<"stack is empity";
            return;
        }
        vec.pop_back();
      }
      int top(){
        if(isEmpty()){
            cout<<"stack is empty";
            return -1;
        }
        int lastIdx = vec.size()-1;
        return vec[lastIdx]; 
      
      
      }
      
      bool isEmpty(){
        return vec.size()==0;

      };
   };

int main(){
 Stack s;
 s.push(1);
 s.push(2);
 s.push(3);   
 
 while( !s.isEmpty()){
    cout <<s.top() <<" ";
    s.pop();
 }


    return 0;
}