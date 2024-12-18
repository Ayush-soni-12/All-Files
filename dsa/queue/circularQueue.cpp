// queue ke andar two pointer banyege ek front ,and, rear humesa rear par value push krege aur pop krne liye front ka use krege 
// implementaion using array 
#include<iostream>
using namespace std;
 class Queue{
    int *arr;
    int capacity;
    int currentSize;
    int f,r;
    public:
    Queue(int capacity){
        this->capacity =capacity;
        arr = new int[capacity];
        currentSize =0;
        f=0;
        r=-1;

    }
    void push(int data){
        if(currentSize == capacity){
            cout<< "Queue is full "<<endl;
            return;

        }

        r =(r+1)%capacity;
        arr[r] =data;
        currentSize++;
        
    }
    void pop(){
        if(empty()) {
            cout<< "Queue is empty" <<endl;
            return;

        }
        f =(f+1)%capacity;
        currentSize--;
    }
    int front(){
          if(empty()) {
            cout<< "Queue is empty" <<endl;
            return -1;

        }
        return arr[f];
    }
    int display(){
        for( int i =f;i<=r;i++){
            cout << arr[i];
        }
    }
bool empty(){
    return currentSize ==0;
}

 };
int main(){
Queue q(5);
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
q.push(6);
q.pop();
q.push(6);

cout << q.front()<<endl;
q.display();
   return 0;
}