// using vector with class Template
// is bale stack me hum kuch bhi store kra skte hai 
#include <iostream>
#include<vector>
using namespace std;
 template<class T>
 class Stack{
    vector<T> vec;
    public :
      
      void push(T val){
        vec.push_back(val);
      }
      void pop(){
        if(isEmpty()){
            cout <<"stack is empty";
            return;
        }
        vec.pop_back();
      }
      T top(){
        // if(isEmpty()){
        //     cout<<"stack is empty";
        //     return -1;
        // }
        int lastIdx = vec.size()-1;
        return vec[lastIdx]; 
      
      
      }
      
      bool isEmpty(){
        return vec.size()==0;

      };
   };

int main(){
    // hume btana pdega ki hume kis type ka data store krna pdega
    
 Stack <int> s;
 s.push(1);
 s.push(2);
 s.push(3);   
 
 while( !s.isEmpty()){
    cout <<s.top() <<" ";
    s.pop();
 }


    return 0;
}