#include <iostream>
#include <stdio.h>
using namespace std;

struct queue {
    int data;
    struct queue*next;
};
struct queue *front = NULL ;
struct queue *rear = NULL;

void push(){
    struct queue*ptr = new queue();
    int n;
    if (ptr == NULL){
        cout << "queue is overflow" << endl;
    }
    else{
        cout <<"Enter value "<< endl;
        cin >> n;
        ptr->data=n;
        if (front == NULL ){
            ptr->next=NULL;
            front=ptr;
            rear=ptr;

        }
        else{
            rear->next =ptr;
            ptr->next=NULL;
            rear=ptr;
        }
        cout <<"element is inserted" << endl;
    }
}
void pop(){
 struct queue *ptr;

 if (front == NULL){
    cout << "queue is empty" << endl;
 }   
 else{
 ptr = front ;
 front = front->next;
 delete ptr;
 cout <<"element is pop" << endl;

 }

}
void display(){
    struct queue *ptr;
     ptr =front;
    if (front == NULL){
        cout << "queue is empty" << endl;

    }
    else{
       
        while(ptr!=NULL){
            cout << "element is " << ptr->data<<endl;
            ptr =ptr->next;
        }
    }
}
int main (){
   int choice = 0;
    while (true) {
        cout << "\nEnter choice:" << endl;
        cout << "1. Push an element" << endl;
        cout << "2. Pop an element" << endl;
        cout << "3. Display elements" << endl;
        cout << "4. Exit" << endl;
        cin >> choice;

        switch (choice) {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                cout << "Exiting" << endl;
                return 0;
            default:
                cout << "Enter a valid choice" << endl;
                break;
        }
    }
   return 0;
}