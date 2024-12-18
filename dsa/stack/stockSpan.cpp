// stock span problem
// isme span nikalne ke liye hum previous high dekhte hai 
#include<iostream>
#include<vector>
#include<stack>
using namespace std;
 
 void stockSpanproblem(vector<int> stock,vector<int> span){
    stack<int> s;
    s.push(0);
    span[0]=1;
    for(int i =1; i<stock.size(); i++){
        int currentPrice =stock[i];
        while(!s.empty()&&  currentPrice >=stock[s.top()]){
     s.pop();
        }
        if(s.empty()){
            span[i] =i+1;
        }else{
            int previousIdx =s.top();
            span[i] = i-previousIdx;
        }
    }
    for(int i =0 ;i<span.size();i++){
        cout<<span[i]<<" ";
    }
  cout<<endl;
 }

int main(){
    vector<int> stock{100,80,60,70,60,85,100};
    vector<int> span{0,0,0,0,0,0,0};
    stockSpanproblem(stock,span);
    return 0;

}