#include<iostream>
#include<stdio.h>
using namespace std;
struct node {
    int data;
    struct node*next;
};
struct node*front=nullptr;
struct node*rear =nullptr;

void insertion(int n){
    struct node*ptr=new node();
    if(ptr == NULL){
        cout << "list is overflow " << endl;
    }
    else if(front ==nullptr && rear ==nullptr){
        ptr->data=n;
        ptr->next=front;
        rear=ptr;
        front=ptr;
        cout << "element is inserted"<< endl;
    }else{
        ptr->data=n;
        rear->next=ptr;
        rear=ptr;
        rear->next=front;
        cout << "element is inserted"<< endl;
    }
}


void deletion(){
    struct node*ptr;
     ptr =front;
    if(front == nullptr && rear ==nullptr){
        cout << "queue is underflow "<< endl;
    }else if(front ==rear){
        front =nullptr;
        rear=nullptr;
        delete ptr;
        cout << "element is deleted "<< endl;
    }
    else
    {
        front =front->next;
        rear->next=front;
        delete ptr;
        cout << "element is deleted "<< endl;
    }
}
void display(){
    struct node*ptr;
     ptr =front;
    if(front ==nullptr && rear == nullptr){
        cout << "queue is empty" << endl;
    }
    else{
         while(ptr->next!=front){
            cout << "element is " << ptr->data<< endl;
            ptr=ptr->next;
         }
          cout << "element is " << ptr->data<< endl;

    }
}

int main (){
    insertion(1);
    insertion(2);
    insertion(3);
    insertion(4);
    display();
    deletion();
    deletion();
    display();
    insertion(5);
    display();
    return 0;

}